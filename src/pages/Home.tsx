import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/sections/Hero";
import TrustBar from "../components/sections/TrustBar";
import About from "../components/sections/About";
import VideoReels from "../components/sections/VideoReels";
import Activities from "../components/sections/Activities";
import Skills from "../components/sections/Skills";
import Schedule from "../components/sections/Schedule";
import Nutrition from "../components/sections/Nutrition";
import ForParents from "../components/sections/ForParents";

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
    <main className="font-body">
      <Hero />
      <TrustBar />
      <About />
      <VideoReels />
      <Activities />
      <Skills />
      <Schedule />
      <Nutrition />
      <ForParents />
    </main>
  );
}
