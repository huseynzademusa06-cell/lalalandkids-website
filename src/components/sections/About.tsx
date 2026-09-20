import { useLanguage } from "../../context/languageContext";
import logoImg from "../../assets/logo.jpg";

export default function About() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="py-19">
      <div className="w-[min(1240px,94.5%)] mx-auto grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] gap-12.5 items-center">
        <div>
          <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.25 rounded-full mb-3.5 bg-sky-mist text-sky-deep">
            <span className={lang === "ru" ? "hidden" : "inline"}>About Us</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              О нас
            </span>
          </span>

          <h2 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-4">
            <span className={lang === "ru" ? "hidden" : "inline"}>
              A mother–daughter duo with an individual approach
            </span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Тандем мамы и дочери — и индивидуальный подход
            </span>
          </h2>

          <p className={lang === "ru" ? "hidden" : "block mb-4"}>
            At Lala Land, we believe in providing a nurturing, home-like environment where children
            feel safe, loved, and inspired to grow. Our childcare is proudly run by a
            mother-daughter duo, Gulsum and Lala, who bring their personal and professional
            experience as mothers to everything we do.
          </p>
          <p className={lang === "ru" ? "block mb-4" : "hidden"} lang="ru">
            В Lala Land мы убеждены: детям нужна заботливая, по-домашнему уютная атмосфера, в
            которой они чувствуют себя в безопасности, окружены любовью и с радостью растут. Наш
            детский сад с любовью ведут мама и дочь — Гюльсум и Лала, которые привносят свой личный
            и профессиональный материнский опыт во всё, что мы делаем.
          </p>

          <p className={lang === "ru" ? "hidden" : "block mb-4"}>
            Gulsum, a mother of three, started Lala Land with a passion for creating a space where
            every child is treated like family. Lala, a mother of one, designs engaging activities
            that inspire curiosity and joy through play and creativity. Together they combine deep
            love for children, family values, and attention to detail — so your little one is always
            in caring and capable hands.
          </p>
          <p className={lang === "ru" ? "block mb-4" : "hidden"} lang="ru">
            Гюльсум, мама троих детей, основала Lala Land, стремясь создать пространство, где
            каждого ребёнка принимают как члена семьи. Лала, мама одного ребёнка, разрабатывает
            увлекательные занятия, пробуждающие любознательность и радость через игру и творчество.
            Вместе они соединяют искреннюю любовь к детям, семейные ценности и внимание к деталям —
            ваш малыш всегда в заботливых и надёжных руках.
          </p>

          <div className="flex gap-3 mt-4.5 flex-wrap">
            <div className="bg-white rounded-brand-sm px-4.5 py-3 shadow-brand-soft text-[0.9rem]">
              <strong className="font-display text-sky-deep block">Gulsum</strong>
              <span className={lang === "ru" ? "hidden" : "inline"}>
                Founder · Licensed provider · Mother of three
              </span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Основатель · Владелец лицензии · Мама троих детей
              </span>
            </div>
            <div className="bg-white rounded-brand-sm px-4.5 py-3 shadow-brand-soft text-[0.9rem]">
              <strong className="font-display text-sky-deep block">Lala</strong>
              <span className={lang === "ru" ? "hidden" : "inline"}>
                Early learning &amp; activities · Mother of one
              </span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Раннее развитие и занятия · Мама одного ребёнка
              </span>
            </div>
          </div>
        </div>

        {/* PLACEHOLDER: replace with a real photo*/}
        <div className="rounded-brand overflow-hidden shadow-brand aspect-4/5 flex items-center justify-center bg-[linear-gradient(160deg,#eaf7fd,#fbd9e9_55%,#fdf3dc)] text-center p-7.5 text-ink-soft font-bold">
          <img
            src={logoImg}
            alt="Lala Land"
            className="w-[min(300px,70%)] rounded-[26px] shadow-brand"
          />
        </div>
      </div>
    </section>
  );
}
