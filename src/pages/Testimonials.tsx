import AnchorLink from "../components/layout/AnchorLink";

const reels = [
  {
    color: "bg-[linear-gradient(160deg,#f472b6,#c2185b)]",
    titleEn: "Parent Voices",
    descEn: "Why families chose Lala Land",
  },
  {
    color: "bg-[linear-gradient(160deg,#2ba5db,#156f96)]",
    titleEn: "A First Week Story",
    descEn: "From nervous drop-off to happy pickup",
  },
  {
    color: "bg-[linear-gradient(160deg,#34d399,#0f9d78)]",
    titleEn: "Many Languages at Home",
    descEn: "A family on multilingual daycare life",
  },
];

export default function Testimonials() {
  return (
    <main className="font-body">
      <section className="text-center pt-14 pb-16 bg-[radial-gradient(circle_at_85%_12%,rgba(69,190,234,0.14),transparent_38%),linear-gradient(180deg,#eaf7fd,#fffdf8)]">
        <div className="w-[min(1240px,94.5%)] mx-auto">
          <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-deep">
            Parent Voices
          </span>
          <h1 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(2.1rem,5vw,3.4rem)] mb-3.5">
            Families say it better
            <br />
            than we ever could
          </h1>
          <p className="text-[clamp(1.05rem,2.2vw,1.3rem)] text-ink-soft max-w-160 mx-auto mb-2.5">
            Parent voices, in writing and on camera. Don’t take our word for it: come see a normal
            day yourself.
          </p>
          <p className="text-[0.95rem] text-ink-soft" lang="ru">
            Говорим по-русски — звоните:{" "}
            <a href="tel:+14153505015" className="text-sky-deep">
              (415) 350-5015
            </a>
            .
          </p>
          <div className="flex justify-center mt-5.5">
            <AnchorLink
              to="visit"
              className="inline-block text-center font-display font-bold text-[1.15rem] px-8.5 py-3.75 rounded-full bg-sun text-sun-ink shadow-brand-soft transition-all duration-150 hover:-translate-y-0.5 hover:bg-sun-deep hover:shadow-brand"
            >
              Book a Free Tour
            </AnchorLink>
          </div>
        </div>
      </section>

      <section id="video-voices" className="py-19">
        <div className="w-[min(1240px,94.5%)] mx-auto">
          <div className="text-center max-w-175 mx-auto mb-11.5">
            <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-deep">
              Watch
            </span>
            <h2 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3">
              Parent voices, on camera
            </h2>
            <p className="text-ink-soft">
              Short vertical videos — unscripted, in parents’ own words.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6.5 max-w-225 mx-auto">
            {reels.map((reel, i) => (
              <div
                key={i}
                className={`relative aspect-9/16 rounded-brand overflow-hidden shadow-brand flex flex-col items-center justify-center text-center p-6 text-white ${reel.color}`}
              >
                <span className="absolute top-3.5 left-3.5 bg-black/35 text-[0.7rem] font-extrabold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full">
                  Video coming soon
                </span>
                <span className="w-16 h-16 rounded-full bg-white/92 flex items-center justify-center text-ink mb-4 shadow-brand">
                  <svg className="w-5.5 h-5.5 stroke-current fill-none stroke-2">
                    <use href="#i-play" />
                  </svg>
                </span>
                <h3 className="text-white text-[1.1rem] [text-shadow:0_2px_8px_rgba(0,0,0,0.25)]">
                  {reel.titleEn}
                </h3>
                <p className="text-[0.85rem] opacity-92 mt-1.5 [text-shadow:0_1px_6px_rgba(0,0,0,0.25)]">
                  {reel.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Written testimonials return once real, permissioned parent quotes exist */}
      <section id="quotes" className="py-19 bg-cloud">
        <div className="w-[min(700px,94.5%)] mx-auto text-center">
          <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-deep">
            In Their Words
          </span>
          <h2 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3">
            Our first parent stories are on their way
          </h2>
          <p className="text-ink-soft">
            We only publish real words from real families, with their permission — and we’re
            collecting those stories now. Until then, the best testimonial is a visit: come see a
            normal day yourself.
          </p>
          <div className="mt-2.5">
            <AnchorLink
              to="visit"
              className="inline-block text-center font-display font-bold text-[1.15rem] px-8.5 py-3.75 rounded-full bg-sun text-sun-ink shadow-brand-soft transition-all duration-150 hover:-translate-y-0.5 hover:bg-sun-deep hover:shadow-brand"
            >
              Book a Free Tour
            </AnchorLink>
          </div>
          <p className="text-[0.88rem] text-ink-soft mt-3">
            Openings and tuition are discussed at your tour — call or text (415) 350-5015.
          </p>
        </div>
      </section>

      <section className="bg-[linear-gradient(120deg,#1e9ed4,#156f96)] text-center text-white py-16">
        <div className="w-[min(1240px,94.5%)] mx-auto">
          <h2 className="text-white mb-2.5 font-display font-extrabold text-[clamp(1.7rem,3.6vw,2.4rem)]">
            The best testimonial is a visit.
          </h2>
          <p className="text-white/90 max-w-140 mx-auto mb-6.5">
            Come meet the family behind Lala Land — and your little one goes home with a dragon.
            Openings and tuition are discussed at your tour.
          </p>
          <AnchorLink
            to="visit"
            className="inline-block text-center font-display font-bold text-[1.15rem] px-8.5 py-3.75 rounded-full bg-sun text-sun-ink transition-all duration-150 hover:-translate-y-0.5 hover:bg-sun-deep hover:shadow-brand"
          >
            Book a Free Tour
          </AnchorLink>
        </div>
      </section>
    </main>
  );
}
