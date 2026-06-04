import { useTranslation } from "react-i18next";
import { FaMoon, FaSun } from "react-icons/fa";
import { useThemeContext } from "~/modules/infrastructure/hooks/useThemeContext";

const ThemeSwitch = () => {
  const { toggleTheme, isDarkTheme } = useThemeContext();
  const { t } = useTranslation("common", { keyPrefix: "theme" });

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t("toggle")}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-light text-text-lightPrimary transition-colors hover:border-accent-blue hover:text-accent-blue dark:border-border-dark dark:text-text-darkPrimary dark:hover:border-accent-blue"
    >
      {isDarkTheme ? (
        <FaSun size={18} aria-hidden="true" />
      ) : (
        <FaMoon size={18} aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeSwitch;
