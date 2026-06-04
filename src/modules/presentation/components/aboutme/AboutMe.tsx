import { useTranslation } from "react-i18next";
import { FaUser } from "react-icons/fa";
import { getYearsOfExperience } from "~/modules/infrastructure/utils/experienceYears";
import { EducationCard } from "./EducationCard";
import { ExperienceSection } from "./ExperienceSection";
import { FadeIn } from "../animations/fade-in";

const cardClass =
  "rounded-2xl border border-border-light bg-background-lightElevated/80 p-6 shadow-cardLight backdrop-blur-sm dark:border-border-dark dark:bg-background-darkElevated/80 dark:shadow-cardDark md:p-8";

export const AboutMe = () => {
  const { t } = useTranslation("common", { keyPrefix: "aboutMe" });

  return (
    <section id="aboutme" className="pt-8 pb-12 md:pt-10 md:pb-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        <FadeIn delay={50} className="w-full">
          <article className={cardClass}>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue shadow-glowBlue">
                <FaUser size={18} aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-text-lightPrimary dark:text-text-darkPrimary md:text-2xl">
                {t("title")}
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-text-lightSecondary dark:text-text-darkSecondary md:text-base">
              {t("desc", { years: getYearsOfExperience() })}
            </p>

            <div className="mt-6">
              <EducationCard />
            </div>
          </article>
        </FadeIn>

        <FadeIn delay={100} className="w-full">
          <ExperienceSection />
        </FadeIn>
      </div>
    </section>
  );
};
