import { useLanguage } from "../../context/languageContext";

export default function VideoReels() {
  const { lang } = useLanguage();

  const reels = [
    {
      titleEn: "Meet the Family",
      titleRu: "Наша семья",
      descEn: "Why we started Lala Land",
      descRu: "Почему мы создали Lala Land",
    },
    {
      titleEn: "A Day at Lala Land",
      titleRu: "Один день в Lala Land",
      descEn: "Follow a whole day, morning to pickup",
      descRu: "Целый день — с утра до вечера",
    },
    {
      titleEn: "The Free Tour",
      titleRu: "Бесплатный визит",
      descEn: "Come see a normal day — kids leave with a dragon",
      descRu: "Приходите посмотреть обычный день — дети уходят с дракончиком",
    },
  ];

  return (
    <section id="videos" className="py-19 bg-cloud">
      <div className="w-[min(1240px,94.5%)] mx-auto">
        <div className="text-center max-w-175 mx-auto mb-11.5">
          <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-ocean">
            <span className={lang === "ru" ? "hidden" : "inline"}>Watch</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Видео
            </span>
          </span>
          <h2 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3">
            <span className={lang === "ru" ? "hidden" : "inline"}>Real life at Lala Land</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Настоящая жизнь в Lala Land
            </span>
          </h2>
          <p className="text-ink-soft">
            <span className={lang === "ru" ? "hidden" : "inline"}>
              Short vertical videos of normal days — no staging, just how it actually feels here.
            </span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Короткие вертикальные видео обычных дней — без постановки, всё как есть.
            </span>
          </p>
        </div>

        {/* PLACEHOLDER VIDEO SLOTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6.5 max-w-225 mx-auto">
          {reels.map((reel, i) => (
            <div
              key={i}
              className="relative aspect-9/16 rounded-brand overflow-hidden shadow-brand flex flex-col items-center justify-center text-center p-6 text-white bg-[linear-gradient(160deg,#2ba5db,#156f96)]"
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <span className="absolute top-3.5 left-3.5 bg-black/35 text-[0.7rem] font-extrabold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full">
                <span className={lang === "ru" ? "hidden" : "inline"}>Video coming soon</span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  Видео скоро
                </span>
              </span>
              <span className="w-16 h-16 rounded-full bg-white/92 flex items-center justify-center text-[1.5rem] text-ink mb-4 shadow-brand transition-transform duration-200 hover:scale-110">
                ▶
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
          ))}
        </div>
      </div>
    </section>
  );
}
