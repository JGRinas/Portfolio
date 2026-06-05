import { useTranslation } from "react-i18next";
import { HiArrowRight } from "react-icons/hi";
import { Project } from "~/modules/domain/projects";
import { getProjectCover } from "~/modules/infrastructure/projects";
import { ProjectTag } from "./ProjectTag";

interface FeaturedProjectCardProps {
  project: Project;
  index: number;
  onSelect: () => void;
}

export const FeaturedProjectCard = ({
  project,
  index,
  onSelect,
}: FeaturedProjectCardProps) => {
  const { t } = useTranslation("common", { keyPrefix: "projects" });
  const copy = t(`items.${project.id}`, { returnObjects: true }) as {
    title: string;
    description: string;
  };

  const cover = getProjectCover(project);
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={copy.title}
      className="group flex w-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border-light bg-background-lightElevated text-left shadow-cardLight transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent-blue/40 hover:shadow-glowBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-blue motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-border-dark dark:bg-background-darkElevated/80 dark:shadow-cardDark dark:hover:border-accent-blue/40 dark:hover:shadow-glowBlue"
    >
      <div className="relative h-[220px] w-full shrink-0 overflow-hidden">
        {cover ? (
          <>
            <img
              src={cover}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
            <div
              className="absolute inset-0 bg-black/5 dark:bg-black/20"
              aria-hidden="true"
            />
          </>
        ) : (
          <div
            className="h-full w-full bg-gradient-to-br from-accent-blue/10 to-accent-violet/10 dark:from-accent-blue/15 dark:to-accent-violet/15"
            aria-hidden="true"
          />
        )}

        <span className="absolute left-3 top-3 flex h-7 min-w-[1.75rem] items-center justify-center rounded-lg bg-gradient-accent px-1.5 text-xs font-bold text-white shadow-glowBlue">
          {indexLabel}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="text-lg font-bold text-text-lightPrimary dark:text-text-darkPrimary sm:text-xl">
          {copy.title}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-text-lightSecondary dark:text-text-darkSecondary">
          {copy.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <ProjectTag key={tech} label={tech} />
          ))}
        </div>

        <span className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent-blue transition-all duration-300 group-hover:gap-2 motion-reduce:transition-none">
          {t("viewDetails")}
          <HiArrowRight
            size={14}
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
          />
        </span>
      </div>
    </button>
  );
};
