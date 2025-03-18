import { useTranslation } from "react-i18next";
import { PresentationContainer } from "../styled/components/Presentation";
import { Text, TitleXL } from "../styled/ui/Text";
import CodeBackgroundContent from "../ui/CodeBackground";
import { Button } from "../styled/ui/Buttons";
import { RoundImage } from "../styled/ui/Image";
import Photo from "../../../assets/images/photo-me.jpg";
import { SocialMedia } from "./SocialMedia";
import { handleScrollToSection } from "~/modules/infrastructure/utils/handleScroll";

export const Presentation = () => {
  const { t } = useTranslation("common", { keyPrefix: "presentation" });

  return (
    <PresentationContainer>
      <CodeBackgroundContent />
      <section>
        <div className="mt-[-50px] md:mt-0">
          <TitleXL className="-mb-4">Juan Gabriel</TitleXL>
          <TitleXL className="whitespace-nowrap">Benitez Rinas</TitleXL>
        </div>
        <Text className="mt-4">{t("desc")}</Text>
        <div className="mt-8 flex gap-4 justify-center md:justify-start">
          <Button
            variant="full"
            onClick={() => handleScrollToSection("aboutme")}
          >
            {t("btnAbout")}
          </Button>
          <Button
            variant="outline"
            onClick={() => handleScrollToSection("contact")}
          >
            {t("btnContact")}
          </Button>
        </div>
      </section>
      <section className="flex flex-col gap-8">
        <RoundImage src={Photo} size={"400px"} />
        <SocialMedia />
      </section>
    </PresentationContainer>
  );
};
