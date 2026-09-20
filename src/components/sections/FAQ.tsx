import { useLanguage } from "../../context/languageContext";

type FAQItem = {
  qEn: string;
  qRu: string;
  aEn: React.ReactNode;
  aRu: React.ReactNode;
};

export default function FAQ() {
  const { lang } = useLanguage();

  const items: FAQItem[] = [
    {
      qEn: "What ages do you take?",
      qRu: "Детей какого возраста вы принимаете?",
      aEn: "Infants from birth through preschoolers up to 5 years. Every age gets its own rhythm of naps, meals, and activities.",
      aRu: "Малышей с рождения и до 5 лет. Для каждого возраста — свой ритм сна, питания и занятий.",
    },
    {
      qEn: "What are your hours?",
      qRu: "Какой у вас график работы?",
      aEn: "Monday–Friday, 8 AM – 6 PM, with drop-off between 8:00 and 9:30 AM. After-hours care is available by appointment.",
      aRu: "Понедельник–пятница, с 8:00 до 18:00, приём с 8:00 до 9:30. Присмотр за ребёнком в нерабочие часы — по договорённости.",
    },
    {
      qEn: "What languages will my child hear?",
      qRu: "Какие языки будет слышать мой ребёнок?",
      aEn: "Our day runs primarily in English, and children also hear Turkish, Azerbaijani, and Russian naturally — through songs, stories, and everyday conversation.",
      aRu: "Основной язык дня — английский, а также дети естественно слышат турецкий, азербайджанский и русский — в песнях, историях и повседневном общении.",
    },
    {
      qEn: "Is food included?",
      qRu: "Питание включено?",
      aEn: "Yes — three full home-style meals and two snacks every day, with reduced salt and sugar.",
      aRu: "Да — три основных домашних приёма пищи и два перекуса каждый день, с пониженным содержанием соли и сахара.",
    },
    {
      qEn: "How does pricing work?",
      qRu: "Как формируется стоимость?",
      aEn: (
        <>
          Every family’s schedule is a little different, so we go over tuition in person at your
          free tour — no surprises, no pressure. Prefer the phone? Call{" "}
          <a href="tel:+14153505015" className="text-sky-deep">
            (415) 350-5015
          </a>
          .
        </>
      ),
      aRu: (
        <>
          График каждой семьи индивидуален, поэтому стоимость мы обсуждаем лично на бесплатном
          визите — без сюрпризов и давления. Удобнее по телефону? Звоните:{" "}
          <a href="tel:+14153505015" className="text-sky-deep">
            (415) 350-5015
          </a>
          .
        </>
      ),
    },
    {
      qEn: "Do you offer half-day or hourly care?",
      qRu: "Есть ли неполный день или почасовая оплата?",
      aEn: "Yes — full and half-day care with no age requirement, by appointment, with a half-day minimum. Hourly options exist too — we’ll go over the details together at your tour.",
      aRu: "Да — полный или неполный день без возрастных ограничений, по предварительной записи, минимум полдня. Есть и почасовой формат — детали обсудим при встрече.",
    },
    {
      qEn: "How do I get a spot?",
      qRu: "Как получить место?",
      aEn: "Book a free tour first — come see a normal day, meet Gulsum and Lala, and ask us anything. Spots are limited, so touring early is the best way to secure one.",
      aRu: "Сначала запишитесь на бесплатный визит — посмотрите обычный день, познакомьтесь с Гюльсум и Лалой. Мест немного, поэтому лучше прийти заранее.",
    },
  ];

  return (
    <section id="faq" className="py-19">
      <div className="w-[min(820px,94.5%)] mx-auto">
        <div className="text-center max-w-175 mx-auto mb-11.5">
          <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sun-mist text-sun-deep">
            <span className={lang === "ru" ? "hidden" : "inline"}>Questions</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Вопросы
            </span>
          </span>
          <h2 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)]">
            <span className={lang === "ru" ? "hidden" : "inline"}>What parents ask us</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Что спрашивают родители
            </span>
          </h2>
        </div>

        <div className="bg-white rounded-brand shadow-brand-soft border-t-[5px] border-sky px-7.5 py-3.5">
          {items.map((item, i) => (
            <details key={i} className="group">
              <summary
                className={`font-extrabold cursor-pointer py-3 list-none ${i > 0 ? "border-t border-cloud" : ""}`}
              >
                <span className={lang === "ru" ? "hidden" : "inline"}>{item.qEn}</span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  {item.qRu}
                </span>
              </summary>
              <p className="pb-3">
                <span className={lang === "ru" ? "hidden" : "inline"}>{item.aEn}</span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  {item.aRu}
                </span>
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
