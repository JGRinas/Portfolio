import { useTranslation } from "react-i18next";
import {
  FaBriefcase,
  FaCloud,
  FaCode,
  FaMobileAlt,
} from "react-icons/fa";
import { getYearsOfExperienceLabel } from "~/modules/infrastructure/utils/experienceYears";

const STAT_ICONS = [FaBriefcase, FaCode, FaMobileAlt, FaCloud] as const;
const STAT_KEYS = ["experience", "projects", "mobileLead", "cloud"] as const;

export const HeroStats = () => {
  const { t } = useTranslation("common", { keyPrefix: "heroStats" });

  return (
    <div
      className="mt-10 grid grid-cols-2 gap-3 rounded-2xl border border-border-light bg-background-lightElevated/60 p-4 shadow-cardLight backdrop-blur-md dark:border-border-dark dark:bg-background-darkElevated/50 dark:shadow-cardDark md:mt-12 md:grid-cols-4 md:gap-0 md:p-0 animate-fadeUp motion-reduce:animate-none [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]"
    >
      {STAT_KEYS.map((key, index) => {
        const Icon = STAT_ICONS[index];
        return (
          <div
            key={key}
            className={`flex items-center gap-3 p-3 md:p-5 ${
              index < STAT_KEYS.length - 1
                ? "md:border-r md:border-border-light dark:md:border-border-dark"
                : ""
            }`}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-accent text-white shadow-glowBlue md:h-11 md:w-11">
              <Icon size={16} aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="text-lg font-bold leading-tight text-text-lightPrimary dark:text-text-darkPrimary md:text-xl">
                {key === "experience"
                  ? getYearsOfExperienceLabel()
                  : t(`${key}.value`)}
              </p>
              <p className="text-xs font-semibold text-text-lightPrimary dark:text-text-darkPrimary md:text-sm">
                {t(`${key}.label`)}
              </p>
              <p
                className={`hidden text-xs text-text-lightSecondary dark:text-text-darkSecondary ${
                  key === "cloud" || key === "mobileLead" ? "md:block" : "lg:block"
                }`}
              >
                {t(`${key}.desc`)}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
