import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/sections/Hero";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <main>
      <Hero />
    </main>
  );
}
