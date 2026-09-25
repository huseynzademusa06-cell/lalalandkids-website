import { useLanguage } from "../../context/languageContext";
import AnchorLink from "../layout/AnchorLink";

type ScheduleItem = {
  time: string;
  en: string;
  ru: string;
};

export default function Schedule() {
  const { lang } = useLanguage();

  const morning: ScheduleItem[] = [
    { time: "9:00–9:30", en: "Breakfast", ru: "Завтрак" },
    {
      time: "9:30–10:00",
      en: "Educational activities — drawing, modeling, reading",
      ru: "Образовательные занятия — рисование, лепка, чтение",
    },
    { time: "10:00–10:30", en: "Snack + fruits", ru: "Перекус + фрукты" },
    {
      time: "10:30–11:30",
      en: "Outdoor walk or physical exercises",
      ru: "Прогулка или физические упражнения",
    },
    {
      time: "11:30–12:00",
      en: "Getting ready for lunch, hygiene",
      ru: "Подготовка к обеду, гигиена",
    },
  ];

  const afternoon: ScheduleItem[] = [
    { time: "12:00–12:30", en: "Lunch", ru: "Обед" },
    { time: "12:30–2:30", en: "Nap time", ru: "Дневной сон" },
    { time: "2:30–3:00", en: "Wake-up, hygiene", ru: "Пробуждение, гигиена" },
    {
      time: "3:00–4:00",
      en: "Creative activities — music, dancing, building",
      ru: "Творческие занятия — музыка, танцы, конструктор",
    },
  ];

  const evening: ScheduleItem[] = [
    { time: "4:00–4:30", en: "Dinner", ru: "Ужин" },
    { time: "4:30–4:45", en: "Hygiene", ru: "Гигиена" },
    {
      time: "4:45–5:30",
      en: "Outdoor walk or active indoor games, light snack",
      ru: "Прогулка или активные игры, лёгкий перекус",
    },
    {
      time: "5:30–6:00",
      en: "Quiet games, reading, going home",
      ru: "Спокойные игры, чтение, встреча родителей",
    },
  ];

  const columns = [
    { titleEn: "Morning", titleRu: "Утро", items: morning },
    { titleEn: "Afternoon", titleRu: "День", items: afternoon },
    { titleEn: "Evening", titleRu: "Вечер", items: evening },
  ];

  return (
    <section id="day" className="py-19">
      <div className="w-[min(1240px,94.5%)] mx-auto">
        <div className="text-center max-w-175 mx-auto mb-11.5">
          <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-ocean">
            <span className={lang === "ru" ? "hidden" : "inline"}>Schedule</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Расписание
            </span>
          </span>
          <h2 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3">
            <span className={lang === "ru" ? "hidden" : "inline"}>A day at Lala Land</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Один день в Lala Land
            </span>
          </h2>
          <p className="text-ink-soft">
            <span className={lang === "ru" ? "hidden" : "inline"}>
              A sample day for ages 18 months to 5 years. Drop-off is 8:00–9:30 AM, and we’re open
              Monday–Friday, 8 AM to 6 PM.
            </span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Пример обычного дня для детей от 18 месяцев до 5 лет. Приём с 8:00 до 9:30, работаем с
              понедельника по пятницу с 8:00 до 18:00.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5.5">
          {columns.map((col, i) => (
            <div key={i} className="bg-white rounded-brand p-6.5 shadow-brand-soft">
              <h3 className="flex items-center gap-2.5 mb-4 pb-3 border-b-2 border-dashed border-sky-mist font-display font-extrabold text-ink text-[1.25rem]">
                <span className={lang === "ru" ? "hidden" : "inline"}>{col.titleEn}</span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  {col.titleRu}
                </span>
              </h3>
              <ul className="list-none">
                {col.items.map((item, j) => (
                  <li
                    key={j}
                    className={`flex gap-3 py-2 text-[0.93rem] ${j > 0 ? "border-t border-cloud" : ""}`}
                  >
                    <time className="font-extrabold text-sky-ocean whitespace-nowrap flex-none w-27">
                      {item.time}
                    </time>
                    <span className={lang === "ru" ? "hidden" : "inline"}>{item.en}</span>
                    <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                      {item.ru}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center mt-6.5 text-ink-soft text-[0.95rem]">
          <span className={lang === "ru" ? "hidden" : "inline"}>
            After-hours care is available by appointment —{" "}
            <a href="#visit" className="text-sky-ocean">
              contact us
            </a>
            .
          </span>
          <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
            Присмотр в нерабочие часы — по записи,{" "}
            <AnchorLink to="visit" className="text-sky-ocean">
              contact us
            </AnchorLink>
            .
          </span>
        </p>
      </div>
    </section>
  );
}
