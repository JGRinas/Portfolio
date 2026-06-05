import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaCube, FaHistory, FaLayerGroup } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import {
  earlyProjects,
  featuredProjects,
  getProjectById,
  secondaryProjects,
} from "~/modules/infrastructure/projects";
import { handleScrollToSection } from "~/modules/infrastructure/utils/handleScroll";
import { FadeIn } from "../animations/fade-in";
import { EarlyProjectCard } from "./EarlyProjectCard";
import { FeaturedProjectCard } from "./FeaturedProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";
import { SecondaryProjectCard } from "./SecondaryProjectCard";

export const Projects = () => {
  const { t } = useTranslation("common", { keyPrefix: "projects" });
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null,
  );

  const selectedProject = selectedProjectId
    ? (getProjectById(selectedProjectId) ?? null)
    : null;

  return (
    <section id="projects" className="py-12 md:py-16">
      <FadeIn className="w-full">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-accent text-white shadow-glowBlue">
              <FaCube size={16} aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-text-lightPrimary dark:text-text-darkPrimary md:text-2xl">
                {t("title")}
              </h2>
              <p className="mt-1 max-w-xl text-sm text-text-lightSecondary dark:text-text-darkSecondary">
                {t("featuredSubtitle")}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => handleScrollToSection("projects-secondary")}
            className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-accent-blue transition-opacity hover:opacity-80 dark:text-accent-violet"
          >
            {t("viewAll")}
            <HiArrowRight size={14} aria-hidden="true" />
          </button>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={() => setSelectedProjectId(project.id)}
            />
          ))}
        </div>
      </FadeIn>

      <div id="projects-secondary" className="mt-16 scroll-mt-24 md:mt-20">
        <FadeIn delay={100} className="w-full">
          <header className="mb-8">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue shadow-glowBlue dark:bg-accent-blue/10">
                <FaLayerGroup size={16} aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-text-lightPrimary dark:text-text-darkPrimary md:text-2xl">
                  {t("moreTitle")}
                </h2>
                <p className="mt-1 max-w-xl text-sm text-text-lightSecondary dark:text-text-darkSecondary">
                  {t("moreSubtitle")}
                </p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {secondaryProjects.map((project) => (
              <SecondaryProjectCard
                key={project.id}
                project={project}
                onSelect={() => setSelectedProjectId(project.id)}
              />
            ))}
          </div>
        </FadeIn>
      </div>

      <div id="projects-early" className="mt-16 scroll-mt-24 md:mt-20">
        <FadeIn delay={150} className="w-full">
          <header className="mb-6">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-violet/10 text-accent-violet dark:bg-accent-violet/15">
                <FaHistory size={14} aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-text-lightPrimary dark:text-text-darkPrimary md:text-xl">
                  {t("earlyTitle")}
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-text-lightSecondary dark:text-text-darkSecondary">
                  {t("earlySubtitle")}
                </p>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
            {earlyProjects.map((project) => (
              <EarlyProjectCard
                key={project.id}
                project={project}
                onSelect={() => setSelectedProjectId(project.id)}
              />
            ))}
          </div>
        </FadeIn>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />
    </section>
  );
};
