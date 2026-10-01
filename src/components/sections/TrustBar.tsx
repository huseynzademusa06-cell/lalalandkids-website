import { useLanguage } from "../../context/languageContext";

export default function TrustBar() {
  const { lang } = useLanguage();

  const items = [
    {
      color: "bg-mint",
      en: "Licensed family child care — CDSS #414005148",
      ru: "Лицензия CDSS №414005148",
    },
    {
      color: "bg-sky",
      en: "English · Turkish · Azerbaijani · Russian",
      ru: "Языки: английский · турецкий · азербайджанский · русский",
    },
    {
      color: "bg-pink",
      en: "Small groups, low ratios",
      ru: "Маленькие группы, больше внимания",
    },
    {
      color: "bg-sun",
      en: "5 home-style meals a day",
      ru: "5-разовое домашнее питание",
    },
    {
      color: "bg-grape",
      en: "Daily photo updates for parents",
      ru: "Ежедневные фотоотчёты родителям",
    },
  ];

  return (
    <div className="bg-white shadow-brand-soft relative z-2">
      <div className="w-[min(1240px,94.5%)] mx-auto">
        <ul className="flex flex-wrap justify-center gap-x-7 gap-y-2 list-none py-3.5">
          {items.map((item, i) => (
            <li key={i} className="text-[0.92rem] font-bold text-ink-soft flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full flex-none ${item.color}`} />
              <span className={lang === "ru" ? "hidden" : "inline"}>{item.en}</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                {item.ru}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
