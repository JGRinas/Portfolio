import { useTranslation } from "react-i18next";
import { handleScrollToSection } from "~/modules/infrastructure/utils/handleScroll";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitch from "../ui/ThemeSwitch";

const NAV_LINKS = [
  { key: "about", section: "aboutme" },
  { key: "experience", section: "experience" },
  { key: "projects", section: "projects" },
  { key: "stack", section: "stack" },
  { key: "contact", section: "contact" },
] as const;

export const Navbar = () => {
  const { t } = useTranslation("common", { keyPrefix: "nav" });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-light bg-background-lightElevated/80 backdrop-blur-md dark:border-border-dark dark:bg-background-darkElevated/70">
      <nav
        aria-label={t("ariaLabel")}
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4"
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-xl font-bold tracking-tight text-text-lightPrimary dark:text-text-darkPrimary md:text-2xl"
        >
          JG.
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map(({ key, section }) => (
            <li key={key}>
              <button
                type="button"
                onClick={() => handleScrollToSection(section)}
                className="text-sm font-medium text-text-lightSecondary transition-colors hover:text-accent-blue dark:text-text-darkSecondary dark:hover:text-accent-blue"
              >
                {t(key)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <LanguageSwitcher />
          <ThemeSwitch />
        </div>
      </nav>
    </header>
  );
};
