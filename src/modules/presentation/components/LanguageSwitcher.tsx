import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation("common", { keyPrefix: "language" });
  const currentLanguage = i18n.language;

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select
      value={currentLanguage}
      onChange={changeLanguage}
      aria-label={t("ariaLabel")}
      className="cursor-pointer rounded-lg border border-border-light bg-transparent px-2 py-1.5 text-xs font-semibold text-text-lightPrimary transition-colors hover:border-accent-blue focus:border-accent-blue focus:outline-none focus:ring-1 focus:ring-accent-blue dark:border-border-dark dark:text-text-darkPrimary md:text-sm"
    >
      <option value="en">{t("en")}</option>
      <option value="es">{t("es")}</option>
    </select>
  );
};

export default LanguageSwitcher;
