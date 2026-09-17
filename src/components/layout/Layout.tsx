import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { LanguageProvider } from "../../context/languageContext";
import Footer from "./Footer";

export default function Layout() {
  return (
    <StrictMode>
      <LanguageProvider>
        <Header />
        <Outlet />
        <Footer />
      </LanguageProvider>
    </StrictMode>
  );
}
