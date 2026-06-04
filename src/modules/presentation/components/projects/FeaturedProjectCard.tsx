import { useTranslation } from "react-i18next";
import { HiArrowRight } from "react-icons/hi";
import { FeaturedProject } from "~/modules/domain/projects";
import { ProjectTag } from "./ProjectTag";

interface FeaturedProjectCardProps {
  project: FeaturedProject;
}

export const FeaturedProjectCard = ({ project }: FeaturedProjectCardProps) => {
  const { t } = useTranslation("common", { keyPrefix: "projects" });
  const copy = t(`items.${project.id}`, { returnObjects: true }) as {
    title: string;
    description: string;
  };

  const href = project.page ?? project.repository;

  return (
    <article className="group relative flex min-h-[24rem] flex-col overflow-hidden rounded-2xl border border-border-light shadow-cardLight transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-accent-blue/40 hover:shadow-glowBlue motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-border-dark dark:shadow-cardDark dark:hover:shadow-glowBlue sm:min-h-[26rem]">
      <img
        src={project.image}
        alt={copy.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />

      {/* Degradé continuo: imagen visible arriba → fondo del tema abajo */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent from-[10%] via-background-light/75 via-[42%] to-background-light dark:via-background-dark/80 dark:to-background-dark"
        aria-hidden="true"
      />

      <div className="relative mt-auto flex flex-col p-4 sm:p-5">
        <h3 className="text-lg font-bold text-white drop-shadow-md sm:text-xl">
          {copy.title}
        </h3>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <ProjectTag key={tech} label={tech} variant="overlay" />
          ))}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-text-lightSecondary dark:text-text-darkSecondary">
          {copy.description}
        </p>

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-accent-blue px-4 py-2 text-sm font-semibold text-accent-blue transition-all duration-300 hover:bg-accent-blue/10 group-hover:border-accent-violet group-hover:text-accent-violet motion-reduce:transition-none"
          >
            {t("viewProject")}
            <HiArrowRight
              size={14}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
            />
          </a>
        )}
      </div>
    </article>
  );
};
