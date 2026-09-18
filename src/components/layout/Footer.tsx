import { Link } from "react-router-dom";
import { useLanguage } from "../../context/languageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-[#c6cede] pt-13.5 pb-7.5">
      <div className="w-[min(1240px,94.5%)] mx-auto">
        <div className="h-1.25 rounded-full mb-8.5 bg-[linear-gradient(90deg,#45beea,#1e9ed4)]" />

        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr] gap-9 mb-8.5">
          <div>
            <div className="font-display font-extrabold text-[1.2rem] text-white mb-2.5">
              Lala Land Child Care &amp; Preschool
            </div>
            <p className="text-[0.9rem]">
              <span className={lang === "ru" ? "hidden" : "inline"}>
                Bilingual English–Russian family daycare &amp; preschool in Foster City, California.
                Powered by a mother’s love, guided by a daughter’s heart.
              </span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Двуязычный семейный детский сад с подготовкой к школе в Фостер-Сити, Калифорния.
                Нами движет материнская любовь, а ведёт нас сердце дочери.
              </span>
            </p>
          </div>

          <div>
            <h4 className="text-white mb-3 text-base">
              <span className={lang === "ru" ? "hidden" : "inline"}>Explore</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Разделы
              </span>
            </h4>
            <ul className="list-none">
              <li className="mb-2 text-[0.92rem]">
                <Link to="/" className="text-[#c6cede] no-underline hover:text-sun">
                  <span className={lang === "ru" ? "hidden" : "inline"}>Home</span>
                  <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                    Главная
                  </span>
                </Link>
              </li>
              <li className="mb-2 text-[0.92rem]">
                <Link to="/testimonials" className="text-[#c6cede] no-underline hover:text-sun">
                  <span className={lang === "ru" ? "hidden" : "inline"}>Parent Testimonials</span>
                  <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                    Отзывы родителей
                  </span>
                </Link>
              </li>
              <li className="mb-2 text-[0.92rem]">
                <Link to="/gallery" className="text-[#c6cede] no-underline hover:text-sun">
                  <span className={lang === "ru" ? "hidden" : "inline"}>Gallery</span>
                  <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                    Галерея
                  </span>
                </Link>
              </li>
              <li className="mb-2 text-[0.92rem]">
                <Link to="/newsletter" className="text-[#c6cede] no-underline hover:text-sun">
                  <span className={lang === "ru" ? "hidden" : "inline"}>News &amp; Blog</span>
                  <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                    Новости и блог
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-3 text-base">
              <span className={lang === "ru" ? "hidden" : "inline"}>Contact</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Контакты
              </span>
            </h4>
            <ul className="list-none">
              <li className="mb-2 text-[0.92rem]">
                <a href="tel:+14153505015" className="text-[#c6cede] no-underline hover:text-sun">
                  (415) 350-5015
                </a>
              </li>
              <li className="mb-2 text-[0.92rem]">842 Chrysopolis Dr, Foster City, CA 94404</li>
              <li className="mb-2 text-[0.92rem]">
                <a
                  href="https://www.instagram.com/lalalandkids_fostercity"
                  target="_blank"
                  rel="noopener"
                  aria-label="Instagram"
                  className="text-[#c6cede] no-underline hover:text-sun"
                >
                  <svg
                    className="w-5.5 h-5.5 inline-block align-[-6px] mr-1.5"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <use href="#i-instagram" />
                  </svg>
                  @lalalandkids_fostercity
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="border-t border-white/14 pt-5.5 text-[0.83rem] text-center text-[#9aa6bd]">
          <span className={lang === "ru" ? "hidden" : "inline"}>
            Licensed family child care home · Provider: Gulsum Ahmadova · CDSS Community Care
            Licensing #414005148
            <br />© {year} Lala Land Child Care and Preschool · lalalandkids.care
          </span>
          <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
            Лицензированный семейный детский сад · Лицензиат: Гюльсум Ахмадова · Лицензия CDSS
            №414005148
            <br />© {year} Lala Land Child Care and Preschool · lalalandkids.care
          </span>
        </p>
      </div>
    </footer>
  );
}
