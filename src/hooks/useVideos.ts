import { useEffect, useState } from "react";

export type VideoPlace = "reels" | "testimonials" | "gallery";

export type VideoSlots = Record<VideoPlace, (string | null)[]>;

const EMPTY: VideoSlots = {
  reels: [null, null, null],
  testimonials: [null, null, null],
  gallery: [null, null, null],
};

let request: Promise<VideoSlots> | null = null;

function loadVideos(): Promise<VideoSlots> {
  if (!request) {
    request = fetch(`${import.meta.env.BASE_URL}fake-videos.json`)
      .then((res) => (res.ok ? res.json() : EMPTY))
      .catch(() => EMPTY);
  }
  return request;
}

export function useVideos(place: VideoPlace): (string | null)[] {
  const [slots, setSlots] = useState<(string | null)[]>(EMPTY[place]);

  useEffect(() => {
    let cancelled = false;
    loadVideos().then((data) => {
      if (!cancelled) setSlots(data[place] ?? EMPTY[place]);
    });
    return () => {
      cancelled = true;
    };
  }, [place]);

  return slots;
}
