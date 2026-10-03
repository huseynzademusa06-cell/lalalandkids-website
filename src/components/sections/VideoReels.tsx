import { useLanguage } from "../../context/languageContext";
import ReelCard from "../ui/ReelCard";

export default function VideoReels() {
  const { lang } = useLanguage();

  const reels = [
    {
      color: "bg-[image:var(--gradient-pink)]",
      titleEn: "Meet the Family",
      titleRu: "Наша семья",
      descEn: "Why we started Lala Land",
      descRu: "Почему мы создали Lala Land",
    },
    {
      color: "bg-[image:var(--gradient-sky)]",
      titleEn: "A Day at Lala Land",
      titleRu: "Один день в Lala Land",
      descEn: "Follow a whole day, morning to pickup",
      descRu: "Целый день — с утра до вечера",
    },
    {
      color: "bg-[image:var(--gradient-mint)]",
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
            <ReelCard key={i} reel={reel} />
          ))}
        </div>
      </div>
    </section>
  );
}
