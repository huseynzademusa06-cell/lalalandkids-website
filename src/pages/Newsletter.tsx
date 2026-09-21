import type { ReactNode } from "react";
import AnchorLink from "../components/layout/AnchorLink";
import SEO from "../components/SEO";

function ContactAside() {
  return (
    <aside className="bg-white rounded-brand border-t-4 border-sky mt-5.5 p-6">
      <p className="m-0 text-ink">
        <strong>Questions about daycare in Foster City?</strong> Come see a real day at Lala Land —
        free tours, and we discuss openings and tuition in person.{" "}
        <a href="tel:+14153505015" className="text-sky-deep">
          Call or text (415) 350-5015
        </a>
        .
      </p>
    </aside>
  );
}

function AuthorLine() {
  return (
    <p className="text-[0.83rem] text-ink-soft mt-3.5">
      From Gulsum (licensed provider, CDSS #414005148, mother of three) and Lala (activities lead,
      mother of one).
    </p>
  );
}

type Post = {
  id: string;
  bannerLabel: string;
  meta: string;
  title: string;
  content: ReactNode;
};

const posts: Post[] = [
  {
    id: "post-questions",
    bannerLabel: "For moms touring daycares",
    meta: "Lala Land · Best Practices",
    title: "3 Questions to Ask Any Daycare (Before You Sign Anything)",
    content: (
      <>
        <p>
          Choosing childcare is one of the hardest calls a young mom makes. Save these three
          questions before you tour <em>any</em> daycare — ours included. And if a provider dodges
          the last one, walk away.
        </p>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold ">
          1. What’s your teacher-to-child ratio?
        </h3>
        <p>
          Lower means more attention, more eyes on your child, and faster comfort when tears happen.
          Small groups aren’t a luxury — for babies and toddlers, they’re the whole game. Ask for
          the number, not a vibe.
        </p>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold">
          2. What does my kid actually do all day?
        </h3>
        <p>
          You want a real answer: a rhythm of meals, naps, outdoor time, reading, music, and
          hands-on play. You do <em>not</em> want screen time dressed up as "learning apps." Ask to
          see the daily schedule in writing — a good provider has one and is proud of it. (Ours is{" "}
          <AnchorLink to="day" className="text-sky-deep">
            right here
          </AnchorLink>
          .)
        </p>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold">
          3. Can I come see a normal day, unannounced?
        </h3>
        <p>
          This is the question that separates marketing from reality. A great daycare always says
          yes, because there’s nothing staged to hide. At Lala Land we pass all three — come check
          for yourself.
        </p>
        <p>
          <AnchorLink
            to="visit"
            className="inline-block font-display font-bold px-5 py-2.5 rounded-full bg-white text-sky-deep border-2 border-sky"
          >
            Ask us all three on a free tour →
          </AnchorLink>
        </p>
      </>
    ),
  },
  {
    id: "post-dropoff",
    bannerLabel: "For first-time daycare moms",
    meta: "Lala Land · Best Practices",
    title: "Surviving the First Drop-Off: A Young Mom’s Guide",
    content: (
      <>
        <p>
          Nobody warns you that the first daycare drop-off is harder for mom than for baby. Here’s
          what actually helps, from our own experience as moms — and many first weeks we’ve guided.
        </p>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold">
          Start the routine a week early
        </h3>
        <p>
          Shift wake-up, breakfast, and nap times toward the daycare schedule a few days before the
          first day. A child who isn’t hungry and overtired on day one has a completely different
          first week.
        </p>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold">
          Do a short goodbye — and mean it
        </h3>
        <p>
          Long, lingering goodbyes tell a toddler something is wrong. A warm hug, a confident “Mama
          always comes back,” a clean exit — that’s kinder than ten minutes of hovering. Crying at
          drop-off usually stops within minutes — ask your provider to text you a photo once your
          child settles. (We send them daily.)
        </p>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold">
          Send a piece of home
        </h3>
        <p>
          A small comfort object — a blanket that smells like home, a family photo — gives little
          hands something familiar to hold during the adjustment weeks.
        </p>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold">
          Expect the regression, don’t fear it
        </h3>
        <p>
          Clingier evenings and lighter sleep in the first two weeks are normal adjustment, not a
          sign something is wrong. Keep bedtime calm and consistent; it passes.
        </p>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold">Be kind to yourself</h3>
        <p>
          Crying in the car after drop-off is a rite of passage. It means you love your kid — not
          that you made the wrong choice. Working, studying, or simply getting a break makes you a
          better mom, not a lesser one.
        </p>
      </>
    ),
  },
  {
    id: "post-bilingual",
    bannerLabel: "For bilingual families",
    meta: "Lala Land · Best Practices",
    title: "Raising a Bilingual Child: What Actually Works",
    content: (
      <>
        <p>
          We run a multilingual daycare — English-first, with Turkish, Azerbaijani, and Russian in
          the room — so we hear the same worry from young moms every week:{" "}
          <em>“Will two languages confuse my baby?”</em> Short answer: no. Here’s what we’ve learned
          from research and from our own rooms.
        </p>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold">
          Mixing languages is normal — not confusion
        </h3>
        <p>
          A toddler saying “дай me the mishka” isn’t lost; they’re drawing on two toolboxes at once.
          Code-mixing fades naturally as vocabulary grows in both languages.
        </p>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold">
          Each language needs real life, not lessons
        </h3>
        <p>
          Babies learn language from people, songs, meals, and play — not flashcards. That’s why we
          don’t “teach” a language as a subject; children simply live parts of their day in it:
          storytime, songs, mealtime chatter.
        </p>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold">
          Protect the home language — English will take care of itself
        </h3>
        <p>
          In an English-speaking world, English always wins eventually. The language at risk is the
          family one. Grandparent phone calls, home-language books at bedtime, and a daycare that
          speaks it daily are what keep a child truly bilingual.
        </p>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold">
          Expect a quiet phase — it’s healthy
        </h3>
        <p>
          Some children entering a new language environment go quiet for a while before speaking.
          It’s absorption, not delay. If you ever have concerns about speech, ask your pediatrician
          — bilingualism doesn’t cause delays, and a bilingual child with a true delay will show it
          in both languages.
        </p>
      </>
    ),
  },
  {
    id: "post-safety",
    bannerLabel: "From our previous site — updated",
    meta: "Lala Land · Our Commitments",
    title: "Prioritizing Safety: Our Commitment to Your Child’s Well-Being",
    content: (
      <>
        <p>
          At Lala Land, your child’s safety is our highest priority. We’ve designed our space and
          our routines so children can learn, grow, and thrive with confidence — and parents can
          exhale.
        </p>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold">The space itself</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1.5">
          <li>
            <strong>Secure entry:</strong> monitored entrance with restricted electronic access —
            only authorized adults get in, and every child is signed in and out by an approved adult
            only.
          </li>
          <li>
            <strong>Child-proofed rooms:</strong> rounded furniture edges, non-toxic materials, and
            supplies stored securely.
          </li>
          <li>
            <strong>Video surveillance:</strong> cameras monitor key areas for an extra layer of
            security.
          </li>
          <li>
            <strong>Enclosed outdoor play:</strong> a fully enclosed play area with soft surfaces,
            inspected regularly, with outdoor time adjusted to the weather.
          </li>
        </ul>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold">Health and hygiene</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1.5">
          <li>
            <strong>Daily cleaning:</strong> the whole space is cleaned and sanitized every day.
          </li>
          <li>
            <strong>HEPA air filtration:</strong> clean, fresh air in every indoor space.
          </li>
          <li>
            <strong>Sick-child policies:</strong> clear guidelines prevent the spread of illness —
            one cold shouldn’t take out the whole room, with isolation procedures if a child feels
            unwell during the day.
          </li>
        </ul>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold">The people</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1.5">
          <li>
            <strong>Trained caregivers:</strong> first aid, CPR, and emergency-response trained;
            everyone working with children is background-checked.
          </li>
          <li>
            <strong>Constant supervision:</strong> children are never left unattended, full stop.
          </li>
          <li>
            <strong>Emergency preparedness:</strong> regular fire drills and evacuation plans,
            practiced calmly so they feel like a game to the kids.
          </li>
        </ul>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold">
          Partnering with parents
        </h3>
        <p>
          Keep your emergency contacts current, share any specific concerns with us, and ask about
          any protocol anytime — transparency is part of safety. When children feel safe, they’re
          free to explore, learn, and make friends. That’s the whole point.
        </p>
      </>
    ),
  },
  {
    id: "post-nurturing",
    bannerLabel: "From our previous site — updated",
    meta: "Lala Land · Our Philosophy",
    title: "Creating a Nurturing Environment: The Heart of Early Learning",
    content: (
      <>
        <p>
          A child’s first classroom is the bridge between the comfort of home and the structure of
          school. We believe these early years are more than the start of an academic journey —
          they’re the foundation of a lifelong love for learning, exploration, and friendship.
        </p>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold">
          Why the early years matter
        </h3>
        <ul className="list-disc pl-6 mb-4 space-y-1.5">
          <li>
            <strong>Social and emotional growth:</strong> sharing, taking turns, and resolving
            little conflicts build empathy and cooperation.
          </li>
          <li>
            <strong>Language and communication:</strong> early literacy and daily conversation — in
            our case, in two languages — teach children to express themselves clearly.
          </li>
          <li>
            <strong>Cognitive development:</strong> problem-solving, patterns, and numbers lay the
            groundwork for critical thinking.
          </li>
          <li>
            <strong>Physical development:</strong> art, play, and movement build fine and gross
            motor skills.
          </li>
        </ul>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold">
          How our days are built
        </h3>
        <p>
          Morning circle with songs and greetings; hands-on exploration stations; outdoor play;
          storytime; and small group projects that teach teamwork. Structure where it helps, play
          everywhere else.
        </p>
        <h3 className="mt-6 mb-2 text-sky-deep font-display font-extrabold">
          Getting your child ready — a young mom’s checklist
        </h3>
        <ul className="list-disc pl-6 mb-4 space-y-1.5">
          <li>
            <strong>Establish routines:</strong> consistent bedtimes and calm mornings do half the
            work.
          </li>
          <li>
            <strong>Encourage independence:</strong> putting away toys and trying shoes builds proud
            little humans.
          </li>
          <li>
            <strong>Read together daily:</strong> vocabulary, closeness, and a love of books — the
            best fifteen minutes of the day.
          </li>
          <li>
            <strong>Visit first:</strong> a familiar room and familiar faces shrink first-day
            jitters. (That’s exactly what our{" "}
            <AnchorLink to="visit" className="text-sky-deep">
              free tour
            </AnchorLink>{" "}
            is for.)
          </li>
        </ul>
        <p>Let’s make your child’s first step into education a joyful one — together.</p>
      </>
    ),
  },
];

const toc = [
  { id: "post-questions", label: "3 Questions to Ask Any Daycare" },
  { id: "post-dropoff", label: "Surviving the First Drop-Off" },
  { id: "post-bilingual", label: "Raising a Bilingual Child" },
  { id: "post-safety", label: "How We Think About Safety" },
  { id: "post-nurturing", label: "A Nurturing Environment" },
];

export default function Newsletter() {
  return (
    <main className="font-body">
      <SEO
        title="News & Blog - Lala Land, Foster City"
        description="The Lala Letter - a newsletter and blog for young moms: daycare tips, bilingual parenting, safety, and best practices from Lala Land in Foster City, CA."
        path="/newsletter"
      />
      <section className="pt-12 pb-19">
        <div className="w-[min(1240px,94.5%)] mx-auto">
          <div className="rounded-brand text-white p-11 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-9 items-center shadow-brand bg-[linear-gradient(135deg,#1a86b4,#156f96)]">
            <div>
              <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sun-mist text-sun-deep">
                The Lala Letter
              </span>
              <h1 className="text-white font-display font-extrabold text-[clamp(1.7rem,3.6vw,2.4rem)] mb-2.5">
                A little letter for busy young moms
              </h1>
              <p className="text-white/88 mb-0">
                Once a month: what we did at Lala Land, seasonal activity ideas to try at home,
                bilingual-parenting tips, and honest answers to the questions parents ask us most.
                No spam — ever.
              </p>
              <p className="text-[0.9rem] text-white/80 mt-2" lang="ru">
                Говорим по-русски — звоните: (415) 350-5015.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-[0.95rem] text-white/90 text-center">
                Newsletter signup is coming soon. Until then, follow along on Instagram — or call or
                text us and we’ll add you to the list.
              </p>

              <a
                href="https://www.instagram.com/lalalandkids_fostercity"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2.5 font-display font-bold px-6.5 py-3 rounded-full bg-sun text-sun-ink"
              >
                <svg className="w-5.5 h-5.5 stroke-current fill-none stroke-2">
                  <use href="#i-instagram" />
                </svg>
                Follow @lalalandkids_fostercity
              </a>

              <a
                href="tel:+14153505015"
                className="inline-flex items-center justify-center font-display font-bold px-6.5 py-3 rounded-full bg-transparent text-white border-2 border-white/65"
              >
                Call or Text (415) 350-5015
              </a>
              <p className="text-[0.8rem] text-white/75 text-center">
                We usually write once a month. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-19 bg-cloud">
        <div className="w-[min(860px,94.5%)] mx-auto">
          <div className="text-center max-w-175 mx-auto mb-11.5">
            <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-deep">
              The Blog
            </span>
            <h2 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3">
              Best practices for young moms
            </h2>
            <p className="text-ink-soft">
              Practical, judgment-free notes from a mother–daughter team that has rocked, fed, and
              raised a few kids of its own.
            </p>
          </div>

          <nav className="flex flex-wrap gap-2.5 justify-center mb-11">
            {toc.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="no-underline bg-white shadow-brand-soft rounded-full px-4.5 py-2.5 font-bold text-[0.9rem] text-ink hover:bg-sky-mist hover:text-sky-deep"
              >
                {t.label}
              </a>
            ))}
          </nav>

          {posts.map((post) => (
            <article
              key={post.id}
              id={post.id}
              className="bg-white rounded-brand shadow-brand-soft p-11 mb-8.5 scroll-mt-27.5"
            >
              <div className="rounded-brand-sm px-6.5 py-5 mb-6.5 flex items-center gap-4.5 bg-[linear-gradient(150deg,#eaf7fd,#4abbff)]">
                <span className="font-display text-[1.05rem] font-bold text-ink-soft">
                  {post.bannerLabel}
                </span>
              </div>
              <p className="text-[0.85rem] text-ink-soft mb-2">{post.meta}</p>
              <h2 className="font-display font-extrabold text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-4">
                {post.title}
              </h2>
              <div className="[&>p]:mb-4">{post.content}</div>
              <ContactAside />
              <AuthorLine />
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[linear-gradient(120deg,#1e9ed4,#156f96)] text-center text-white py-16">
        <div className="w-[min(1240px,94.5%)] mx-auto">
          <h2 className="text-white mb-2.5 font-display font-extrabold text-[clamp(1.7rem,3.6vw,2.4rem)]">
            Want these tips in your inbox?
          </h2>
          <p className="text-white/90 max-w-140 mx-auto mb-6.5">
            Subscribe to The Lala Letter above — or better yet, come ask us in person.
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
