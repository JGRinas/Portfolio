import { useTranslation } from "react-i18next";
import { Option, Select } from "../styled/components/Select";

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation("common", { keyPrefix: "language" });
  const currentLanguage = i18n.language;

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Select value={currentLanguage} onChange={changeLanguage}>
      <Option value="en">{t("en")}</Option>
      <Option value="es">{t("es")}</Option>
    </Select>
  );
};

export default LanguageSwitcher;
