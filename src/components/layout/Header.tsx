import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/languageContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle } = useLanguage();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-bar">
        <Link className="brand" to="/" onClick={closeMenu}>
          <img src="/assets/logo.jpg" alt="Lala Land logo — friendly dragon under a rainbow" />
          <span className="brand-name">
            Lala Land
            <small className="en">Child Care &amp; Preschool</small>
            <small className="ru" lang="ru">
              Детский сад и подготовка к школе
            </small>
          </span>
        </Link>

        <button
          className="nav-burger"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          ☰
        </button>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          <li>
            <a href="#about" onClick={closeMenu}>
              <span className="en">About</span>
              <span className="ru" lang="ru">
                О нас
              </span>
            </a>
          </li>
          <li>
            <a href="#day" onClick={closeMenu}>
              <span className="en">Our Day</span>
              <span className="ru" lang="ru">
                Наш день
              </span>
            </a>
          </li>
          <li>
            <a href="#programs" onClick={closeMenu}>
              <span className="en">Programs</span>
              <span className="ru" lang="ru">
                Программы
              </span>
            </a>
          </li>
          <li>
            <Link to="/testimonials" onClick={closeMenu}>
              <span className="en">Testimonials</span>
              <span className="ru" lang="ru">
                Отзывы
              </span>
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={closeMenu}>
              <span className="en">Gallery</span>
              <span className="ru" lang="ru">
                Галерея
              </span>
            </Link>
          </li>
          <li>
            <Link to="/newsletter" onClick={closeMenu}>
              <span className="en">News &amp; Blog</span>
              <span className="ru" lang="ru">
                Новости
              </span>
            </Link>
          </li>
          <li>
            <a className="btn btn-primary nav-cta" href="#visit" onClick={closeMenu}>
              <span className="en">Book a Free Tour</span>
              <span className="ru" lang="ru">
                Записаться на визит
              </span>
            </a>
          </li>
        </ul>

        <button className="lang-toggle" aria-label="Switch language" onClick={toggle}>
          {lang === "en" ? "RU" : "EN"}
        </button>
      </div>
    </header>
  );
}
