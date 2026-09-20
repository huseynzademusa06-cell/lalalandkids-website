import { useLanguage } from "../../context/languageContext";

export default function ForParents() {
  const { lang } = useLanguage();

  const cards = [
    {
      icon: "i-heart",
      titleEn: "Individual requests",
      titleRu: "Индивидуальные запросы",
      descEn:
        "Feeding off schedule, earlier naps or wake-ups, flexible attendance — we adapt to your child, not the other way around.",
      descRu:
        "Кормление вне расписания, ранний сон или подъём, гибкий график посещения — мы подстраиваемся под вашего ребёнка.",
      border: "border-sky",
      iconColor: "text-sky-deep",
    },
    {
      icon: "i-camera",
      titleEn: "Daily updates",
      titleRu: "Ежедневные отчёты",
      descEn:
        "A regular schedule of classes and events — plus daily notes with great photos of classes, games, and holidays.",
      descRu:
        "Регулярное расписание занятий и мероприятий — и ежедневные описания с красочными фотографиями.",
      border: "border-sky",
      iconColor: "text-sky-deep",
    },
    {
      icon: "i-shield",
      titleEn: "Safe environment",
      titleRu: "Безопасная среда",
      descEn:
        "Secure video surveillance, restricted electronic access, child-proofed rooms, HEPA air filtration, and CPR/first-aid trained staff.",
      descRu:
        "Видеонаблюдение, электронный пропуск с ограниченным доступом, безопасные помещения, HEPA-фильтрация воздуха и персонал, обученный первой помощи.",
      border: "border-sky",
      iconColor: "text-sky-deep",
    },
  ];

  return (
    <section id="parents" className="py-19">
      <div className="w-[min(1240px,94.5%)] mx-auto">
        <div className="text-center max-w-175 mx-auto mb-11.5">
          <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-deep">
            <span className={lang === "ru" ? "hidden" : "inline"}>For Parents</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Для родителей
            </span>
          </span>
          <h2 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)]">
            <span className={lang === "ru" ? "hidden" : "inline"}>
              Comfort and support — for the whole family
            </span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Комфорт и поддержка — для всей семьи
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`bg-white rounded-brand p-6.5 shadow-brand-soft border-t-[5px] ${card.border} transition-all duration-200 hover:-translate-y-1 hover:shadow-brand`}
            >
              <div className={`mb-2.5 ${card.iconColor}`}>
                <svg className="w-8.5 h-8.5 stroke-current fill-none stroke-2">
                  <use href={`#${card.icon}`} />
                </svg>
              </div>
              <h3 className="text-[1.25rem] mb-2 font-display font-extrabold text-ink">
                <span className={lang === "ru" ? "hidden" : "inline"}>{card.titleEn}</span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  {card.titleRu}
                </span>
              </h3>
              <p className="text-ink-soft text-[0.95rem] mb-0">
                <span className={lang === "ru" ? "hidden" : "inline"}>{card.descEn}</span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  {card.descRu}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
