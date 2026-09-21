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
import Programs from "../components/sections/Programs";
import FAQ from "../components/sections/FAQ";
import Visit from "../components/sections/Visit";
import CtaBand from "../components/sections/CtaBand";
import SEO from "../components/SEO";

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
      <SEO
        title="Lala Land Child Care & Preschool - Multilingual Family Daycare in Foster City, CA"
        description="Lala Land Child Care and Preschool is a licensed multilingual family daycare in Foster City, CA - English-focused, with Turkish, Azerbaijani, and Russian. Infants through preschool. Book a free tour."
        path="/"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Preschool", "ChildCare"],
          "@id": "https://lalalandkids.care/#organization",
          name: "Lala Land Child Care & Preschool",
          image: "https://lalalandkids.care/assets/logo.jpg",
          url: "https://lalalandkids.care/",
          telephone: "+1-415-350-5015",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "842 Chrysopolis Dr",
            addressLocality: "Foster City",
            addressRegion: "CA",
            postalCode: "94404",
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 37.5592,
            longitude: -122.2608,
          },
          knowsLanguage: ["English", "Turkish", "Azerbaijani", "Russian"],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00",
            },
          ],
          sameAs: ["https://www.instagram.com/lalalandkids_fostercity"],
        })}
      </script>
      <Hero />
      <TrustBar />
      <About />
      <VideoReels />
      <Activities />
      <Skills />
      <Schedule />
      <Nutrition />
      <ForParents />
      <Programs />
      <FAQ />
      <Visit />
      <CtaBand />
    </main>
  );
}
