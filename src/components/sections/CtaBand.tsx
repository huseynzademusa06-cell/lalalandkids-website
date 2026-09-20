// src/components/sections/CtaBand.tsx
import { useLanguage } from "../../context/languageContext";
import AnchorLink from "../layout/AnchorLink";

export default function CtaBand() {
  const { lang } = useLanguage();

  return (
    <section className="bg-[linear-gradient(120deg,#1e9ed4,#156f96)] text-center text-white py-16">
      <div className="w-[min(1240px,94.5%)] mx-auto">
        <h2 className="text-white mb-2.5 font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-[clamp(1.7rem,3.6vw,2.4rem)]">
          <span className={lang === "ru" ? "hidden" : "inline"}>
            Choosing childcare is a big decision.
          </span>
          <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
            Выбор детского сада — большое решение.
          </span>
        </h2>
        <p className="text-white/90 max-w-140 mx-auto mb-6.5">
          <span className={lang === "ru" ? "hidden" : "inline"}>
            Don’t decide from a website — come see a normal day with your own eyes. Meet us, ask us
            anything, and feel the difference the second you walk in. Openings and tuition are
            discussed at your tour.
          </span>
          <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
            Не решайте по сайту — приходите и посмотрите обычный день своими глазами. Познакомьтесь
            с нами и почувствуйте разницу с первой минуты. Свободные места и стоимость обсуждаем на
            визите.
          </span>
        </p>
        <div className="flex gap-3.5 justify-center flex-wrap">
          <AnchorLink
            to="visit"
            className="inline-block text-center font-display font-bold text-[1.15rem] px-8.5 py-3.75 rounded-full bg-sun text-sun-ink transition-all duration-150 hover:-translate-y-0.5 hover:bg-sun-deep hover:shadow-brand"
          >
            <span className={lang === "ru" ? "hidden" : "inline"}>Book a Free Tour</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Записаться на визит
            </span>
          </AnchorLink>

          <a
            href="sms:+14153505015?body=Hi!%20I%27d%20like%20to%20book%20a%20free%20tour%20of%20Lala%20Land%20Kids%20for%20my%20child%20(age%20___)."
            className="inline-block text-center font-display font-bold text-[1.15rem] px-8.5 py-3.75 rounded-full bg-transparent text-white border-2 border-white/70 transition-all duration-150 hover:-translate-y-0.5"
          >
            <span className={lang === "ru" ? "hidden" : "inline"}>Text (415) 350-5015</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              SMS: (415) 350-5015
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
