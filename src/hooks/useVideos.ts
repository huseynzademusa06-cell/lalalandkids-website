import { useEffect, useState } from "react";

export type VideoPlace = "reels" | "testimonials" | "gallery";

export type VideoSlots = Record<VideoPlace, (string | null)[]>;

const SLOT_COUNT = 3;
const EMBED_HOSTS = ["iframe.mediadelivery.net"];

const emptyRow = (): (string | null)[] => Array.from({ length: SLOT_COUNT }, () => null);

const EMPTY: VideoSlots = {
  reels: emptyRow(),
  testimonials: emptyRow(),
  gallery: emptyRow(),
};

let request: Promise<unknown> | null = null;

const VIDEOS_URL: string =
  import.meta.env.VITE_VIDEOS_URL ?? `${import.meta.env.BASE_URL}fake-videos.json`;

function isEmbedUrl(value: unknown): value is string {
  if (typeof value !== "string") return false;
  let url: URL;
  try {
    url = new URL(value);
  } catch {
    return false;
  }
  // Dev only, for testing with fake videos. Delete before deploy
  if (import.meta.env.DEV && url.protocol === "data:") return true;
  return url.protocol === "https:" && EMBED_HOSTS.includes(url.hostname);
}

function cleanSlots(raw: unknown): (string | null)[] {
  const list: unknown[] = Array.isArray(raw) ? raw : [];
  return Array.from({ length: SLOT_COUNT }, (_, i) => {
    const item = list[i];
    return isEmbedUrl(item) ? item : null;
  });
}

function loadVideos(): Promise<unknown> {
  if (!request) {
    request = fetch(VIDEOS_URL)
      .then((res) => (res.ok ? res.json() : null))
      .catch(() => null);
  }
  return request;
}

export function useVideos(place: VideoPlace): (string | null)[] {
  const [slots, setSlots] = useState<(string | null)[]>(EMPTY[place]);

  useEffect(() => {
    let cancelled = false;
    loadVideos().then((data) => {
      if (cancelled) return;
      const raw =
        data && typeof data === "object" ? (data as Record<string, unknown>)[place] : undefined;
      setSlots(cleanSlots(raw));
    });
    return () => {
      cancelled = true;
    };
  }, [place]);

  return slots;
}
