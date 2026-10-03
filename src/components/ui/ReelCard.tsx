import { useLanguage } from "../../context/languageContext";

export type Reel = {
  color: string;
  titleEn: string;
  titleRu: string;
  descEn: string;
  descRu: string;
};

export default function ReelCard({ reel }: { reel: Reel }) {
  const { lang } = useLanguage();

  return (
    <div
      className={`relative aspect-9/16 rounded-brand overflow-hidden shadow-brand flex flex-col items-center justify-center text-center p-6 text-white ${reel.color}`}
    >
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <span className="absolute top-3.5 left-3.5 bg-black/35 text-[0.7rem] font-extrabold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full">
        <span className={lang === "ru" ? "hidden" : "inline"}>Video coming soon</span>
        <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
          Видео скоро
        </span>
      </span>
      <span className="relative w-16 h-16 rounded-full bg-white/92 flex items-center justify-center text-ink mb-4 shadow-brand">
        <svg className="w-5.5 h-5.5 stroke-current fill-none stroke-2">
          <use href="#i-play" />
        </svg>
      </span>
      <h3 className="relative text-white text-[1.1rem]">
        <span className={lang === "ru" ? "hidden" : "inline"}>{reel.titleEn}</span>
        <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
          {reel.titleRu}
        </span>
      </h3>
      <p className="relative text-[0.85rem] mt-1.5">
        <span className={lang === "ru" ? "hidden" : "inline"}>{reel.descEn}</span>
        <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
          {reel.descRu}
        </span>
      </p>
    </div>
  );
}
