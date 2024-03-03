import React from "react";

import { NavContainer } from "../styled-components/nav";
import { Button as NavButton } from "../styled-components/buttons";
import { useSpaceBackground } from "../providers/hooks/use-space-background";
import { useTranslation } from "react-i18next";

const NavSection: React.FC = () => {
  const { t } = useTranslation("common", { keyPrefix: "nav" });
  const { travelToSection } = useSpaceBackground();

  return (
    <NavContainer>
      <NavButton onClick={() => travelToSection(-1000)}>{t("home")}</NavButton>
      <NavButton onClick={() => travelToSection(-600)}>
        {t("aboutMe")}
      </NavButton>
      <NavButton onClick={() => travelToSection(-200)}>
        {t("contacts")}
      </NavButton>
      <NavButton onClick={() => travelToSection(200)}>
        {t("projects")}
      </NavButton>
      <NavButton onClick={() => travelToSection(600)}>
        {t("experience")}
      </NavButton>
    </NavContainer>
  );
};

export default NavSection;
