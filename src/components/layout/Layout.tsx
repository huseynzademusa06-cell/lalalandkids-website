import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { LanguageProvider } from "../../context/languageContext";
import Footer from "./Footer";
import IconSprite from "./IconSprite";

export default function Layout() {
  return (
    <StrictMode>
      <LanguageProvider>
        <IconSprite />
        <Header />
        <Outlet />
        <Footer />
      </LanguageProvider>
    </StrictMode>
  );
}
