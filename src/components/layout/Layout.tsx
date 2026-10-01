import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { LanguageProvider } from "../../context/languageContext";
import Footer from "./Footer";
import IconSprite from "./IconSprite";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <StrictMode>
      <LanguageProvider>
        <IconSprite />
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </LanguageProvider>
    </StrictMode>
  );
}
