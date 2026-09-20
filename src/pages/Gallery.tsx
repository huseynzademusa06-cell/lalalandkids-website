import AnchorLink from "../components/layout/AnchorLink";

const spaceTiles = [
  {
    icon: "i-bottle",
    bg: "bg-[linear-gradient(150deg,#eaf7fd,#d3effb)]",
    title: "Infant Room",
    desc: "Photo coming soon — calm corner for our littlest ones",
  },
  {
    icon: "i-blocks",
    bg: "bg-[linear-gradient(150deg,#fdf0f5,#fbd9e9)]",
    title: "Toddler Room",
    desc: "Photo coming soon — where the action happens",
  },
  {
    icon: "i-brush",
    bg: "bg-[linear-gradient(150deg,#fdf3dc,#ffedb0)]",
    title: "Art & Creativity Zone",
    desc: "Photo coming soon — paint, dough, glitter, joy",
  },
  {
    icon: "i-book",
    bg: "bg-[linear-gradient(150deg,#eaf7fd,#d2f5ec)]",
    title: "Reading Nook",
    desc: "Photo coming soon — cozy stories in many languages",
  },
  {
    icon: "i-moon",
    bg: "bg-[linear-gradient(150deg,#f3ecfb,#e5daf6)]",
    title: "Nap Room",
    desc: "Photo coming soon — quiet, dim, and dreamy",
  },
  {
    icon: "i-tree",
    bg: "bg-[linear-gradient(150deg,#eaf7fd,#d3effb)]",
    title: "Outdoor Play Area",
    desc: "Photo coming soon — enclosed, soft-surfaced, inspected",
  },
];

const momentTiles = [
  {
    icon: "i-bowl",
    bg: "bg-[linear-gradient(150deg,#fdf3dc,#ffedb0)]",
    title: "Breakfast Together",
  },
  { icon: "i-bulb", bg: "bg-[linear-gradient(150deg,#eaf7fd,#d2f5ec)]", title: "Brain Games" },
  {
    icon: "i-music",
    bg: "bg-[linear-gradient(150deg,#fdf0f5,#fbd9e9)]",
    title: "Music & Movement",
  },
  {
    icon: "i-brush",
    bg: "bg-[linear-gradient(150deg,#f3ecfb,#e5daf6)]",
    title: "Arts & Crafts Hour",
  },
  { icon: "i-sun", bg: "bg-[linear-gradient(150deg,#eaf7fd,#d3effb)]", title: "Morning Walk" },
  {
    icon: "i-star",
    bg: "bg-[linear-gradient(150deg,#fdf3dc,#ffedb0)]",
    title: "Holidays & Birthdays",
  },
];

const tourReels = [
  {
    color: "bg-[linear-gradient(160deg,#34d399,#0f9d78)]",
    title: "Infant Room Tour",
    desc: "Where the tiniest ones spend their day",
  },
  {
    color: "bg-[linear-gradient(160deg,#2ba5db,#156f96)]",
    title: "Full Walkthrough",
    desc: "Every room, front door to backyard",
  },
  {
    color: "bg-[linear-gradient(160deg,#f472b6,#c2185b)]",
    title: "Outdoor Play",
    desc: "Fresh air, every single day",
  },
];

function Tile({
  icon,
  bg,
  title,
  desc,
}: {
  icon: string;
  bg: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className={`relative rounded-brand overflow-hidden aspect-4/3 shadow-brand-soft flex flex-col items-center justify-center text-center p-5 transition-transform duration-200 hover:-translate-y-1 ${bg}`}
    >
      <div className="mb-2.5 text-ink-soft">
        <svg className="w-12 h-12 stroke-current fill-none stroke-2">
          <use href={`#${icon}`} />
        </svg>
      </div>
      <h3 className="text-[1.05rem] font-display font-extrabold text-ink">{title}</h3>
      <p className="text-[0.82rem] text-ink-soft mt-1">{desc}</p>
    </div>
  );
}

export default function Gallery() {
  return (
    <main className="font-body">
      <section className="text-center pt-14 pb-16 bg-[radial-gradient(circle_at_85%_12%,rgba(69,190,234,0.14),transparent_38%),linear-gradient(180deg,#eaf7fd,#fffdf8)]">
        <div className="w-[min(1240px,94.5%)] mx-auto">
          <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-deep">
            Gallery
          </span>
          <h1 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(2.1rem,5vw,3.4rem)] mb-3.5">
            Step inside Lala Land
          </h1>
          <p className="text-[clamp(1.05rem,2.2vw,1.3rem)] text-ink-soft max-w-160 mx-auto mb-2.5">
            Bright rooms, busy little hands, and everyday moments. Photos are shared with parent
            permission only — and the best tour is still the real one.
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
              See It in Person
            </AnchorLink>
          </div>
        </div>
      </section>

      <section id="space" className="py-19">
        <div className="w-[min(1240px,94.5%)] mx-auto">
          <div className="text-center max-w-175 mx-auto mb-11.5">
            <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-deep">
              Our Space
            </span>
            <h2 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3">
              Rooms designed for little explorers
            </h2>
            <p className="text-ink-soft">
              Child-proofed, sunlit, and organized by what kids love to do.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5">
            {spaceTiles.map((t, i) => (
              <Tile key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section id="moments" className="py-19 bg-cloud">
        <div className="w-[min(1240px,94.5%)] mx-auto">
          <div className="text-center max-w-175 mx-auto mb-11.5">
            <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-deep">
              Everyday Moments
            </span>
            <h2 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)]">
              What a normal day looks like
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5">
            {momentTiles.map((t, i) => (
              <Tile key={i} {...t} desc="Photo coming soon" />
            ))}
          </div>
        </div>
      </section>

      <section id="video-tours" className="py-19">
        <div className="w-[min(1240px,94.5%)] mx-auto">
          <div className="text-center max-w-175 mx-auto mb-11.5">
            <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-deep">
              Video Tours
            </span>
            <h2 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3">
              Can’t visit yet? Take the video tour
            </h2>
            <p className="text-ink-soft">
              Short vertical walkthroughs of the space — the next best thing to being here.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6.5 max-w-225 mx-auto">
            {tourReels.map((reel, i) => (
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
                  {reel.title}
                </h3>
                <p className="text-[0.85rem] opacity-92 mt-1.5 [text-shadow:0_1px_6px_rgba(0,0,0,0.25)]">
                  {reel.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(120deg,#1e9ed4,#156f96)] text-center text-white py-16">
        <div className="w-[min(1240px,94.5%)] mx-auto">
          <h2 className="text-white mb-2.5 font-display font-extrabold text-[clamp(1.7rem,3.6vw,2.4rem)]">
            Pictures are nice. Visits are better.
          </h2>
          <p className="text-white/90 max-w-140 mx-auto mb-6.5">
            Book a free tour, see every room in person, and ask us anything — your little one goes
            home with a dragon. Openings and tuition are discussed at your tour.
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
