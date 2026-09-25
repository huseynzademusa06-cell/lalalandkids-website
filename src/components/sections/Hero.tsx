import { useLanguage } from "../../context/languageContext";
import AnchorLink from "../layout/AnchorLink";
import logoSrcSet from "../../assets/logo.jpg?w=280;560&format=webp&as=srcset";
import logoFallback from "../../assets/logo.jpg?w=280&format=webp";

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section className="relative overflow-hidden text-center pt-17.5 pb-22.5 bg-[radial-gradient(circle_at_85%_12%,rgba(69,190,234,0.14),transparent_38%),linear-gradient(180deg,#eaf7fd,#fffdf8)]">
      <div className="w-[min(1240px,94.5%)] mx-auto">
        <img
          src={logoFallback}
          srcSet={logoSrcSet}
          sizes="(min-width: 768px) 300px, 70vw"
          alt="Lala Land"
          width="280"
          height="249"
          className="rounded-[30px] shadow-brand mx-auto mb-6"
          loading="eager"
          fetchPriority="high"
        />

        <h1 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(2.1rem,5vw,3.4rem)] mb-3.5">
          <span className={lang === "ru" ? "hidden" : "inline"}>
            Welcome to <span className="text-sky-ocean">Lala Land</span>&nbsp;—
            <br />
            where your child feels at home
          </span>
          <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
            Добро пожаловать в <span className="text-sky-ocean">Lala Land</span>&nbsp;—
            <br />
            место, где ваш ребёнок чувствует себя как дома
          </span>
        </h1>

        <p className="text-[clamp(1.05rem,2.2vw,1.3rem)] font-body leading-[1.65] text-ink-soft max-w-160 mx-auto mb-2.5">
          <span className={lang === "ru" ? "hidden" : "inline"}>
            A licensed multilingual family daycare &amp; preschool in Foster City, California —
            English, Turkish, Azerbaijani, and Russian. Infants through preschool, in small groups
            with big attention.
          </span>
          <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
            Лицензированный многоязычный семейный детский сад с подготовкой к школе в Фостер-Сити,
            Калифорния — основной язык английский, каждый день звучат также турецкий,
            азербайджанский и русский. От младенцев до дошкольников — маленькие группы, максимум
            внимания.
          </span>
        </p>

        <p className="font-display text-[clamp(1.05rem,2.4vw,1.35rem)] text-pink-deep mb-7.5">
          <span className={lang === "ru" ? "hidden" : "inline"}>
            Powered by a mother’s love. Guided by a daughter’s heart.
          </span>
          <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
            Нами движет материнская любовь, а ведёт нас сердце дочери.
          </span>
        </p>

        <div className="flex gap-3.5 justify-center flex-wrap mb-4.5">
          <AnchorLink
            to="visit"
            className="inline-block text-center font-display font-bold text-[1.15rem] px-8.5 py-3.75 rounded-full bg-sun text-sun-ink shadow-brand-soft transition-all duration-150 hover:-translate-y-0.5 hover:bg-sun-deep hover:shadow-brand"
          >
            <span className={lang === "ru" ? "hidden" : "inline"}>Book a Free Tour</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Записаться на бесплатный визит
            </span>
          </AnchorLink>
          <AnchorLink
            to="day"
            className="inline-block text-center font-display font-bold text-[1.15rem] px-8.5 py-3.75 rounded-full bg-white text-sky-ocean border-2 border-sky transition-all duration-150 hover:-translate-y-0.5 hover:shadow-brand"
          >
            <span className={lang === "ru" ? "hidden" : "inline"}>See Our Day</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Наш день
            </span>
          </AnchorLink>
        </div>

        <div className="flex flex-wrap justify-center gap-x-7 gap-y-2.5 my-1.5 text-[0.95rem] font-body font-bold text-ink">
          <span className="inline-flex items-center gap-2">
            <svg className="w-4.75 h-4.75 text-sky-ocean flex-none">
              <use href="#i-clock" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span className={lang === "ru" ? "hidden" : "inline"}>
              Mon–Fri · drop-off 8:00–9:30 AM · pick-up until 6:00 PM
            </span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Пн–Пт · приём 8:00–9:30 · до 18:00
            </span>
          </span>
          <span className="inline-flex items-center gap-2">
            <svg className="w-4.75 h-4.75 text-sky-ocean flex-none">
              <use href="#i-pin" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>

            <a
              href="https://maps.google.com/?q=842+Chrysopolis+Dr,+Foster+City,+CA+94404"
              target="_blank"
              rel="noopener"
              className="text-ink no-underline hover:text-sky-ocean"
            >
              842 Chrysopolis Dr, Foster City
            </a>
          </span>
          <span className="inline-flex items-center gap-2">
            <svg className="w-4.75 h-4.75 text-sky-ocean flex-none">
              <use href="#i-phone" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
            <a href="tel:+14153505015" className="text-ink no-underline hover:text-sky-ocean">
              (415) 350-5015
            </a>
          </span>
        </div>

        <p className="text-[0.88rem] text-ink-soft mb-4">
          <span className={lang === "ru" ? "hidden" : "inline"}>
            Openings and tuition are discussed at your tour — call or text to schedule.
          </span>
          <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
            Свободные места и стоимость обсуждаем на визите — позвоните или напишите SMS.
          </span>
        </p>

        <p className="text-[0.95rem] text-ink-soft">
          <span className={lang === "ru" ? "hidden" : "inline"}>
            Every little visitor takes home their own plush dragon — a tour shouldn’t feel scary, it
            should feel like a gift.
          </span>
          <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
            Каждый маленький гость уносит домой своего плюшевого дракончика — визит должен не
            пугать, а радовать, как подарок.
          </span>
        </p>
      </div>
    </section>
  );
}
