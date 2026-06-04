import { useTranslation } from "react-i18next";
import { FaStar } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import {
  featuredProjects,
  secondaryProjects,
} from "~/modules/infrastructure/projects";
import { handleScrollToSection } from "~/modules/infrastructure/utils/handleScroll";
import { FadeIn } from "../animations/fade-in";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { SecondaryProjectCard } from "./SecondaryProjectCard";

export const Projects = () => {
  const { t } = useTranslation("common", { keyPrefix: "projects" });

  return (
    <section id="projects" className="py-12 md:py-16">
      <FadeIn className="w-full">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-accent text-white shadow-glowBlue">
              <FaStar size={16} aria-hidden="true" />
            </div>
            <h2 className="text-xl font-bold text-text-lightPrimary dark:text-text-darkPrimary md:text-2xl">
              {t("title")}
            </h2>
          </div>

          <button
            type="button"
            onClick={() => handleScrollToSection("projects-secondary")}
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent-violet transition-opacity hover:opacity-80 dark:text-accent-blue"
          >
            {t("viewAll")}
            <HiArrowRight size={14} aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.id} project={project} />
          ))}
        </div>
      </FadeIn>

      <div id="projects-secondary" className="mt-8 scroll-mt-24 md:mt-10">
        <FadeIn delay={100} className="w-full">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {secondaryProjects.map((project) => (
              <SecondaryProjectCard key={project.id} project={project} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
