import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaBriefcase } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import CV from "~/assets/documents/CV-JuanGabrielBenitezRinas.pdf";
import { ExperienceItemData } from "~/modules/domain/experience";
import { ExperienceItem } from "./ExperienceItem";

const cardClass =
  "rounded-2xl border border-border-light bg-background-lightElevated/80 p-6 shadow-cardLight backdrop-blur-sm dark:border-border-dark dark:bg-background-darkElevated/80 dark:shadow-cardDark md:p-8";

export const ExperienceSection = () => {
  const { t } = useTranslation("common", { keyPrefix: "experience" });
  const [expanded, setExpanded] = useState(false);

  const items = t("items", {
    returnObjects: true,
  }) as ExperienceItemData[];

  return (
    <article id="experience" className={cardClass}>
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue shadow-glowBlue">
            <FaBriefcase size={18} aria-hidden="true" />
          </div>
          <h2 className="text-xl font-bold text-text-lightPrimary dark:text-text-darkPrimary md:text-2xl">
            {t("title")}
          </h2>
        </div>
        <a
          href={CV}
          download
          className="hidden shrink-0 items-center gap-1 text-xs font-semibold text-accent-blue transition-opacity hover:opacity-80 sm:inline-flex md:text-sm"
        >
          {t("viewResume")}
          <HiArrowRight size={14} aria-hidden="true" />
        </a>
      </div>

      <div className="relative border-l-2 border-accent-blue/25 pl-0 dark:border-accent-blue/20">
        {items.map((item, index) => (
          <ExperienceItem
            key={item.company}
            item={item}
            expanded={expanded}
            isLast={index === items.length - 1}
          />
        ))}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        className="mt-6 w-full rounded-full border border-border-light py-2.5 text-sm font-semibold text-accent-blue transition-colors hover:border-accent-blue hover:bg-accent-blue/5 dark:border-border-dark dark:hover:bg-accent-blue/10"
      >
        {expanded ? t("viewLess") : t("viewFull")}
      </button>

      <a
        href={CV}
        download
        className="mt-3 flex items-center justify-center gap-1 text-xs font-semibold text-accent-blue sm:hidden"
      >
        {t("viewResume")}
        <HiArrowRight size={14} aria-hidden="true" />
      </a>
    </article>
  );
};
