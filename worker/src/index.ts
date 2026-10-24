const PRODUCTION_ORIGINS = ['https://lalalandkids.care'];
const PLACES = ['reels', 'testimonials', 'gallery'] as const;
const SLOT_COUNT = 3;
const BUNNY_API = 'https://video.bunnycdn.com';
const EMBED_HOST = 'https://player.mediadelivery.net';
const STATUS_FINISHED = 4;

type Place = (typeof PLACES)[number];
type Slots = Record<Place, (string | null)[]>;

interface WorkerEnv {
	BUNNY_LIBRARY_ID: string;
	BUNNY_API_KEY: string;
}
interface BunnyCollection {
	guid: string;
	name: string | null;
}
interface BunnyVideo {
	guid: string;
	status: number;
	collectionId: string | null;
	dateUploaded: string;
}
interface Page<T> {
	items: T[] | null;
}

function isAllowedOrigin(origin: string): boolean {
	return PRODUCTION_ORIGINS.includes(origin) || /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin);
}

async function bunnyGet<T>(path: string, env: WorkerEnv): Promise<T> {
	const res = await fetch(`${BUNNY_API}/library/${env.BUNNY_LIBRARY_ID}${path}`, {
		headers: { AccessKey: env.BUNNY_API_KEY },
	});
	if (!res.ok) throw new Error(`Bunny API returned ${res.status} for ${path}`);
	return (await res.json()) as T;
}

function embedUrl(libraryId: string, guid: string): string {
	return `${EMBED_HOST}/embed/${libraryId}/${guid}?autoplay=false&preload=false`;
}

async function buildSlots(env: WorkerEnv): Promise<Slots> {
	const [collections, videos] = await Promise.all([
		bunnyGet<Page<BunnyCollection>>('/collections?itemsPerPage=100', env),
		bunnyGet<Page<BunnyVideo>>('/videos?itemsPerPage=1000', env),
	]);

	const idByName = new Map<string, string>();
	for (const c of collections.items ?? []) {
		idByName.set((c.name ?? '').trim().toLowerCase(), c.guid);
	}

	const finished = (videos.items ?? []).filter((v) => v.status === STATUS_FINISHED && v.collectionId);

	const slots = {} as Slots;
	for (const place of PLACES) {
		slots[place] = Array.from({ length: SLOT_COUNT }, (_, i) => {
			const collectionId = idByName.get(`${place}-${i + 1}`);
			if (!collectionId) return null;
			const newest = finished
				.filter((v) => v.collectionId === collectionId)
				.sort((a, b) => Date.parse(b.dateUploaded) - Date.parse(a.dateUploaded))[0];
			return newest ? embedUrl(env.BUNNY_LIBRARY_ID, newest.guid) : null;
		});
	}
	return slots;
}

export default {
	async fetch(request: Request, env: WorkerEnv): Promise<Response> {
		const origin = request.headers.get('Origin') ?? '';
		const headers: Record<string, string> = {
			'Content-Type': 'application/json',
			Vary: 'Origin',
		};
		if (isAllowedOrigin(origin)) {
			headers['Access-Control-Allow-Origin'] = origin;
		}

		try {
			const slots = await buildSlots(env);
			return new Response(JSON.stringify(slots), {
				headers: { ...headers, 'Cache-Control': 'public, max-age=60' },
			});
		} catch (err) {
			console.error(err);
			return new Response(JSON.stringify({ error: 'videos unavailable' }), {
				status: 502,
				headers,
			});
		}
	},
};
