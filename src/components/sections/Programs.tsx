import { useLanguage } from "../../context/languageContext";
import AnchorLink from "../layout/AnchorLink";

export default function Programs() {
  const { lang } = useLanguage();

  return (
    <section id="programs" className="py-19 bg-cloud">
      <div className="w-[min(1240px,94.5%)] mx-auto">
        <div className="text-center max-w-175 mx-auto mb-11.5">
          <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-pink-mist text-pink-deep">
            <span className={lang === "ru" ? "hidden" : "inline"}>Programs</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Программы
            </span>
          </span>
          <h2 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3">
            <span className={lang === "ru" ? "hidden" : "inline"}>
              Care options for every family
            </span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Форматы посещения для каждой семьи
            </span>
          </h2>
          <p className="text-ink-soft">
            <span className={lang === "ru" ? "hidden" : "inline"}>
              Full-time, part-time, and flexible half-day options — meals included in every program.
              We go over tuition together at your free tour.
            </span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Полный день, неполный день и гибкие разовые посещения — питание включено во все
              программы. Стоимость мы обсуждаем лично на бесплатном визите.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5.5 items-stretch">
          {/* Infants */}
          <div className="bg-white rounded-brand p-6.5 shadow-brand-soft border-t-[5px] border-sky text-center flex flex-col">
            <h3 className="text-[1.25rem] mb-2 font-display font-extrabold text-ink">
              <span className={lang === "ru" ? "hidden" : "inline"}>Infants</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Младенцы
              </span>
            </h3>
            <p className="text-[0.9rem] text-ink-soft mb-3">
              <span className={lang === "ru" ? "hidden" : "inline"}>0–24 months</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                0–24 месяца
              </span>
            </p>
            <div className="font-display text-[1.6rem] font-extrabold text-ink">
              <span className={lang === "ru" ? "hidden" : "inline"}>Full-Time Care</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Полный день
              </span>
            </div>
            <p className="text-[0.9rem] text-ink-soft mb-3">
              <span className={lang === "ru" ? "hidden" : "inline"}>
                Monday–Friday, 8 AM – 6 PM
              </span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                понедельник–пятница, 8:00–18:00
              </span>
            </p>
            <ul className="list-none text-left text-[0.92rem] text-ink-soft my-2.5 mb-4.5">
              <li className="relative py-1.5 pl-6.5">
                <span className="absolute left-1 text-mint-deep font-extrabold">✓</span>
                <span className={lang === "ru" ? "hidden" : "inline"}>
                  All 5 daily meals included
                </span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  5-разовое питание включено
                </span>
              </li>
              <li className="relative py-1.5 pl-6.5">
                <span className="absolute left-1 text-mint-deep font-extrabold">✓</span>
                <span className={lang === "ru" ? "hidden" : "inline"}>Daily photo updates</span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  Ежедневные фотоотчёты
                </span>
              </li>
              <li className="relative py-1.5 pl-6.5">
                <span className="absolute left-1 text-mint-deep font-extrabold">✓</span>
                <span className={lang === "ru" ? "hidden" : "inline"}>Small-group attention</span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  Маленькая группа
                </span>
              </li>
            </ul>
            <AnchorLink
              to="visit"
              className="mt-auto inline-block text-center font-display font-bold text-base px-6.5 py-3 rounded-full bg-sun text-sun-ink shadow-brand-soft transition-all duration-150 hover:-translate-y-0.5 hover:bg-sun-deep hover:shadow-brand"
            >
              <span className={lang === "ru" ? "hidden" : "inline"}>Book a Tour</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Записаться
              </span>
            </AnchorLink>
          </div>

          {/* Toddlers & preschoolers */}
          <div className="bg-white rounded-brand p-6.5 shadow-brand-soft border-t-[5px] border-sky text-center flex flex-col">
            <h3 className="text-[1.25rem] mb-2 font-display font-extrabold text-ink">
              <span className={lang === "ru" ? "hidden" : "inline"}>
                Toddlers &amp; preschoolers
              </span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Малыши и дошкольники
              </span>
            </h3>
            <p className="text-[0.9rem] text-ink-soft mb-3">
              <span className={lang === "ru" ? "hidden" : "inline"}>24 months – 5 years</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                от 2 до 5 лет
              </span>
            </p>
            <div className="font-display text-[1.6rem] font-extrabold text-ink">
              <span className={lang === "ru" ? "hidden" : "inline"}>Full-Time Care</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Полный день
              </span>
            </div>
            <p className="text-[0.9rem] text-ink-soft mb-3">
              <span className={lang === "ru" ? "hidden" : "inline"}>
                Monday–Friday, 8 AM – 6 PM
              </span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                понедельник–пятница, 8:00–18:00
              </span>
            </p>
            <ul className="list-none text-left text-[0.92rem] text-ink-soft my-2.5 mb-4.5">
              <li className="relative py-1.5 pl-6.5">
                <span className="absolute left-1 text-mint-deep font-extrabold">✓</span>
                <span className={lang === "ru" ? "hidden" : "inline"}>
                  All 5 daily meals included
                </span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  5-разовое питание включено
                </span>
              </li>
              <li className="relative py-1.5 pl-6.5">
                <span className="absolute left-1 text-mint-deep font-extrabold">✓</span>
                <span className={lang === "ru" ? "hidden" : "inline"}>
                  Multilingual early learning
                </span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  Многоязычное раннее развитие
                </span>
              </li>
              <li className="relative py-1.5 pl-6.5">
                <span className="absolute left-1 text-mint-deep font-extrabold">✓</span>
                <span className={lang === "ru" ? "hidden" : "inline"}>
                  Preschool skill building
                </span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  Подготовка к школе
                </span>
              </li>
            </ul>
            <AnchorLink
              to="visit"
              className="mt-auto inline-block text-center font-display font-bold text-base px-6.5 py-3 rounded-full bg-sun text-sun-ink shadow-brand-soft transition-all duration-150 hover:-translate-y-0.5 hover:bg-sun-deep hover:shadow-brand"
            >
              <span className={lang === "ru" ? "hidden" : "inline"}>Book a Tour</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Записаться
              </span>
            </AnchorLink>
          </div>

          {/* Part-time */}
          <div className="bg-white rounded-brand p-6.5 shadow-brand-soft border-t-[5px] border-sun text-center flex flex-col">
            <h3 className="text-[1.25rem] mb-2 font-display font-extrabold text-ink">
              <span className={lang === "ru" ? "hidden" : "inline"}>Part-time</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Неполный день
              </span>
            </h3>
            <p className="text-[0.9rem] text-ink-soft mb-3">
              <span className={lang === "ru" ? "hidden" : "inline"}>all age groups</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                любой возраст
              </span>
            </p>
            <div className="font-display text-[1.6rem] font-extrabold text-ink">
              <span className={lang === "ru" ? "hidden" : "inline"}>Custom Schedule</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Гибкий график
              </span>
            </div>
            <p className="text-[0.9rem] text-ink-soft mb-3">
              <span className={lang === "ru" ? "hidden" : "inline"}>
                designed around your family
              </span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                подбирается под вашу семью
              </span>
            </p>
            <ul className="list-none text-left text-[0.92rem] text-ink-soft my-2.5 mb-4.5">
              <li className="relative py-1.5 pl-6.5">
                <span className="absolute left-1 text-mint-deep font-extrabold">✓</span>
                <span className={lang === "ru" ? "hidden" : "inline"}>
                  Schedule built with you personally
                </span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  График обсуждается лично
                </span>
              </li>
              <li className="relative py-1.5 pl-6.5">
                <span className="absolute left-1 text-mint-deep font-extrabold">✓</span>
                <span className={lang === "ru" ? "hidden" : "inline"}>
                  Same care, meals, and updates
                </span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  Та же забота, питание и отчёты
                </span>
              </li>
              <li className="relative py-1.5 pl-6.5">
                <span className="absolute left-1 text-mint-deep font-extrabold">✓</span>
                <span className={lang === "ru" ? "hidden" : "inline"}>
                  Details worked out at your tour
                </span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  Все детали обсудим при встрече
                </span>
              </li>
            </ul>
            <a
              href="tel:+14153505015"
              className="mt-auto inline-block text-center font-display font-bold text-base px-6.5 py-3 rounded-full bg-sun text-sun-ink transition-all duration-150 hover:-translate-y-0.5 hover:bg-sun-deep hover:shadow-brand"
            >
              <span className={lang === "ru" ? "hidden" : "inline"}>Call (415) 350-5015</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Позвонить (415) 350-5015
              </span>
            </a>
          </div>
        </div>

        {/* Full & half-day callout */}
        <div className="bg-white rounded-brand p-6.5 shadow-brand-soft border-t-[5px] border-sky mt-5.5 flex flex-wrap items-center gap-4 justify-between">
          <div>
            <h3 className="text-[1.25rem] mb-1 font-display font-extrabold text-ink">
              <span className={lang === "ru" ? "hidden" : "inline"}>Full &amp; half-day care</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Полный и неполный день разово
              </span>
            </h3>
            <p className="m-0 text-ink-soft text-[0.95rem]">
              <span className={lang === "ru" ? "hidden" : "inline"}>
                No age requirement · by appointment · minimum half day · hourly options available —
                we’ll go over details together.
              </span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Без возрастных ограничений · по предварительной записи · минимум полдня · возможен
                почасовой формат — детали обсудим при встрече.
              </span>
            </p>
          </div>

          <a
            href="tel:+14153505015"
            className="inline-block text-center font-display font-bold text-base px-6.5 py-3 rounded-full bg-white text-sky-deep border-2 border-sky transition-all duration-150 hover:-translate-y-0.5 hover:shadow-brand"
          >
            <span className={lang === "ru" ? "hidden" : "inline"}>Call (415) 350-5015</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Позвонить (415) 350-5015
            </span>
          </a>
        </div>

        <p className="text-center mt-5.5 text-[0.88rem] text-ink-soft">
          <span className={lang === "ru" ? "hidden" : "inline"}>
            Every family’s schedule is different, so we talk through tuition in person at your free
            tour — no surprises, no pressure. Spots are limited: if your age group is full, we keep
            a short waitlist and will tell you honestly what’s available and when. Holiday closures
            are communicated in advance. Meals are included in all programs.
          </span>
          <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
            График каждой семьи индивидуален, поэтому стоимость мы обсуждаем лично на бесплатном
            визите — без сюрпризов и давления. Мест немного: если ваша возрастная группа заполнена,
            мы ведём небольшой лист ожидания и честно скажем, что и когда освободится. О праздничных
            выходных мы сообщаем заранее. Питание включено во все программы.
          </span>
        </p>
      </div>
    </section>
  );
}
