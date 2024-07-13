import { useTranslation } from "react-i18next";
import { PresentationContainer } from "../styled/components/Presentation";
import {
  HighlightedTitle,
  Subtitle,
  TitleXXL,
} from "../styled/components/Text";
import CodeBackgroundContent from "./CodeBackground";

export const Presentation = () => {
  const { t } = useTranslation("common");
  return (
    <PresentationContainer>
      <CodeBackgroundContent />
      <HighlightedTitle>Full-Stack</HighlightedTitle>
      <TitleXXL style={{ marginLeft: 150, marginTop: -30 }}>Developer</TitleXXL>
      <Subtitle style={{ maxWidth: "80%" }}>{t("summary")}</Subtitle>
    </PresentationContainer>
  );
};
