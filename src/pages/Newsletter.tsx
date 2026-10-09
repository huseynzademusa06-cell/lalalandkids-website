import type { ReactNode } from "react";
import AnchorLink from "../components/layout/AnchorLink";
import SEO from "../components/SEO";
import { useLanguage } from "../context/languageContext";
import Reveal from "../components/Reveal";

function ContactAside() {
  const { lang } = useLanguage();
  return (
    <aside className="bg-white rounded-brand border-t-4 border-sky mt-5.5 p-6">
      <p className={`m-0 text-ink ${lang === "ru" ? "hidden" : "block"}`}>
        <strong>Questions about daycare in Foster City?</strong> Come see a real day at Lala Land —
        free tours, and we discuss openings and tuition in person.{" "}
        <a href="tel:+14153505015" className="text-sky-ocean">
          Call or text (415) 350-5015
        </a>
        .
      </p>
      <p className={`m-0 text-ink ${lang === "ru" ? "block" : "hidden"}`} lang="ru">
        <strong>Есть вопросы о детском саде в Фостер-Сити?</strong> Приходите посмотреть на реальный
        день в Lala Land — экскурсии бесплатные, а наличие мест и стоимость мы обсуждаем лично.{" "}
        <a href="tel:+14153505015" className="text-sky-ocean">
          Звоните или пишите: (415) 350-5015
        </a>
        .
      </p>
    </aside>
  );
}

function AuthorLine() {
  const { lang } = useLanguage();
  return (
    <>
      <p className={`text-[0.83rem] text-ink-soft mt-3.5 ${lang === "ru" ? "hidden" : "block"}`}>
        From Gulsum (licensed provider, CDSS #414005148, mother of three) and Lala (activities lead,
        mother of one).
      </p>
      <p
        className={`text-[0.83rem] text-ink-soft mt-3.5 ${lang === "ru" ? "block" : "hidden"}`}
        lang="ru"
      >
        От Гульсум (лицензированный воспитатель, CDSS #414005148, мама троих детей) и Лалы
        (руководитель занятий, мама одного ребёнка).
      </p>
    </>
  );
}

type Post = {
  id: string;
  bannerLabelEn: string;
  bannerLabelRu: string;
  metaEn: string;
  metaRu: string;
  titleEn: string;
  titleRu: string;
  contentEn: ReactNode;
  contentRu: ReactNode;
};

const posts: Post[] = [
  {
    id: "post-questions",
    bannerLabelEn: "For moms touring daycares",
    bannerLabelRu: "Для мам, выбирающих детский сад",
    metaEn: "Lala Land · Best Practices",
    metaRu: "Lala Land · Полезные советы",
    titleEn: "3 Questions to Ask Any Daycare (Before You Sign Anything)",
    titleRu: "3 вопроса любому детскому саду (прежде чем что-либо подписывать)",
    contentEn: (
      <>
        <p>
          Choosing childcare is one of the hardest calls a young mom makes. Save these three
          questions before you tour <em>any</em> daycare — ours included. And if a provider dodges
          the last one, walk away.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold ">
          1. What’s your teacher-to-child ratio?
        </h3>
        <p>
          Lower means more attention, more eyes on your child, and faster comfort when tears happen.
          Small groups aren’t a luxury — for babies and toddlers, they’re the whole game. Ask for
          the number, not a vibe.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          2. What does my kid actually do all day?
        </h3>
        <p>
          You want a real answer: a rhythm of meals, naps, outdoor time, reading, music, and
          hands-on play. You do <em>not</em> want screen time dressed up as "learning apps." Ask to
          see the daily schedule in writing — a good provider has one and is proud of it. (Ours is{" "}
          <AnchorLink to="day" className="text-sky-ocean">
            right here
          </AnchorLink>
          .)
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
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
            className="inline-block font-display font-bold px-5 py-2.5 rounded-full bg-white text-sky-ocean border-2 border-sky"
          >
            Ask us all three on a free tour →
          </AnchorLink>
        </p>
      </>
    ),
    contentRu: (
      <div lang="ru">
        <p>
          Выбор детского сада — одно из самых сложных решений для молодой мамы. Сохраните эти три
          вопроса перед тем, как идти на экскурсию в <em>любой</em> детский сад — включая наш. И
          если воспитатель уходит от ответа на последний вопрос, смело уходите.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          1. Какое у вас соотношение воспитателей и детей?
        </h3>
        <p>
          Чем меньше детей на одного воспитателя, тем больше внимания, лучше присмотр и быстрее
          утешение, если малыш расплакался. Маленькие группы — это не роскошь, а ключевой фактор для
          младенцев и тоддлеров. Просите точную цифру, а не общие слова.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          2. Чем конкретно мой ребёнок занимается весь день?
        </h3>
        <p>
          Вам нужен четкий ответ: ритм питания, сна, прогулок, чтения, музыки и развивающих игр. Вам{" "}
          <em>не</em> нужно время у экрана, прикрытое «обучающими приложениями». Попросите показать
          расписание в письменном виде — хороший детский сад им гордится. (Наше расписание{" "}
          <AnchorLink to="day" className="text-sky-ocean">
            находится здесь
          </AnchorLink>
          .)
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          3. Могу ли я прийти и посмотреть на обычный день без предупреждения?
        </h3>
        <p>
          Именно этот вопрос отделяет маркетинг от реальности. Отличный детский сад всегда ответит
          «да», потому что ему нечего прятать. В Lala Land мы проходим все три проверки — приходите
          и убедитесь сами.
        </p>
        <p>
          <AnchorLink
            to="visit"
            className="inline-block font-display font-bold px-5 py-2.5 rounded-full bg-white text-sky-ocean border-2 border-sky"
          >
            Задайте нам все три вопроса на бесплатном визите →
          </AnchorLink>
        </p>
      </div>
    ),
  },
  {
    id: "post-dropoff",
    bannerLabelEn: "For first-time daycare moms",
    bannerLabelRu: "Для мам, отправляющих ребёнка в сад впервые",
    metaEn: "Lala Land · Best Practices",
    metaRu: "Lala Land · Полезные советы",
    titleEn: "Surviving the First Drop-Off: A Young Mom’s Guide",
    titleRu: "Как пережить первое расставание: гид для молодой мамы",
    contentEn: (
      <>
        <p>
          Nobody warns you that the first daycare drop-off is harder for mom than for baby. Here’s
          what actually helps, from our own experience as moms — and many first weeks we’ve guided.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Start the routine a week early
        </h3>
        <p>
          Shift wake-up, breakfast, and nap times toward the daycare schedule a few days before the
          first day. A child who isn’t hungry and overtired on day one has a completely different
          first week.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Do a short goodbye — and mean it
        </h3>
        <p>
          Long, lingering goodbyes tell a toddler something is wrong. A warm hug, a confident “Mama
          always comes back,” a clean exit — that’s kinder than ten minutes of hovering. Crying at
          drop-off usually stops within minutes — ask your provider to text you a photo once your
          child settles. (We send them daily.)
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Send a piece of home
        </h3>
        <p>
          A small comfort object — a blanket that smells like home, a family photo — gives little
          hands something familiar to hold during the adjustment weeks.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Expect the regression, don’t fear it
        </h3>
        <p>
          Clingier evenings and lighter sleep in the first two weeks are normal adjustment, not a
          sign something is wrong. Keep bedtime calm and consistent; it passes.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Be kind to yourself
        </h3>
        <p>
          Crying in the car after drop-off is a rite of passage. It means you love your kid — not
          that you made the wrong choice. Working, studying, or simply getting a break makes you a
          better mom, not a lesser one.
        </p>
      </>
    ),
    contentRu: (
      <div lang="ru">
        <p>
          Никто не предупреждает, что первый день в детском саду даётся маме тяжелее, чем ребёнку.
          Вот что реально помогает, исходя из нашего личного опыта как мам и множества адаптаций,
          которые мы провели.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Начните режим за неделю до старта
        </h3>
        <p>
          Сдвиньте время подъёма, завтрака и дневного сна к распорядку сада за несколько дней до
          первого дня. Ребёнок, который не голоден и не переутомлён в первый день, адаптируется
          совершенно по-другому.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Прощайтесь коротко — и уверенно
        </h3>
        <p>
          Долгие прощания сигнализируют малышу, что происходит что-то не так. Тёплое объятие,
          уверенное «Мама всегда возвращается» и быстрый уход — это гораздо добрее, чем 10 минут
          сомнений у двери. Слезы при расставании обычно утихают за пару минут — попросите
          воспитателя прислать фото, как только ребёнок успокоится. (Мы отправляем их ежедневно.)
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Дайте с собой кусочек дома
        </h3>
        <p>
          Любимая вещь — одеяльце, пахнущее домом, или семейное фото — даёт маленьким ручкам чувство
          безопасности в период адаптации.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Ожидайте временный регресс и не бойтесь его
        </h3>
        <p>
          Капризы по вечерам и более чуткий сон в первые две недели — это нормальная адаптация, а не
          знак ошибки. Сохраняйте спокойствие во время укладывания; это скоро пройдёт.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Будьте бережны к себе
        </h3>
        <p>
          Поплакать в машине после того, как оставили ребёнка — через это проходят почти все. Это
          значит, что вы любите своего малыша, а не то, что вы сделали неправильный выбор. Работа,
          учёба или просто время на отдых делают вас счастливее и лучше для вашего ребёнка.
        </p>
      </div>
    ),
  },
  {
    id: "post-bilingual",
    bannerLabelEn: "For bilingual families",
    bannerLabelRu: "Для двуязычных семей",
    metaEn: "Lala Land · Best Practices",
    metaRu: "Lala Land · Полезные советы",
    titleEn: "Raising a Bilingual Child: What Actually Works",
    titleRu: "Воспитание двуязычного ребёнка: что действительно работает",
    contentEn: (
      <>
        <p>
          We run a multilingual daycare — English-first, with Turkish, Azerbaijani, and Russian in
          the room — so we hear the same worry from young moms every week:{" "}
          <em>“Will two languages confuse my baby?”</em> Short answer: no. Here’s what we’ve learned
          from research and from our own rooms.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Mixing languages is normal — not confusion
        </h3>
        <p>
          A toddler saying “дай me the mishka” isn’t lost; they’re drawing on two toolboxes at once.
          Code-mixing fades naturally as vocabulary grows in both languages.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Each language needs real life, not lessons
        </h3>
        <p>
          Babies learn language from people, songs, meals, and play — not flashcards. That’s why we
          don’t “teach” a language as a subject; children simply live parts of their day in it:
          storytime, songs, mealtime chatter.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Protect the home language — English will take care of itself
        </h3>
        <p>
          In an English-speaking world, English always wins eventually. The language at risk is the
          family one. Grandparent phone calls, home-language books at bedtime, and a daycare that
          speaks it daily are what keep a child truly bilingual.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
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
    contentRu: (
      <div lang="ru">
        <p>
          Мы руководим многоязычным детским садом — где основной язык английский, а также звучат
          турецкий, азербайджанский и русский. Каждую неделю мы слышим от мам одно и то же опасение:{" "}
          <em>«Не запутается ли мой ребёнок в двух языках?»</em> Короткий ответ: нет. Вот что мы
          узнали из исследований и собственного опыта.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Смешивание языков — это нормально, а не путаница
        </h3>
        <p>
          Когда малыш говорит «дай me the мишку», он не запутался — он просто берет слова из двух
          словарных запасов одновременно. Смешивание языков проходит само по себе по мере роста
          словарного запаса.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Каждому языку нужна живая жизнь, а не уроки
        </h3>
        <p>
          Дети усваивают язык через общение, песни, совместные обеды и игры, а не по карточкам.
          Поэму мы не «учим» языку как предмету; дети просто живут на нём: сказки, песенки,
          разговоры за едой.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Сохраняйте родной язык — английский придет сам
        </h3>
        <p>
          В англоязычной среде английский всегда возьмет свое. Под угрозой всегда оказывается родной
          язык семьи. Разговоры с бабушками, книги перед сном и детский сад, где говорят на родном
          языке — вот что помогает сохранить двуязычие.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Ожидайте «период молчания» — это естественно
        </h3>
        <p>
          Nекоторые дети, попадая в новую языковую среду, ненадолго затихают перед тем, как
          заговорить. Это впитывание языка, а не задержка. Если вас беспокоит речь,
          проконсультируйтесь с педиатром — билингвизм не вызывает задержек развития, а настоящая
          задержка проявляется сразу на обоих языках.
        </p>
      </div>
    ),
  },
  {
    id: "post-safety",
    bannerLabelEn: "From our previous site — updated",
    bannerLabelRu: "С нашего прежнего сайта — обновлено",
    metaEn: "Lala Land · Our Commitments",
    metaRu: "Lala Land · Наши обязательства",
    titleEn: "Prioritizing Safety: Our Commitment to Your Child’s Well-Being",
    titleRu: "Безопасность превыше всего: наша забота о благополучии вашего ребёнка",
    contentEn: (
      <>
        <p>
          At Lala Land, your child’s safety is our highest priority. We’ve designed our space and
          our routines so children can learn, grow, and thrive with confidence — and parents can
          exhale.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">The space itself</h3>
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
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">Health and hygiene</h3>
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
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">The people</h3>
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
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Partnering with parents
        </h3>
        <p>
          Keep your emergency contacts current, share any specific concerns with us, and ask about
          any protocol anytime — transparency is part of safety. When children feel safe, they’re
          free to explore, learn, and make friends. That’s the whole point.
        </p>
      </>
    ),
    contentRu: (
      <div lang="ru">
        <p>
          В Lala Land безопасность вашего ребёнка — наш главный приоритет. Мы спроектировали
          пространство и распорядок так, чтобы дети могли учиться и расти с уверенностью, а родители
          могли быть спокойны.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">Само пространство</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1.5">
          <li>
            <strong>Безопасный вход:</strong> контролируемый вход с ограниченным электронным
            доступом — входят только авторизованные взрослые, а приход и уход каждого ребёнка
            фиксируются.
          </li>
          <li>
            <strong>Безопасные комнаты:</strong> скруглённые углы мебели, нетоксичные материалы и
            надежно убранные вещи.
          </li>
          <li>
            <strong>Видеонаблюдение:</strong> камеры контролируют ключевые зоны для дополнительной
            безопасности.
          </li>
          <li>
            <strong>Огороженная площадка:</strong> полностью закрытая игровая зона с мягким
            покрытием, которая регулярно проверяется.
          </li>
        </ul>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">Здоровье и гигиена</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1.5">
          <li>
            <strong>Ежедневная уборка:</strong> всё помещение ежедневно чистится и дезинфицируется.
          </li>
          <li>
            <strong>Фильтрация воздуха HEPA:</strong> чистый и свежий воздух во всех комнатах.
          </li>
          <li>
            <strong>Правила при заболевании:</strong> чёткие инструкции предотвращают
            распространение простуд.
          </li>
        </ul>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">Команда</h3>
        <ul className="list-disc pl-6 mb-4 space-y-1.5">
          <li>
            <strong>Обученный персонал:</strong> навыки первой помощи, Сертификация CPR и проверка
            биографии всех сотрудников.
          </li>
          <li>
            <strong>Постоянный присмотр:</strong> дети никогда не остаются без присмотра.
          </li>
          <li>
            <strong>Готовность к ЧС:</strong> регулярные спокойные учебные эвакуации, проходимые в
            игровой форме.
          </li>
        </ul>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Партнёрство с родителями
        </h3>
        <p>
          Обновляйте контакты, делитесь своими пожеланиями и задавайте любые вопросы по правилам
          безопасности — прозрачность является частью нашей работы. Когда дети чувствуют себя в
          безопасности, они свободно познают мир и заводят друзей.
        </p>
      </div>
    ),
  },
  {
    id: "post-nurturing",
    bannerLabelEn: "From our previous site — updated",
    bannerLabelRu: "С нашего прежнего сайта — обновлено",
    metaEn: "Lala Land · Our Philosophy",
    metaRu: "Lala Land · Наша философия",
    titleEn: "Creating a Nurturing Environment: The Heart of Early Learning",
    titleRu: "Создание заботливой среды: основа раннего развития",
    contentEn: (
      <>
        <p>
          A child’s first classroom is the bridge between the comfort of home and the structure of
          school. We believe these early years are more than the start of an academic journey —
          they’re the foundation of a lifelong love for learning, exploration, and friendship.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
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
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          How our days are built
        </h3>
        <p>
          Morning circle with songs and greetings; hands-on exploration stations; outdoor play;
          storytime; and small group projects that teach teamwork. Structure where it helps, play
          everywhere else.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
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
            <AnchorLink to="visit" className="text-sky-ocean">
              free tour
            </AnchorLink>{" "}
            is for.)
          </li>
        </ul>
        <p>Let’s make your child’s first step into education a joyful one — together.</p>
      </>
    ),
    contentRu: (
      <div lang="ru">
        <p>
          Первая группа ребёнка — это мостик между домашним уютом и школьным порядком. Мы верим, что
          ранние годы — это не просто старт обучения, а фундамент любви к познанию мира и дружбе на
          всю жизнь.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Почему важны ранние годы
        </h3>
        <ul className="list-disc pl-6 mb-4 space-y-1.5">
          <li>
            <strong>Социальное и эмоциональное развитие:</strong> умение делиться, ждать своей
            очереди и решать споры развивает эмпатию.
          </li>
          <li>
            <strong>Речь и общение:</strong> ежедневное общение на двух языках учит детей выражать
            свои мысли.
          </li>
          <li>
            <strong>Когнитивное развитие:</strong> логика, узоры и цифры закладывают основу
            критического мышления.
          </li>
          <li>
            <strong>Физическое развитие:</strong> творчество, активные игры и движение развивают
            мелкую и крупную моторику.
          </li>
        </ul>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Как устроены наши дни
        </h3>
        <p>
          Утренний круг с песенками; станции для исследований; игры на свежем воздухе; чтение книг и
          небольшие групповые проекты. Порядок там, где он нужен, и игра во всём остальном.
        </p>
        <h3 className="mt-6 mb-2 text-sky-ocean font-display font-extrabold">
          Подготовка ребёнка — чек-лист для молодой мамы
        </h3>
        <ul className="list-disc pl-6 mb-4 space-y-1.5">
          <li>
            <strong>Наладьте режим:</strong> стабильный сон и спокойные утра делают половину дела.
          </li>
          <li>
            <strong>Поощряйте самостоятельность:</strong> уборка игрушек и попытки надеть обувь
            взращивают уверенность.
          </li>
          <li>
            <strong>Читайте вместе каждый день:</strong> словарный запас, близость и любовь к
            книгам.
          </li>
          <li>
            <strong>Приходите в гости до старта:</strong> знакомые комнаты и лица снимают волнение
            первого дня. (Именно для этого и нужен наш{" "}
            <AnchorLink to="visit" className="text-sky-ocean">
              бесплатный визит
            </AnchorLink>
            .)
          </li>
        </ul>
        <p>Давайте сделаем первый шаг вашего ребёнка в мир знаний радостным — вместе.</p>
      </div>
    ),
  },
];

const toc = [
  {
    id: "post-questions",
    labelEn: "3 Questions to Ask Any Daycare",
    labelRu: "3 вопроса любому детскому саду",
  },
  {
    id: "post-dropoff",
    labelEn: "Surviving the First Drop-Off",
    labelRu: "Как пережить первое расставание",
  },
  {
    id: "post-bilingual",
    labelEn: "Raising a Bilingual Child",
    labelRu: "Воспитание двуязычного ребёнка",
  },
  {
    id: "post-safety",
    labelEn: "How We Think About Safety",
    labelRu: "Наша забота о безопасности",
  },
  { id: "post-nurturing", labelEn: "A Nurturing Environment", labelRu: "Заботливая атмосфера" },
];

export default function Newsletter() {
  const { lang } = useLanguage();

  return (
    <main className="font-body">
      <SEO
        title="News & Blog - Lala Land, Foster City"
        description="The Lala Letter - a newsletter and blog for young moms: daycare tips, bilingual parenting, safety, and best practices from Lala Land in Foster City, CA."
        path="/newsletter"
      />
      <Reveal>
        <section className="pt-12 pb-19">
          <div className="w-[min(1240px,94.5%)] mx-auto">
            <div className="rounded-brand text-white p-11 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-9 items-center shadow-brand bg-[linear-gradient(135deg,#1a86b4,#156f96)]">
              <div>
                <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sun-mist text-sun-text">
                  The Lala Letter
                </span>
                <h1
                  className={`text-white font-display font-extrabold text-[clamp(1.7rem,3.6vw,2.4rem)] mb-2.5 ${lang === "ru" ? "hidden" : "block"}`}
                >
                  A little letter for busy young moms
                </h1>
                <h1
                  className={`text-white font-display font-extrabold text-[clamp(1.7rem,3.6vw,2.4rem)] mb-2.5 ${lang === "ru" ? "block" : "hidden"}`}
                  lang="ru"
                >
                  Небольшое письмо для занятых молодых мам
                </h1>
                <p className={`text-white/88 mb-0 ${lang === "ru" ? "hidden" : "block"}`}>
                  Once a month: what we did at Lala Land, seasonal activity ideas to try at home,
                  bilingual-parenting tips, and honest answers to the questions parents ask us most.
                  No spam — ever.
                </p>
                <p className={`text-white/88 mb-0 ${lang === "ru" ? "block" : "hidden"}`} lang="ru">
                  Раз в месяц: что мы делали в Lala Land, идеи сезонных занятий для дома, советы по
                  воспитанию двуязычных детей и честные ответы на самые частые вопросы родителей.
                  Никакого спама — никогда.
                </p>
                <p className="text-[0.9rem] text-white/80 mt-2" lang="ru">
                  Говорим по-русски — звоните: (415) 350-5015.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p
                  className={`text-[0.95rem] text-white/90 text-center ${lang === "ru" ? "hidden" : "block"}`}
                >
                  Newsletter signup is coming soon. Until then, follow along on Instagram — or call
                  or text us and we’ll add you to the list.
                </p>
                <p
                  className={`text-[0.95rem] text-white/90 text-center ${lang === "ru" ? "block" : "hidden"}`}
                  lang="ru"
                >
                  Подписка на рассылку скоро появится. А пока подписывайтесь на наш Instagram — или
                  позвоните/напишите нам, и мы добавим вас в список.
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
                  {lang === "ru"
                    ? "Подписаться на @lalalandkids_fostercity"
                    : "Follow @lalalandkids_fostercity"}
                </a>
                <a
                  href="tel:+14153505015"
                  className="inline-flex items-center justify-center font-display font-bold px-6.5 py-3 rounded-full bg-transparent text-white border-2 border-white/65"
                >
                  {lang === "ru"
                    ? "Позвонить или написать (415) 350-5015"
                    : "Call or Text (415) 350-5015"}
                </a>
                <p
                  className={`text-[0.8rem] text-white/75 text-center ${lang === "ru" ? "hidden" : "block"}`}
                >
                  We usually write once a month. Unsubscribe anytime.
                </p>
                <p
                  className={`text-[0.8rem] text-white/75 text-center ${lang === "ru" ? "block" : "hidden"}`}
                  lang="ru"
                >
                  Мы пишем обычно раз в месяц. Отписаться можно в любой момент.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <section id="blog" className="py-19 bg-cloud">
        <div className="w-[min(860px,94.5%)] mx-auto">
          <Reveal>
            <div className="text-center max-w-175 mx-auto mb-11.5">
              <span
                className={`font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-ocean ${lang === "ru" ? "hidden" : "inline-block"}`}
              >
                The Blog
              </span>
              <span
                className={`font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sky-mist text-sky-ocean ${lang === "ru" ? "inline-block" : "hidden"}`}
                lang="ru"
              >
                Блог
              </span>
              <h2
                className={`font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3 ${lang === "ru" ? "hidden" : "block"}`}
              >
                Best practices for young moms
              </h2>
              <h2
                className={`font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-3 ${lang === "ru" ? "block" : "hidden"}`}
                lang="ru"
              >
                Полезные советы для молодых мам
              </h2>
              <p className={`text-ink-soft ${lang === "ru" ? "hidden" : "block"}`}>
                Practical, judgment-free notes from a mother–daughter team that has rocked, fed, and
                raised a few kids of its own.
              </p>
              <p className={`text-ink-soft ${lang === "ru" ? "block" : "hidden"}`} lang="ru">
                Практичные и поддерживающие заметки от команды мамы и дочери, которые сами вырастили
                и воспитали своих детей.
              </p>
            </div>
          </Reveal>
          <nav className="flex flex-wrap gap-2.5 justify-center mb-11">
            {toc.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="no-underline bg-white shadow-brand-soft rounded-full px-4.5 py-2.5 font-bold text-[0.9rem] text-ink hover:bg-sky-mist hover:text-sky-ocean"
              >
                {lang === "ru" ? t.labelRu : t.labelEn}
              </a>
            ))}
          </nav>
          {posts.map((post) => (
            <Reveal key={post.id}>
              <article
                key={post.id}
                id={post.id}
                className="bg-white rounded-brand shadow-brand-soft p-11 mb-8.5 scroll-mt-27.5"
              >
                <div className="rounded-brand-sm px-6.5 py-5 mb-6.5 flex items-center gap-4.5 bg-[linear-gradient(150deg,#eaf7fd,#4abbff)]">
                  <span className="font-display text-[1.05rem] font-bold text-ink-soft">
                    {lang === "ru" ? post.bannerLabelRu : post.bannerLabelEn}
                  </span>
                </div>
                <p className="text-[0.85rem] text-ink-soft mb-2">
                  {lang === "ru" ? post.metaRu : post.metaEn}
                </p>
                <h2 className="font-display font-extrabold text-ink text-[clamp(1.7rem,3.6vw,2.4rem)] mb-4">
                  {lang === "ru" ? post.titleRu : post.titleEn}
                </h2>
                <div className="[&>p]:mb-4">{lang === "ru" ? post.contentRu : post.contentEn}</div>
                <ContactAside />
                <AuthorLine />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="bg-sky-ocean text-center text-white py-16">
          <div className="w-[min(1240px,94.5%)] mx-auto">
            <h2
              className={`text-white mb-2.5 font-display font-extrabold text-[clamp(1.7rem,3.6vw,2.4rem)] ${lang === "ru" ? "hidden" : "block"}`}
            >
              Want these tips in your inbox?
            </h2>
            <h2
              className={`text-white mb-2.5 font-display font-extrabold text-[clamp(1.7rem,3.6vw,2.4rem)] ${lang === "ru" ? "block" : "hidden"}`}
              lang="ru"
            >
              Хотите получать эти советы на почту?
            </h2>
            <p
              className={`text-white max-w-140 mx-auto mb-6.5 ${lang === "ru" ? "hidden" : "block"}`}
            >
              Subscribe to The Lala Letter above — or better yet, come ask us in person.
            </p>
            <p
              className={`text-white max-w-140 mx-auto mb-6.5 ${lang === "ru" ? "block" : "hidden"}`}
              lang="ru"
            >
              Подпишитесь на рассылку The Lala Letter выше — или, что еще лучше, приходите и
              спросите нас лично.
            </p>
            <AnchorLink
              to="visit"
              className="inline-block text-center font-display font-bold text-[1.15rem] px-8.5 py-3.75 rounded-full bg-sun text-sun-ink transition-all duration-150 hover:-translate-y-0.5 hover:bg-sun-deep hover:shadow-brand"
            >
              <span className={lang === "ru" ? "hidden" : "inline"}>Book a Free Tour</span>
              <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                Записаться на бесплатный визит
              </span>
            </AnchorLink>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
