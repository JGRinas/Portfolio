import { useTranslation } from "react-i18next";
import { HiArrowRight } from "react-icons/hi";
import { Project } from "~/modules/domain/projects";
import { getProjectCover } from "~/modules/infrastructure/projects";
import { ProjectTag } from "./ProjectTag";

interface EarlyProjectCardProps {
  project: Project;
  onSelect: () => void;
}

export const EarlyProjectCard = ({
  project,
  onSelect,
}: EarlyProjectCardProps) => {
  const { t } = useTranslation("common", { keyPrefix: "projects" });
  const copy = t(`items.${project.id}`, { returnObjects: true }) as {
    title: string;
    description: string;
  };

  const cover = getProjectCover(project);
  const visibleTags = project.technologies.slice(0, 3);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border-light bg-background-lightElevated/60 dark:border-border-dark dark:bg-background-darkElevated/50">
      <button
        type="button"
        onClick={onSelect}
        aria-label={copy.title}
        className="group flex flex-1 cursor-pointer flex-col text-left transition-colors hover:bg-accent-blue/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent-blue dark:hover:bg-accent-blue/[0.06]"
      >
        <div className="relative h-[140px] w-full shrink-0 overflow-hidden border-b border-border-light dark:border-border-dark">
          {cover ? (
            <img
              src={cover}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100 dark:opacity-80 dark:group-hover:opacity-95"
            />
          ) : (
            <div
              className="h-full w-full bg-accent-blue/5 dark:bg-accent-blue/10"
              aria-hidden="true"
            />
          )}
        </div>

        <div className="flex flex-1 flex-col gap-2 p-3 sm:p-3.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex rounded-full border border-accent-violet/30 bg-accent-violet/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent-violet dark:border-accent-violet/40 dark:bg-accent-violet/15 dark:text-accent-violet sm:text-xs">
              {t("earlyBadge")}
            </span>
            {project.year && (
              <span className="text-xs font-medium text-text-lightSecondary dark:text-text-darkSecondary">
                {project.year}
              </span>
            )}
          </div>

          <h3 className="text-sm font-bold leading-tight text-text-lightPrimary dark:text-text-darkPrimary">
            {copy.title}
          </h3>

          <p className="line-clamp-2 text-xs leading-snug text-text-lightSecondary dark:text-text-darkSecondary">
            {copy.description}
          </p>

          <div className="mt-auto flex flex-wrap gap-1 pt-1">
            {visibleTags.map((tech) => (
              <ProjectTag key={tech} label={tech} />
            ))}
          </div>
        </div>
      </button>

      {project.repository && (
        <div className="border-t border-border-light px-3 py-2.5 dark:border-border-dark sm:px-3.5">
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-accent-blue transition-opacity hover:opacity-80 dark:text-accent-violet"
          >
            {t("viewRepository")}
            <HiArrowRight size={12} aria-hidden="true" />
          </a>
        </div>
      )}
    </article>
  );
};
