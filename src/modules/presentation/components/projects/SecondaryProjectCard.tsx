import { useTranslation } from "react-i18next";
import { Project } from "~/modules/domain/projects";
import { getProjectCover } from "~/modules/infrastructure/projects";
import { ProjectTag } from "./ProjectTag";

interface SecondaryProjectCardProps {
  project: Project;
  onSelect: () => void;
}

export const SecondaryProjectCard = ({
  project,
  onSelect,
}: SecondaryProjectCardProps) => {
  const { t } = useTranslation("common", { keyPrefix: "projects" });
  const copy = t(`items.${project.id}`, { returnObjects: true }) as {
    title: string;
    description?: string;
  };

  const cover = getProjectCover(project);
  const visibleTags = project.technologies.slice(0, 3);

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={copy.title}
      className="group flex w-full cursor-pointer gap-3 overflow-hidden rounded-xl border border-border-light bg-background-lightElevated p-3 text-left shadow-cardLight transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-accent-blue/40 hover:shadow-glowBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-border-dark dark:bg-background-darkElevated/80 dark:shadow-cardDark dark:hover:border-accent-blue/40 dark:hover:shadow-glowBlue sm:gap-3.5 sm:p-3.5"
    >
      <div className="relative h-[88px] w-[88px] shrink-0 overflow-hidden rounded-lg border border-border-light dark:border-border-dark">
        {cover ? (
          <img
            src={cover}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
        ) : (
          <div
            className="flex h-full w-full items-center justify-center bg-accent-blue/5 dark:bg-accent-blue/10"
            aria-hidden="true"
          />
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5">
        <h3 className="text-sm font-bold leading-tight text-text-lightPrimary dark:text-text-darkPrimary sm:text-base">
          {copy.title}
        </h3>

        {copy.description && (
          <p className="line-clamp-2 text-xs leading-snug text-text-lightSecondary dark:text-text-darkSecondary sm:text-sm">
            {copy.description}
          </p>
        )}

        <div className="flex flex-wrap gap-1">
          {visibleTags.map((tech) => (
            <ProjectTag key={tech} label={tech} />
          ))}
        </div>
      </div>
    </button>
  );
};
