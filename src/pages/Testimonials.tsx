import AnchorLink from "../components/layout/AnchorLink";
import SEO from "../components/SEO";
import { useLanguage } from "../context/languageContext";

const reels = [
  {
    color: "bg-[linear-gradient(160deg,#f472b6,#c2185b)]",
    titleEn: "Parent Voices",
    titleRu: "Голоса родителей",
    descEn: "Why families chose Lala Land",
    descRu: "Почему семьи выбрали Lala Land",
  },
  {
    color: "bg-[linear-gradient(160deg,#2ba5db,#156f96)]",
    titleEn: "A First Week Story",
    titleRu: "История первой недели",
    descEn: "From nervous drop-off to happy pickup",
    descRu: "От волнения при расставании до радости при встрече",
  },
  {
    color: "bg-[linear-gradient(160deg,#34d399,#0f9d78)]",
    titleEn: "Many Languages at Home",
    titleRu: "Много языков дома",
    descEn: "A family on multilingual daycare life",
    descRu: "Семья о жизни в многоязычном детском саду",
  },
];

export default function Testimonials() {
  const { lang } = useLanguage();

  return (
    <main className="font-body">
      <SEO
        title="Parent Testimonials - Lala Land, Foster City"
        description="What parents say about Lala Land - a multilingual family daycare and preschool in Foster City, CA (English-focused, with Turkish, Azerbaijani, and Russian)."
        path="/testimonials"
      />
      <section className="text-center pt-14 pb-16 bg-[radial-gradient(circle_at_85%_12%,rgba(69,190,234,0.14),transparent_38%),linear-gradient(180deg,#eaf7fd,#fffdf8)]">
        <div className="w-[min(1240px,94.5%)] mx-auto">
          <span
            className={`font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-ocean ${lang === "ru" ? "hidden" : "inline-block"}`}
          >
            Parent Voices
          </span>
          <span
            className={`font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-ocean ${lang === "ru" ? "inline-block" : "hidden"}`}
            lang="ru"
          >
            Отзывы родителей
          </span>
          <h1
            className={`font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(2.1rem,5vw,3.4rem)] mb-3.5 ${lang === "ru" ? "hidden" : "block"}`}
          >
            Families say it better
            <br />
            than we ever could
          </h1>
          <h1
            className={`font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(2.1rem,5vw,3.4rem)] mb-3.5 ${lang === "ru" ? "block" : "hidden"}`}
            lang="ru"
          >
            Родители расскажут
            <br />
            лучше, чем мы
          </h1>
          <p
            className={`text-[clamp(1.05rem,2.2vw,1.3rem)] text-ink-soft max-w-160 mx-auto mb-2.5 ${lang === "ru" ? "hidden" : "block"}`}
          >
            Parent voices, in writing and on camera. Don’t take our word for it: come see a normal
            day yourself.
          </p>
          <p
            className={`text-[clamp(1.05rem,2.2vw,1.3rem)] text-ink-soft max-w-160 mx-auto mb-2.5 ${lang === "ru" ? "block" : "hidden"}`}
            lang="ru"
          >
            Голоса родителей — в письмах и на видео. Не верьте нам на слово: приходите и посмотрите
            обычный день сами.
          </p>

          <p
            className={`text-[0.95rem] text-ink-soft ${lang === "ru" ? "block" : "hidden"}`}
            lang="ru"
          >
            Говорим по-русски — звоните:{" "}
            <a href="tel:+14153505015" className="text-sky-ocean">
              (415) 350-5015
            </a>
            .
          </p>

          <div className="flex justify-center mt-5.5">
            <AnchorLink
              to="visit"
              className="inline-block text-center font-display font-bold text-[1.15rem] px-8.5 py-3.75 rounded-full bg-sun text-sun-ink shadow-brand-soft transition-all duration-150 hover:-translate-y-0.5 hover:bg-sun-deep hover:shadow-brand"
            >
              <span className={lang === "ru" ? "hidden" : "inline"}>Book a Free Tour</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Записаться на бесплатный визит
              </span>
            </AnchorLink>
          </div>
        </div>
      </section>

      <section id="video-voices" className="py-19">
        <div className="w-[min(1240px,94.5%)] mx-auto">
          <div className="text-center max-w-175 mx-auto mb-11.5">
            <span
              className={`font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-ocean ${lang === "ru" ? "hidden" : "inline-block"}`}
            >
              Watch
            </span>
            <span
              className={`font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-ocean ${lang === "ru" ? "inline-block" : "hidden"}`}
              lang="ru"
            >
              Смотреть
            </span>
            <h2
              className={`font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3 ${lang === "ru" ? "hidden" : "block"}`}
            >
              Parent voices, on camera
            </h2>
            <h2
              className={`font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3 ${lang === "ru" ? "block" : "hidden"}`}
              lang="ru"
            >
              Голоса родителей на видео
            </h2>
            <p className={`text-ink-soft ${lang === "ru" ? "hidden" : "block"}`}>
              Short vertical videos — unscripted, in parents’ own words.
            </p>
            <p className={`text-ink-soft ${lang === "ru" ? "block" : "hidden"}`} lang="ru">
              Короткие вертикальные видео — без сценария, словами самих родителей.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6.5 max-w-225 mx-auto">
            {reels.map((reel, i) => (
              <div
                key={i}
                className={`relative aspect-9/16 rounded-brand overflow-hidden shadow-brand flex flex-col items-center justify-center text-center p-6 text-white ${reel.color}`}
              >
                <span
                  className={`absolute top-3.5 left-3.5 bg-black/35 text-[0.7rem] font-extrabold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full ${lang === "ru" ? "hidden" : "inline"}`}
                >
                  Video coming soon
                </span>
                <span
                  className={`absolute top-3.5 left-3.5 bg-black/35 text-[0.7rem] font-extrabold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full ${lang === "ru" ? "inline" : "hidden"}`}
                  lang="ru"
                >
                  Видео скоро появится
                </span>

                <span className="w-16 h-16 rounded-full bg-white/92 flex items-center justify-center text-ink mb-4 shadow-brand">
                  <svg className="w-5.5 h-5.5 stroke-current fill-none stroke-2">
                    <use href="#i-play" />
                  </svg>
                </span>
                <h3 className="text-white text-[1.1rem] [text-shadow:0_2px_8px_rgba(0,0,0,0.25)]">
                  {lang === "ru" ? reel.titleRu : reel.titleEn}
                </h3>
                <p className="text-[0.85rem] opacity-92 mt-1.5 [text-shadow:0_1px_6px_rgba(0,0,0,0.25)]">
                  {lang === "ru" ? reel.descRu : reel.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written testimonials return once real, permissioned parent quotes exist */}
      <section id="quotes" className="py-19 bg-cloud">
        <div className="w-[min(700px,94.5%)] mx-auto text-center">
          <span
            className={`font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-ocean ${lang === "ru" ? "hidden" : "inline-block"}`}
          >
            In Their Words
          </span>
          <span
            className={`font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-ocean ${lang === "ru" ? "inline-block" : "hidden"}`}
            lang="ru"
          >
            Их словами
          </span>

          <h2
            className={`font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3 ${lang === "ru" ? "hidden" : "block"}`}
          >
            Our first parent stories are on their way
          </h2>
          <h2
            className={`font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3 ${lang === "ru" ? "block" : "hidden"}`}
            lang="ru"
          >
            Первые истории родителей уже в пути
          </h2>

          <p className={`text-ink-soft ${lang === "ru" ? "hidden" : "block"}`}>
            We only publish real words from real families, with their permission — and we’re
            collecting those stories now. Until then, the best testimonial is a visit: come see a
            normal day yourself.
          </p>
          <p className={`text-ink-soft ${lang === "ru" ? "block" : "hidden"}`} lang="ru">
            Мы публикуем только настоящие слова настоящих семей, с их разрешения — и сейчас мы
            собираем эти истории. А пока лучший отзыв — это личный визит: приходите и посмотрите
            обычный день сами.
          </p>

          <div className="mt-2.5">
            <AnchorLink
              to="visit"
              className="inline-block text-center font-display font-bold text-[1.15rem] px-8.5 py-3.75 rounded-full bg-sun text-sun-ink shadow-brand-soft transition-all duration-150 hover:-translate-y-0.5 hover:bg-sun-deep hover:shadow-brand"
            >
              <span className={lang === "ru" ? "hidden" : "inline"}>Book a Free Tour</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Записаться на бесплатный визит
              </span>
            </AnchorLink>
          </div>

          <p className={`text-[0.88rem] text-ink-soft mt-3 ${lang === "ru" ? "hidden" : "block"}`}>
            Openings and tuition are discussed at your tour — call or text (415) 350-5015.
          </p>
          <p
            className={`text-[0.88rem] text-ink-soft mt-3 ${lang === "ru" ? "block" : "hidden"}`}
            lang="ru"
          >
            Свободные места и стоимость обсуждаются на визите — позвоните или напишите (415)
            350-5015.
          </p>
        </div>
      </section>

      <section className="bg-sky-ocean text-center text-white py-16">
        <div className="w-[min(1240px,94.5%)] mx-auto">
          <h2
            className={`text-white mb-2.5 font-display font-extrabold text-[clamp(1.7rem,3.6vw,2.4rem)] ${lang === "ru" ? "hidden" : "block"}`}
          >
            The best testimonial is a visit.
          </h2>
          <h2
            className={`text-white mb-2.5 font-display font-extrabold text-[clamp(1.7rem,3.6vw,2.4rem)] ${lang === "ru" ? "block" : "hidden"}`}
            lang="ru"
          >
            Лучший отзыв — это личный визит.
          </h2>

          <p
            className={`text-white max-w-140 mx-auto mb-6.5 ${lang === "ru" ? "hidden" : "block"}`}
          >
            Come meet the family behind Lala Land — and your little one goes home with a dragon.
            Openings and tuition are discussed at your tour.
          </p>
          <p
            className={`text-white max-w-140 mx-auto mb-6.5 ${lang === "ru" ? "block" : "hidden"}`}
            lang="ru"
          >
            Познакомьтесь с семьёй, которая стоит за Lala Land — а ваш малыш уйдёт домой с драконом.
            Свободные места и стоимость обсуждаются на визите.
          </p>

          <AnchorLink
            to="visit"
            className="inline-block text-center font-display font-bold text-[1.15rem] px-8.5 py-3.75 rounded-full bg-sun text-sun-ink transition-all duration-150 hover:-translate-y-0.5 hover:bg-sun-deep hover:shadow-brand"
          >
            Book a Free Tour
          </AnchorLink>

          <AnchorLink
            to="visit"
            className="inline-block text-center font-display font-bold text-[1.15rem] px-8.5 py-3.75 rounded-full bg-sun text-sun-ink transition-all duration-150 hover:-translate-y-0.5 hover:bg-sun-deep hover:shadow-brand"
          >
            <span className={lang === "ru" ? "hidden" : "inline"}>Book a Free Tour</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Записаться на бесплатный визит
            </span>
          </AnchorLink>
        </div>
      </section>
    </main>
  );
}
