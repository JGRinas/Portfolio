import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LngContainer, LngIcon, LngItems } from "../styled-components/language";
import { Button } from "../styled-components/buttons";

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation("common", { keyPrefix: "language" });
  const [showLanguageButtons, setShowLanguageButtons] = useState(false);

  const toggleLanguageButtons = () => {
    setShowLanguageButtons(!showLanguageButtons);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setShowLanguageButtons(false);
  };

  return (
    <LngContainer>
      <Button onClick={toggleLanguageButtons}>
        <LngIcon width={20} height={20} fill="#fff" />
      </Button>
      {showLanguageButtons && (
        <LngItems>
          <Button onClick={() => changeLanguage("en")}>{t("en")}</Button>
          <Button onClick={() => changeLanguage("es")}>{t("es")}</Button>
        </LngItems>
      )}
    </LngContainer>
  );
};

export default LanguageSwitcher;
