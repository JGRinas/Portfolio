import {
  ExperienceItemData,
  ExperienceSubrole,
} from "~/modules/domain/experience";
import { TechnologyTag } from "./TechnologyTag";

const MAX_COLLAPSED_TECHS = 5;

interface ExperienceItemProps {
  item: ExperienceItemData;
  expanded: boolean;
  isLast: boolean;
}

const TechList = ({ technologies }: { technologies: string[] }) => {
  if (technologies.length === 0) return null;

  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {technologies.map((tech) => (
        <TechnologyTag key={tech} label={tech} />
      ))}
    </div>
  );
};

const SubroleBlock = ({ subrole }: { subrole: ExperienceSubrole }) => (
  <div className="mt-4 border-t border-border-light pt-4 dark:border-border-dark">
    <div className="flex flex-wrap items-baseline justify-between gap-2">
      <h4 className="text-sm font-bold text-text-lightPrimary dark:text-text-darkPrimary">
        {subrole.role}
      </h4>
      <span className="text-xs text-text-lightSecondary dark:text-text-darkSecondary">
        {subrole.date}
      </span>
    </div>
    <p className="mt-1 text-sm text-text-lightSecondary dark:text-text-darkSecondary">
      {subrole.summary}
    </p>
    <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-text-lightSecondary dark:text-text-darkSecondary">
      {subrole.bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
    <TechList technologies={subrole.technologies} />
  </div>
);

const getCollapsedTechnologies = (item: ExperienceItemData): string[] => {
  if (item.subroles?.length) {
    return [...new Set(item.subroles.flatMap((s) => s.technologies))].slice(
      0,
      MAX_COLLAPSED_TECHS,
    );
  }
  return (item.technologies ?? []).slice(0, MAX_COLLAPSED_TECHS);
};

const getAllTechnologies = (item: ExperienceItemData): string[] => {
  if (item.subroles?.length) {
    return [...new Set(item.subroles.flatMap((s) => s.technologies))];
  }
  return item.technologies ?? [];
};

export const ExperienceItem = ({
  item,
  expanded,
  isLast,
}: ExperienceItemProps) => {
  const hasSubroles = Boolean(item.subroles?.length);

  return (
    <div className={`relative pl-6 ${isLast ? "" : "pb-8"}`}>
      <span
        className="absolute left-0 top-1.5 h-3 w-3 -translate-x-[7px] rounded-full bg-accent-blue shadow-glowBlue"
        aria-hidden="true"
      />

      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-base font-bold text-text-lightPrimary dark:text-text-darkPrimary">
          {item.company}
        </h3>
        <span className="text-xs font-medium text-text-lightSecondary dark:text-text-darkSecondary">
          {item.date}
        </span>
      </div>

      <p className="mt-0.5 text-sm font-medium text-accent-blue">{item.role}</p>

      {expanded && (
        <p className="mt-0.5 text-xs text-text-lightSecondary dark:text-text-darkSecondary">
          {item.employmentType} · {item.location}
        </p>
      )}

      <p className="mt-2 text-sm leading-relaxed text-text-lightSecondary dark:text-text-darkSecondary">
        {item.summary}
      </p>

      {expanded && !hasSubroles && item.bullets && (
        <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-text-lightSecondary dark:text-text-darkSecondary">
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}

      {expanded && hasSubroles
        ? item.subroles!.map((subrole) => (
            <SubroleBlock key={subrole.role} subrole={subrole} />
          ))
        : null}

      {!expanded && <TechList technologies={getCollapsedTechnologies(item)} />}

      {expanded && !hasSubroles && (
        <TechList technologies={getAllTechnologies(item)} />
      )}
    </div>
  );
};
