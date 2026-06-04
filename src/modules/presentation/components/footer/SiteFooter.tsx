import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowUp, HiExternalLink } from "react-icons/hi";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  NANDEXA_URL,
} from "~/modules/infrastructure/stack";
import { handleScrollToSection } from "~/modules/infrastructure/utils/handleScroll";

const NAV_LINKS = [
  { key: "about", section: "aboutme" },
  { key: "experience", section: "experience" },
  { key: "projects", section: "projects" },
  { key: "stack", section: "stack" },
  { key: "contact", section: "contact" },
] as const;

export const SiteFooter = () => {
  const { t } = useTranslation("common", { keyPrefix: "footer" });
  const { t: tNav } = useTranslation("common", { keyPrefix: "nav" });

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border-light py-10 dark:border-border-dark md:py-12">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-text-lightPrimary dark:text-text-darkPrimary">
                JG
                <span className="text-accent-blue">.</span>
              </span>
            </div>
            <p className="mt-2 text-sm font-semibold text-text-lightPrimary dark:text-text-darkPrimary">
              {t("name")}
            </p>
            <p className="text-xs text-accent-blue">{t("role")}</p>
            <p className="mt-3 text-sm text-text-lightSecondary dark:text-text-darkSecondary">
              {t("description")}
            </p>
            <p className="mt-2 text-xs text-text-lightSecondary dark:text-text-darkSecondary">
              {t("nandexaPrefix")}{" "}
              <a
                href={NANDEXA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-accent-blue transition-opacity hover:opacity-80"
              >
                {t("nandexaName")}
              </a>
              .
            </p>
          </div>

          <nav
            aria-label={t("navLabel")}
            className="flex flex-wrap gap-x-5 gap-y-2"
          >
            {NAV_LINKS.map(({ key, section }) => (
              <button
                key={key}
                type="button"
                onClick={() => handleScrollToSection(section)}
                className="text-sm text-text-lightSecondary transition-colors hover:text-accent-blue dark:text-text-darkSecondary dark:hover:text-accent-blue"
              >
                {tNav(key)}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-light text-text-lightSecondary transition-colors hover:border-accent-blue hover:text-accent-blue dark:border-border-dark dark:text-text-darkSecondary"
            >
              <FaGithub size={16} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-light text-text-lightSecondary transition-colors hover:border-accent-blue hover:text-accent-blue dark:border-border-dark dark:text-text-darkSecondary"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href={NANDEXA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nandexa"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-light text-text-lightSecondary transition-colors hover:border-accent-blue hover:text-accent-blue dark:border-border-dark dark:text-text-darkSecondary"
            >
              <HiExternalLink size={16} />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label={t("scrollTop")}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-light text-text-lightSecondary transition-colors hover:border-accent-blue hover:text-accent-blue dark:border-border-dark dark:text-text-darkSecondary"
            >
              <HiArrowUp size={16} aria-hidden="true" />
            </button>
          </div>
        </div>

        <p className="border-t border-border-light pt-6 text-center text-xs text-text-lightSecondary dark:border-border-dark dark:text-text-darkSecondary md:text-left">
          {t("copyright")}
        </p>
      </div>
    </footer>
  );
};
