import AnchorLink from "../components/layout/AnchorLink";
import SEO from "../components/SEO";
import { useLanguage } from "../context/languageContext";

const spaceTiles = [
  {
    icon: "i-bottle",
    bg: "bg-[linear-gradient(150deg,#eaf7fd,#d3effb)]",
    titleEn: "Infant Room",
    titleRu: "Комната для малышей",
    descEn: "Photo coming soon — calm corner for our littlest ones",
    descRu: "Фото скоро появится — тихий уголок для самых маленьких",
  },
  {
    icon: "i-blocks",
    bg: "bg-[linear-gradient(150deg,#fdf0f5,#fbd9e9)]",
    titleEn: "Toddler Room",
    titleRu: "Комната для детей ясельного возраста",
    descEn: "Photo coming soon — where the action happens",
    descRu: "Фото скоро появится — здесь кипит жизнь",
  },
  {
    icon: "i-brush",
    bg: "bg-[linear-gradient(150deg,#fdf3dc,#ffedb0)]",
    titleEn: "Art & Creativity Zone",
    titleRu: "Зона творчества",
    descEn: "Photo coming soon — paint, dough, glitter, joy",
    descRu: "Фото скоро появится — краски, пластилин, блёстки и радость",
  },
  {
    icon: "i-book",
    bg: "bg-[linear-gradient(150deg,#eaf7fd,#d2f5ec)]",
    titleEn: "Reading Nook",
    titleRu: "Уголок для чтения",
    descEn: "Photo coming soon — cozy stories in many languages",
    descRu: "Фото скоро появится — уютные истории на разных языках",
  },
  {
    icon: "i-moon",
    bg: "bg-[linear-gradient(150deg,#f3ecfb,#e5daf6)]",
    titleEn: "Nap Room",
    titleRu: "Комната для сна",
    descEn: "Photo coming soon — quiet, dim, and dreamy",
    descRu: "Фото скоро появится — тихо, приглушённый свет и сладкие сны",
  },
  {
    icon: "i-tree",
    bg: "bg-[linear-gradient(150deg,#eaf7fd,#d3effb)]",
    titleEn: "Outdoor Play Area",
    titleRu: "Площадка для игр на улице",
    descEn: "Photo coming soon — enclosed, soft-surfaced, inspected",
    descRu: "Фото скоро появится — огороженная территория, мягкое покрытие, проверено",
  },
];

const momentTiles = [
  {
    icon: "i-bowl",
    bg: "bg-[linear-gradient(150deg,#fdf3dc,#ffedb0)]",
    titleEn: "Breakfast Together",
    titleRu: "Завтрак вместе",
  },
  {
    icon: "i-bulb",
    bg: "bg-[linear-gradient(150deg,#eaf7fd,#d2f5ec)]",
    titleEn: "Brain Games",
    titleRu: "Развивающие игры",
  },
  {
    icon: "i-music",
    bg: "bg-[linear-gradient(150deg,#fdf0f5,#fbd9e9)]",
    titleEn: "Music & Movement",
    titleRu: "Музыка и движение",
  },
  {
    icon: "i-brush",
    bg: "bg-[linear-gradient(150deg,#f3ecfb,#e5daf6)]",
    titleEn: "Arts & Crafts Hour",
    titleRu: "Час творчества",
  },
  {
    icon: "i-sun",
    bg: "bg-[linear-gradient(150deg,#eaf7fd,#d3effb)]",
    titleEn: "Morning Walk",
    titleRu: "Утренняя прогулка",
  },
  {
    icon: "i-star",
    bg: "bg-[linear-gradient(150deg,#fdf3dc,#ffedb0)]",
    titleEn: "Holidays & Birthdays",
    titleRu: "Праздники и дни рождения",
  },
];

const tourReels = [
  {
    color: "bg-[linear-gradient(160deg,#34d399,#0f9d78)]",
    titleEn: "Infant Room Tour",
    titleRu: "Тур по комнате малышей",
    descEn: "Where the tiniest ones spend their day",
    descRu: "Где самые маленькие проводят свой день",
  },
  {
    color: "bg-[linear-gradient(160deg,#2ba5db,#156f96)]",
    titleEn: "Full Walkthrough",
    titleRu: "Полный обзор",
    descEn: "Every room, front door to backyard",
    descRu: "Каждая комната — от входной двери до заднего двора",
  },
  {
    color: "bg-[linear-gradient(160deg,#f472b6,#c2185b)]",
    titleEn: "Outdoor Play",
    titleRu: "Прогулки на улице",
    descEn: "Fresh air, every single day",
    descRu: "Свежий воздух каждый день",
  },
];

function Tile({
  icon,
  bg,
  titleEn,
  titleRu,
  descEn,
  descRu,
}: {
  icon: string;
  bg: string;
  titleEn: string;
  titleRu: string;
  descEn: string;
  descRu: string;
}) {
  const { lang } = useLanguage();
  return (
    <div
      className={`relative rounded-brand overflow-hidden aspect-4/3 shadow-brand-soft flex flex-col items-center justify-center text-center p-5 transition-transform duration-200 hover:-translate-y-1 ${bg}`}
    >
      <div className="mb-2.5 text-ink-soft">
        <svg className="w-12 h-12 stroke-current fill-none stroke-2">
          <use href={`#${icon}`} />
        </svg>
      </div>
      <h3 className="text-[1.05rem] font-display font-extrabold text-ink">
        {lang === "ru" ? titleRu : titleEn}
      </h3>
      <p className="text-[0.82rem] text-ink-soft mt-1">{lang === "ru" ? descRu : descEn}</p>
    </div>
  );
}

export default function Gallery() {
  const { lang } = useLanguage();

  return (
    <main className="font-body">
      <SEO
        title="Gallery - Lala Land, Foster City"
        description="A look inside Lala Land - rooms, play areas, and everyday moments at our multilingual family daycare and preschool in Foster City, CA."
        path="/gallery"
      />
      <section className="text-center pt-14 pb-16 bg-[radial-gradient(circle_at_85%_12%,rgba(69,190,234,0.14),transparent_38%),linear-gradient(180deg,#eaf7fd,#fffdf8)]">
        <div className="w-[min(1240px,94.5%)] mx-auto">
          <span
            className={`font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-ocean ${lang === "ru" ? "hidden" : "inline-block"}`}
          >
            Gallery
          </span>
          <span
            className={`font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-ocean ${lang === "ru" ? "inline-block" : "hidden"}`}
            lang="ru"
          >
            Галерея
          </span>

          <h1
            className={`font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(2.1rem,5vw,3.4rem)] mb-3.5 ${lang === "ru" ? "hidden" : "block"}`}
          >
            Step inside Lala Land
          </h1>
          <h1
            className={`font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(2.1rem,5vw,3.4rem)] mb-3.5 ${lang === "ru" ? "block" : "hidden"}`}
            lang="ru"
          >
            Загляните в Lala Land
          </h1>

          <p
            className={`text-[clamp(1.05rem,2.2vw,1.3rem)] text-ink-soft max-w-160 mx-auto mb-2.5 ${lang === "ru" ? "hidden" : "block"}`}
          >
            Bright rooms, busy little hands, and everyday moments. Photos are shared with parent
            permission only — and the best tour is still the real one.
          </p>
          <p
            className={`text-[clamp(1.05rem,2.2vw,1.3rem)] text-ink-soft max-w-160 mx-auto mb-2.5 ${lang === "ru" ? "block" : "hidden"}`}
            lang="ru"
          >
            Светлые комнаты, маленькие занятые ручки и повседневные моменты. Фото публикуются только
            с разрешения родителей — а лучший тур всё же настоящий, вживую.
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
              <span className={lang === "ru" ? "hidden" : "inline"}>See It in Person</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Увидеть лично
              </span>
            </AnchorLink>
          </div>
        </div>
      </section>

      <section id="space" className="py-19">
        <div className="w-[min(1240px,94.5%)] mx-auto">
          <div className="text-center max-w-175 mx-auto mb-11.5">
            <span
              className={`font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-ocean ${lang === "ru" ? "hidden" : "inline-block"}`}
            >
              Our Space
            </span>
            <span
              className={`font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-ocean ${lang === "ru" ? "inline-block" : "hidden"}`}
              lang="ru"
            >
              Наше пространство
            </span>

            <h2
              className={`font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3 ${lang === "ru" ? "hidden" : "block"}`}
            >
              Rooms designed for little explorers
            </h2>
            <h2
              className={`font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3 ${lang === "ru" ? "block" : "hidden"}`}
              lang="ru"
            >
              Комнаты для маленьких исследователей
            </h2>

            <p className={`text-ink-soft ${lang === "ru" ? "hidden" : "block"}`}>
              Child-proofed, sunlit, and organized by what kids love to do.
            </p>
            <p className={`text-ink-soft ${lang === "ru" ? "block" : "hidden"}`} lang="ru">
              Безопасно для детей, светло и организовано вокруг любимых занятий малышей.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5">
            {spaceTiles.map((t, i) => (
              <Tile key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section id="moments" className="py-19 bg-cloud">
        <div className="w-[min(1240px,94.5%)] mx-auto">
          <div className="text-center max-w-175 mx-auto mb-11.5">
            <span
              className={`font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-ocean ${lang === "ru" ? "hidden" : "inline-block"}`}
            >
              Everyday Moments
            </span>
            <span
              className={`font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-ocean ${lang === "ru" ? "inline-block" : "hidden"}`}
              lang="ru"
            >
              Повседневные моменты
            </span>

            <h2
              className={`font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] ${lang === "ru" ? "hidden" : "block"}`}
            >
              What a normal day looks like
            </h2>
            <h2
              className={`font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] ${lang === "ru" ? "block" : "hidden"}`}
              lang="ru"
            >
              Как выглядит обычный день
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5">
            {momentTiles.map((t, i) => (
              <Tile key={i} {...t} descEn="Photo coming soon" descRu="Фото скоро появится" />
            ))}
          </div>
        </div>
      </section>

      <section id="video-tours" className="py-19">
        <div className="w-[min(1240px,94.5%)] mx-auto">
          <div className="text-center max-w-175 mx-auto mb-11.5">
            <span
              className={`font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-ocean ${lang === "ru" ? "hidden" : "inline-block"}`}
            >
              Video Tours
            </span>
            <span
              className={`font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-ocean ${lang === "ru" ? "inline-block" : "hidden"}`}
              lang="ru"
            >
              Видео-туры
            </span>

            <h2
              className={`font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3 ${lang === "ru" ? "hidden" : "block"}`}
            >
              Can’t visit yet? Take the video tour
            </h2>
            <h2
              className={`font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3 ${lang === "ru" ? "block" : "hidden"}`}
              lang="ru"
            >
              Пока не можете приехать? Посмотрите видео-тур
            </h2>

            <p className={`text-ink-soft ${lang === "ru" ? "hidden" : "block"}`}>
              Short vertical walkthroughs of the space — the next best thing to being here.
            </p>
            <p className={`text-ink-soft ${lang === "ru" ? "block" : "hidden"}`} lang="ru">
              Короткие вертикальные видео по нашему пространству — почти как быть здесь лично.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6.5 max-w-225 mx-auto">
            {tourReels.map((reel, i) => (
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

      <section className="bg-[linear-gradient(120deg,#1e9ed4,#156f96)] text-center text-white py-16">
        <div className="w-[min(1240px,94.5%)] mx-auto">
          <h2
            className={`text-white mb-2.5 font-display font-extrabold text-[clamp(1.7rem,3.6vw,2.4rem)] ${lang === "ru" ? "hidden" : "block"}`}
          >
            Pictures are nice. Visits are better.
          </h2>
          <h2
            className={`text-white mb-2.5 font-display font-extrabold text-[clamp(1.7rem,3.6vw,2.4rem)] ${lang === "ru" ? "block" : "hidden"}`}
            lang="ru"
          >
            Фотографии — это хорошо. Визит — ещё лучше.
          </h2>

          <p
            className={`text-white/90 max-w-140 mx-auto mb-6.5 ${lang === "ru" ? "hidden" : "block"}`}
          >
            Book a free tour, see every room in person, and ask us anything — your little one goes
            home with a dragon. Openings and tuition are discussed at your tour.
          </p>
          <p
            className={`text-white/90 max-w-140 mx-auto mb-6.5 ${lang === "ru" ? "block" : "hidden"}`}
            lang="ru"
          >
            Запишитесь на бесплатный визит, посмотрите каждую комнату лично и задайте любые вопросы
            — а ваш малыш уйдёт домой с драконом. Свободные места и стоимость обсуждаются на визите.
          </p>

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
