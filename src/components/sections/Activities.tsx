import { useLanguage } from "../../context/languageContext";

export default function Activities() {
  const { lang } = useLanguage();

  const activities = [
    {
      icon: "i-blocks",
      titleEn: "Free Play",
      titleRu: "Самостоятельная игра",
      descEn: "Exploring toys and games to spark curiosity.",
      descRu: "Игрушки и игры, которые разжигают любознательность.",
      border: "border-sky",
      iconColor: "text-sky-deep",
    },
    {
      icon: "i-book",
      titleEn: "Storytime",
      titleRu: "Чтение историй",
      descEn: "Learning emotions and empathy through stories.",
      descRu: "Эмоции и сочувствие через истории.",
      border: "border-sky",
      iconColor: "text-sky-deep",
    },
    {
      icon: "i-bulb",
      titleEn: "Brain & Movement Games",
      titleRu: "Игры для ума и координации",
      descEn: "Building motor skills and brain development.",
      descRu: "Развитие моторики и умственных способностей.",
      border: "border-sky",
      iconColor: "text-sky-deep",
    },
    {
      icon: "i-smile",
      titleEn: "Imaginative Play",
      titleRu: "Творческая игра",
      descEn: "Role-play that boosts communication and social skills.",
      descRu: "Ролевые игры для общения и социальных навыков.",
      border: "border-sun",
      iconColor: "text-sun-deep",
    },
    {
      icon: "i-tree",
      titleEn: "Outdoor Fun",
      titleRu: "Прогулки на воздухе",
      descEn: "Playing outside to build physical skills.",
      descRu: "Игры на улице для физического развития.",
      border: "border-sky",
      iconColor: "text-sky-deep",
    },
    {
      icon: "i-apple",
      titleEn: "Snack & Rest",
      titleRu: "Перекус и отдых",
      descEn: "Healthy snacks and quiet time to recharge.",
      descRu: "Полезные перекусы и тихое время.",
      border: "border-sky",
      iconColor: "text-sky-deep",
    },
    {
      icon: "i-music",
      titleEn: "Music & Movement",
      titleRu: "Музыка и движение",
      descEn: "Dancing and singing that help speech and motor skills.",
      descRu: "Танцы и песни для речи и координации.",
      border: "border-sky",
      iconColor: "text-sky-deep",
    },
    {
      icon: "i-brush",
      titleEn: "Arts & Crafts",
      titleRu: "Творчество и поделки",
      descEn: "Simple art projects that grow creativity.",
      descRu: "Простые арт-проекты для развития креативности.",
      border: "border-sun",
      iconColor: "text-sun-deep",
    },
  ];

  return (
    <section id="activities" className="py-19">
      <div className="w-[min(1240px,94.5%)] mx-auto">
        <div className="text-center max-w-175 mx-auto mb-11.5">
          <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-mint-mist text-mint-deep">
            <span className={lang === "ru" ? "hidden" : "inline"}>Fun Activities</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Занятия
            </span>
          </span>
          <h2 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3">
            <span className={lang === "ru" ? "hidden" : "inline"}>
              Playful activities for happy, growing minds
            </span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Весёлые занятия для счастливого и гармоничного развития
            </span>
          </h2>
          <p className="text-ink-soft">
            <span className={lang === "ru" ? "hidden" : "inline"}>
              Play with toys and role-play builds creativity and communication; brain games sharpen
              focus and motor skills; outdoor play builds strength; storytime teaches emotions and
              empathy — and quiet time lets little bodies recharge.
            </span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Игры с игрушками и ролевые игры развивают креативность и общение, «игры для ума»
              улучшают концентрацию и моторику, прогулки укрепляют тело, чтение историй учит
              понимать эмоции, а тихое время помогает восстановить силы.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5.5">
          {activities.map((a, i) => (
            <div
              key={i}
              className={`bg-white rounded-brand p-6.5 shadow-brand-soft border-t-[5px] ${a.border} transition-all duration-200 hover:-translate-y-1 hover:shadow-brand`}
            >
              <div className={`mb-2.5 ${a.iconColor}`}>
                <svg className="w-8.5 h-8.5 stroke-current fill-none stroke-2 [stroke-linecap:round]">
                  <use href={`#${a.icon}`} />
                </svg>
              </div>
              <h3 className="text-[1.25rem] mb-2 font-display font-extrabold text-ink">
                <span className={lang === "ru" ? "hidden" : "inline"}>{a.titleEn}</span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  {a.titleRu}
                </span>
              </h3>
              <p className="text-ink-soft text-[0.95rem] mb-0">
                <span className={lang === "ru" ? "hidden" : "inline"}>{a.descEn}</span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  {a.descRu}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
