const PRODUCTION_ORIGINS = ['https://lalalandkids.care'];

function isAllowedOrigin(origin: string): boolean {
	return PRODUCTION_ORIGINS.includes(origin) || /^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin);
}

const FAKE_VIDEOS = {
	reels: ['data:text/html,%3Cbody%20style=%27background:white%27%3E%3Ch1%3ETest%20video%201%3C%2Fh1%3E', null, null],
	testimonials: [null, null, null],
	gallery: [null, null, null],
};

export default {
	async fetch(request: Request): Promise<Response> {
		const origin = request.headers.get('Origin') ?? '';
		const headers: Record<string, string> = { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=60', Vary: 'Origin' };

		if (isAllowedOrigin(origin)) headers['Access-Control-Allow-Origin'] = origin;

		return new Response(JSON.stringify(FAKE_VIDEOS), { headers });
	},
};
