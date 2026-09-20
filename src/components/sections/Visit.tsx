import { useLanguage } from "../../context/languageContext";
import logoImg from "../../assets/logo.jpg";

export default function Visit() {
  const { lang } = useLanguage();

  return (
    <section id="visit" className="py-19 bg-cloud">
      <div className="w-[min(1240px,94.5%)] mx-auto">
        <div className="text-center max-w-175 mx-auto mb-11.5">
          <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-deep">
            <span className={lang === "ru" ? "hidden" : "inline"}>Visit Us</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Приходите к нам
            </span>
          </span>
          <h2 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3">
            <span className={lang === "ru" ? "hidden" : "inline"}>Book your free tour</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Запишитесь на бесплатный визит
            </span>
          </h2>
          <p className="text-ink-soft">
            <span className={lang === "ru" ? "hidden" : "inline"}>
              Come see a normal day — meet the teachers, see the rooms, ask us anything. And your
              little one goes home with a dragon.
            </span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Приходите посмотреть обычный день — познакомьтесь с воспитателями, посмотрите комнаты,
              задайте любые вопросы. А ваш малыш уйдёт домой с дракончиком.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          {/* Left column: contact list + tour card */}
          <div>
            <ul className="list-none">
              <li className="flex gap-3.5 py-3 items-start">
                <span className="flex-none w-8.5 text-center text-sky-deep">
                  <svg className="w-5.5 h-5.5 stroke-current fill-none stroke-2 inline-block">
                    <use href="#i-phone" />
                  </svg>
                </span>
                <div>
                  <strong className="font-display block">
                    <span className={lang === "ru" ? "hidden" : "inline"}>Phone</span>
                    <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                      Телефон
                    </span>
                  </strong>
                  <a href="tel:+14153505015" className="font-bold no-underline text-sky-deep">
                    (415) 350-5015
                  </a>
                </div>
              </li>
              <li className="flex gap-3.5 py-3 items-start">
                <span className="flex-none w-8.5 text-center text-sky-deep">
                  <svg className="w-5.5 h-5.5 stroke-current fill-none stroke-2 inline-block">
                    <use href="#i-pin" />
                  </svg>
                </span>
                <div>
                  <strong className="font-display block">
                    <span className={lang === "ru" ? "hidden" : "inline"}>Address</span>
                    <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                      Адрес
                    </span>
                  </strong>
                  842 Chrysopolis Dr, Foster City, CA 94404
                </div>
              </li>
              <li className="flex gap-3.5 py-3 items-start">
                <span className="flex-none w-8.5 text-center text-sky-deep">
                  <svg className="w-5.5 h-5.5 stroke-current fill-none stroke-2 inline-block">
                    <use href="#i-clock" />
                  </svg>
                </span>
                <div>
                  <strong className="font-display block">
                    <span className={lang === "ru" ? "hidden" : "inline"}>Hours</span>
                    <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                      Часы работы
                    </span>
                  </strong>
                  <span className={lang === "ru" ? "hidden" : "inline"}>
                    Mon–Fri, 8 AM – 6 PM · drop-off 8:00–9:30 AM
                  </span>
                  <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                    Пн–Пт, 8:00–18:00 · приём 8:00–9:30
                  </span>
                </div>
              </li>
              <li className="flex gap-3.5 py-3 items-start">
                <span className="flex-none w-8.5 text-center text-sky-deep">
                  <svg className="w-5.5 h-5.5 stroke-current fill-none stroke-2 inline-block">
                    <use href="#i-instagram" />
                  </svg>
                </span>
                <div>
                  <strong className="font-display block">Instagram</strong>

                  <a
                    href="https://www.instagram.com/lalalandkids_fostercity"
                    target="_blank"
                    rel="noopener"
                    className="font-bold no-underline text-sky-deep"
                  >
                    @lalalandkids_fostercity
                  </a>
                </div>
              </li>
            </ul>

            {/* Phone-first contact card (no email shown by owner's decision) */}
            <div className="bg-white rounded-brand shadow-brand-soft border-t-[5px] border-sky mt-4.5 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-brand">
              <h3 className="mb-2 font-display font-extrabold text-ink text-[1.25rem]">
                <span className={lang === "ru" ? "hidden" : "inline"}>Ready to visit?</span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  Готовы к визиту?
                </span>
              </h3>
              <p className="text-[0.95rem] text-ink-soft mb-3.5">
                <span className={lang === "ru" ? "hidden" : "inline"}>
                  Call or text us and we’ll set up your free tour — we speak English and Russian.
                </span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  Позвоните или напишите SMS — договоримся о бесплатном визите. Говорим по-русски и
                  по-английски.
                </span>
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="tel:+14153505015"
                  className="inline-block text-center font-display font-bold text-base px-6.5 py-3 rounded-full bg-sun text-sun-ink shadow-brand-soft transition-all duration-150 hover:-translate-y-0.5 hover:bg-sun-deep hover:shadow-brand"
                >
                  <span className={lang === "ru" ? "hidden" : "inline"}>Call (415) 350-5015</span>
                  <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                    Позвонить: (415) 350-5015
                  </span>
                </a>

                <a
                  href="sms:+14153505015?body=Hi!%20I%27d%20like%20to%20book%20a%20free%20tour%20of%20Lala%20Land%20Kids%20for%20my%20child%20(age%20___)."
                  className="inline-block text-center font-display font-bold text-base px-6.5 py-3 rounded-full bg-sun text-sun-ink shadow-brand-soft transition-all duration-150 hover:-translate-y-0.5 hover:bg-sun-deep hover:shadow-brand"
                >
                  <span className={lang === "ru" ? "hidden" : "inline"}>Text Us</span>
                  <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                    Написать SMS
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/lalalandkids_fostercity"
                  target="_blank"
                  rel="noopener"
                  aria-label="Message us on Instagram"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full flex-none border-2 border-sky text-sky-deep bg-white transition-all duration-150 hover:-translate-y-0.5 hover:bg-sky-mist"
                >
                  <svg className="w-6 h-6 stroke-current fill-none stroke-2">
                    <use href="#i-instagram" />
                  </svg>
                </a>
              </div>
              <p className="text-[0.8rem] text-ink-soft mt-2.5">
                <span className={lang === "ru" ? "hidden" : "inline"}>
                  Openings and tuition are discussed at your tour. We reply quickly — usually the
                  same business day.
                </span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  Свободные места и стоимость обсуждаем на визите. Мы отвечаем быстро — обычно в тот
                  же рабочий день.
                </span>
              </p>
            </div>
          </div>

          {/* Right column: provider reassurance card + map */}
          <div>
            <div className="bg-white rounded-brand shadow-brand-soft border-t-[5px] border-sky mb-4.5 p-5.5 flex gap-4.5 items-center flex-wrap transition-all duration-200 hover:-translate-y-1 hover:shadow-brand">
              <img src={logoImg} alt="Lala Land" className="w-21.5 rounded-brand-sm flex-none" />
              <div className="flex-1 min-w-55">
                <h3 className="mb-1 font-display font-extrabold text-ink text-[1.25rem]">
                  <span className={lang === "ru" ? "hidden" : "inline"}>
                    You’ll be touring with us
                  </span>
                  <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                    Визит проведём мы сами
                  </span>
                </h3>
                <p className="text-[0.88rem] text-ink-soft mb-2">
                  <span className={lang === "ru" ? "hidden" : "inline"}>
                    Gulsum Ahmadova — Licensed Provider, CDSS #414005148 · with Lala, activities
                    lead
                  </span>
                  <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                    Гюльсум Ахмадова — лицензия CDSS №414005148 · с Лалой, ведущей занятий
                  </span>
                </p>
                <ul className="list-none text-[0.88rem] text-ink-soft">
                  <li className="py-0.5">
                    <span className={lang === "ru" ? "hidden" : "inline"}>
                      — Meet Gulsum and Lala in person
                    </span>
                    <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                      — Познакомьтесь с Гюльсум и Лалой лично
                    </span>
                  </li>
                  <li className="py-0.5">
                    <span className={lang === "ru" ? "hidden" : "inline"}>
                      — See every room and the outdoor space
                    </span>
                    <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                      — Посмотрите все комнаты и площадку
                    </span>
                  </li>
                  <li className="py-0.5">
                    <span className={lang === "ru" ? "hidden" : "inline"}>
                      — Discuss your schedule, openings, and tuition
                    </span>
                    <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                      — Обсудите график, места и стоимость
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <iframe
              className="border-0 w-full rounded-brand shadow-brand bg-sky-mist"
              style={{ height: "290px" }}
              loading="lazy"
              title="Map — Lala Land, Foster City"
              src="https://www.google.com/maps?q=842+Chrysopolis+Dr,+Foster+City,+CA+94404&output=embed"
            />
          </div>
        </div>

        {/* What happens next — 3 steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5.5 mt-10">
          <div className="bg-white rounded-brand p-6 shadow-brand-soft text-center">
            <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center bg-sun text-sun-ink font-display font-extrabold text-[1.1rem]">
              1
            </div>
            <h3 className="text-[1.02rem] mb-1.5 font-display font-extrabold text-ink">
              <span className={lang === "ru" ? "hidden" : "inline"}>Call or text us</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Позвоните или напишите
              </span>
            </h3>
            <p className="text-[0.9rem] text-ink-soft m-0">
              <span className={lang === "ru" ? "hidden" : "inline"}>
                We’ll find a time that works — usually within a day or two.
              </span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Подберём удобное время — обычно в течение пары дней.
              </span>
            </p>
          </div>
          <div className="bg-white rounded-brand p-6 shadow-brand-soft text-center">
            <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center bg-sun text-sun-ink font-display font-extrabold text-[1.1rem]">
              2
            </div>
            <h3 className="text-[1.02rem] mb-1.5 font-display font-extrabold text-ink">
              <span className={lang === "ru" ? "hidden" : "inline"}>
                Visit for a 30-minute tour
              </span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Приходите на 30-минутный визит
              </span>
            </h3>
            <p className="text-[0.9rem] text-ink-soft m-0">
              <span className={lang === "ru" ? "hidden" : "inline"}>
                See a normal day, meet us, and ask anything — tuition included.
              </span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Посмотрите обычный день, познакомьтесь с нами, задайте любые вопросы.
              </span>
            </p>
          </div>
          <div className="bg-white rounded-brand p-6 shadow-brand-soft text-center">
            <div className="w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center bg-sun text-sun-ink font-display font-extrabold text-[1.1rem]">
              3
            </div>
            <h3 className="text-[1.02rem] mb-1.5 font-display font-extrabold text-ink">
              <span className={lang === "ru" ? "hidden" : "inline"}>We hold your spot</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Мы бронируем место
              </span>
            </h3>
            <p className="text-[0.9rem] text-ink-soft m-0">
              <span className={lang === "ru" ? "hidden" : "inline"}>
                Simple paperwork, and your little one’s place is saved.
              </span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Простые документы — и место за вашим малышом.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
