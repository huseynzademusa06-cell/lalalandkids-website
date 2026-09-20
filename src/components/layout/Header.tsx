import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../../context/languageContext";
import logoImg from "../../assets/logo.jpg";
import AnchorLink from "./AnchorLink";
import { useActiveSection } from "../../hooks/useActiveSection";

const SECTION_IDS = ["about", "day", "programs"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle } = useLanguage();
  const location = useLocation();
  const activeSection = useActiveSection(SECTION_IDS);

  const closeMenu = () => setMenuOpen(false);
  const isHome = location.pathname === "/";
  const isSectionActive = (id: string) => isHome && activeSection === id;
  const isRouteActive = (path: string) => location.pathname === path;

  const linkClass = (active: boolean) =>
    `no-underline font-display font-bold text-[0.95rem] px-3 py-2 rounded-full transition-colors duration-200 whitespace-nowrap ${
      active ? "bg-sun-mist text-sun-deep" : "text-ink hover:bg-sky-mist hover:text-sky-deep"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-cream/94 backdrop-blur-md border-b-3 border-transparent [border-image:var(--rainbow,linear-gradient(to_right,#45beea,#f7b32b))_1]">
      <div className="w-[min(1240px,94.5%)] mx-auto flex items-center gap-5 py-2.5 relative">
        <Link className="flex items-center gap-3 no-underline" to="/" onClick={closeMenu}>
          <img
            src={logoImg}
            alt="Lala Land logo — friendly dragon under a rainbow"
            className="w-15.5 h-auto rounded-brand-sm"
          />
          <span className="font-display font-extrabold text-[1.3rem] text-sky-deep leading-tight whitespace-nowrap">
            Lala Land
            <small
              className={`block text-[0.68rem] tracking-[0.14em] uppercase text-pink-deep ${lang === "ru" ? "hidden" : "block"}`}
            >
              Child Care &amp; Preschool
            </small>
            <small
              className={`block text-[0.68rem] tracking-[0.14em] uppercase text-pink-deep ${lang === "ru" ? "block" : "hidden"}`}
              lang="ru"
            >
              Детский сад и подготовка к школе
            </small>
          </span>
        </Link>

        <button
          className="hidden max-[920px]:block ml-auto bg-transparent border-none text-[1.7rem] cursor-pointer text-ink"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>

        <ul
          className={`
          flex items-center gap-1 ml-auto list-none
          max-[920px]:absolute max-[920px]:top-full max-[920px]:left-0 max-[920px]:right-0 
          max-[920px]:bg-white max-[920px]:shadow-brand max-[920px]:flex-col max-[920px]:items-stretch 
          max-[920px]:text-center max-[920px]:p-3.5 max-[920px]:ml-0
          ${menuOpen ? "max-[920px]:flex" : "max-[920px]:hidden"}
        `}
        >
          <li>
            <AnchorLink
              to="about"
              onClick={closeMenu}
              className={linkClass(isSectionActive("about"))}
            >
              <span className={lang === "ru" ? "hidden" : "inline"}>About</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                О нас
              </span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink to="day" onClick={closeMenu} className={linkClass(isSectionActive("day"))}>
              <span className={lang === "ru" ? "hidden" : "inline"}>Our Day</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Наш день
              </span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink
              to="programs"
              onClick={closeMenu}
              className={linkClass(isSectionActive("programs"))}
            >
              <span className={lang === "ru" ? "hidden" : "inline"}>Programs</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Программы
              </span>
            </AnchorLink>
          </li>
          <li>
            <Link
              to="/testimonials"
              onClick={closeMenu}
              className={linkClass(isRouteActive("/testimonials"))}
            >
              <span className={lang === "ru" ? "hidden" : "inline"}>Testimonials</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Отзывы
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              onClick={closeMenu}
              className={linkClass(isRouteActive("/gallery"))}
            >
              <span className={lang === "ru" ? "hidden" : "inline"}>Gallery</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Галерея
              </span>
            </Link>
          </li>
          <li>
            <Link
              to="/newsletter"
              onClick={closeMenu}
              className={linkClass(isRouteActive("/newsletter"))}
            >
              <span className={lang === "ru" ? "hidden" : "inline"}>News &amp; Blog</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Новости
              </span>
            </Link>
          </li>
          <li>
            <AnchorLink
              to="#visit"
              onClick={closeMenu}
              className="
                inline-block no-underline text-center font-display font-bold text-base px-3 py-2 rounded-full border-none cursor-pointer
                bg-sun text-sun-ink shadow-brand-soft transition-all duration-150
                hover:-translate-y-0.5 hover:bg-sun-deep hover:shadow-brand max-[920px]:mt-2 max-[920px]:w-full
              "
            >
              <span className={lang === "ru" ? "hidden" : "inline"}>Book a Free Tour</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Записаться на визит
              </span>
            </AnchorLink>
          </li>
        </ul>

        <button
          className="ml-2.5 max-[920px]:ml-0 border-2 border-sky bg-white rounded-full px-3 py-1 cursor-pointer font-bold text-[0.85rem] text-sky-deep transition-colors duration-150 hover:bg-sky-mist"
          aria-label="Switch language"
          onClick={toggle}
        >
          {lang === "en" ? "RU" : "EN"}
        </button>
      </div>
    </header>
  );
}
