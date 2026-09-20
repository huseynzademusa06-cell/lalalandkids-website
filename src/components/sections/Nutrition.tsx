import { useLanguage } from "../../context/languageContext";

export default function Nutrition() {
  const { lang } = useLanguage();

  const cards = [
    {
      icon: "i-plate",
      titleEn: "5 meals a day",
      titleRu: "5 приёмов пищи в день",
      descEn: "Three full meals and two snacks, every day.",
      descRu: "Три основных приёма пищи и два перекуса — каждый день.",
      border: "border-mint",
      iconColor: "text-mint-deep",
    },
    {
      icon: "i-leaf",
      titleEn: "Healthy",
      titleRu: "Здоровое",
      descEn: "Reduced salt and sugar content across the menu.",
      descRu: "Сниженное содержание соли и сахара во всём меню.",
      border: "border-sun",
      iconColor: "text-sun-deep",
    },
    {
      icon: "i-bowl",
      titleEn: "Balanced",
      titleRu: "Сбалансированное",
      descEn: "Fresh vegetables, fruits, whole grains, proteins, yogurt, milk, and eggs.",
      descRu: "Свежие овощи, фрукты, цельнозерновые продукты, белки, йогурт, молоко и яйца.",
      border: "border-pink",
      iconColor: "text-pink-deep",
    },
  ];

  return (
    <section id="nutrition" className="py-19 bg-cloud">
      <div className="w-[min(1240px,94.5%)] mx-auto">
        <div className="text-center max-w-175 mx-auto mb-11.5">
          <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-mint-mist text-mint-deep">
            <span className={lang === "ru" ? "hidden" : "inline"}>Nutrition</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Питание
            </span>
          </span>
          <h2 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)]">
            <span className={lang === "ru" ? "hidden" : "inline"}>
              Home-style food kids actually eat
            </span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Домашняя еда, которую дети действительно едят
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
