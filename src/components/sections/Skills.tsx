import { useLanguage } from "../../context/languageContext";

export default function Skills() {
  const { lang } = useLanguage();

  const skills = [
    {
      titleEn: "Reasoning",
      titleRu: "Логика и мышление",
      descEn: "Building critical thinking and decision-making skills.",
      descRu: "Развитие критического мышления и умения принимать решения.",
    },
    {
      titleEn: "Pronunciation",
      titleRu: "Произношение",
      descEn: "Improving clarity and speech expression.",
      descRu: "Улучшение чёткости и выразительности речи.",
    },
    {
      titleEn: "Language Skills",
      titleRu: "Языковые навыки",
      descEn: "Supporting vocabulary and language development — in more than one language.",
      descRu: "Расширение словарного запаса — не на одном языке.",
    },
    {
      titleEn: "Motor Skills",
      titleRu: "Моторика",
      descEn: "Enhancing coordination and physical agility.",
      descRu: "Улучшение координации и физической ловкости.",
    },
    {
      titleEn: "Social Skills",
      titleRu: "Социальные навыки",
      descEn: "Fostering teamwork, collaboration, and communication.",
      descRu: "Командная работа, сотрудничество и общение.",
    },
    {
      titleEn: "Imagination",
      titleRu: "Воображение",
      descEn: "Encouraging creative thinking and innovation.",
      descRu: "Поощрение творческого мышления.",
    },
  ];

  return (
    <section id="skills" className="py-19 bg-cloud">
      <div className="w-[min(1240px,94.5%)] mx-auto">
        <div className="text-center max-w-175 mx-auto mb-11.5">
          <span className="inline-block font-display font-bold text-[0.85rem] tracking-[0.16em] uppercase px-4 py-1.5 rounded-full mb-3.5 bg-sun-mist text-sun-deep">
            <span className={lang === "ru" ? "hidden" : "inline"}>Building Strong Foundations</span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Прочные основы
            </span>
          </span>
          <h2 className="font-display font-extrabold tracking-[-0.015em] leading-[1.15] text-ink text-[clamp(1.7rem,3.6vw,2.4rem)]">
            <span className={lang === "ru" ? "hidden" : "inline"}>
              Skills your child will develop
            </span>
            <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
              Навыки, которые будет развивать ваш ребёнок
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="relative bg-white rounded-brand p-6.5 pt-8 shadow-brand-soft border-t-[5px] border-sky transition-all duration-200 hover:-translate-y-1 hover:shadow-brand"
            >
              <span className="absolute -top-4 -left-1.5 w-10 h-10 rounded-full flex items-center justify-center font-display font-extrabold text-[1.1rem] bg-sun text-sun-ink shadow-brand-soft">
                {i + 1}
              </span>
              <h3 className="text-[1.25rem] mb-2 font-display font-extrabold text-ink">
                <span className={lang === "ru" ? "hidden" : "inline"}>{skill.titleEn}</span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  {skill.titleRu}
                </span>
              </h3>
              <p className="text-ink-soft text-[0.95rem] mb-0">
                <span className={lang === "ru" ? "hidden" : "inline"}>{skill.descEn}</span>
                <span className={lang === "ru" ? "inline" : "hidden"} lang="ru">
                  {skill.descRu}
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
