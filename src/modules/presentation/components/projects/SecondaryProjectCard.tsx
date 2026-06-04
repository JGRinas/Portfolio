import { useTranslation } from "react-i18next";
import { FigmaIcon, PostmanIcon } from "~/assets/icons";
import { SecondaryProject } from "~/modules/domain/projects";
import { ProjectTag } from "./ProjectTag";

const ICON_MAP = {
  postman: PostmanIcon,
  figma: FigmaIcon,
} as const;

interface SecondaryProjectCardProps {
  project: SecondaryProject;
}

export const SecondaryProjectCard = ({
  project,
}: SecondaryProjectCardProps) => {
  const { t } = useTranslation("common", { keyPrefix: "projects" });
  const copy = t(`items.${project.id}`, { returnObjects: true }) as {
    title: string;
    subtitle?: string;
  };

  const Icon = project.icon ? ICON_MAP[project.icon] : null;
  const href = project.page ?? project.repository;

  const content = (
    <>
      {project.image && (
        <>
          <img
            src={project.image}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </>
      )}

      {!project.image && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 via-background-darkElevated to-accent-violet/10 dark:from-accent-blue/15 dark:to-accent-violet/15"
          aria-hidden="true"
        />
      )}

      <div className="relative flex h-full min-h-[110px] flex-col justify-between p-3 sm:min-h-[120px] sm:p-4">
        <h3 className="text-sm font-bold leading-tight text-text-lightPrimary dark:text-text-darkPrimary">
          {copy.title}
        </h3>

        <div className="mt-2 flex items-end justify-between gap-2">
          {Icon && copy.subtitle ? (
            <div className="flex items-center gap-2">
              <Icon width={22} height={22} className="shrink-0" />
              <span className="text-xs text-text-lightSecondary dark:text-text-darkSecondary">
                {copy.subtitle}
              </span>
            </div>
          ) : (
            <div className="flex flex-wrap gap-1">
              {project.technologies?.map((tech) => (
                <ProjectTag key={tech} label={tech} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );

  const className =
    "group relative overflow-hidden rounded-xl border border-border-light bg-background-lightElevated shadow-cardLight transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent-blue/50 hover:shadow-glowBlue motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-border-dark dark:bg-background-darkElevated/80 dark:shadow-cardDark dark:hover:border-accent-blue/50 dark:hover:shadow-glowBlue";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return <article className={className}>{content}</article>;
};
