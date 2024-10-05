import { useTranslation } from "react-i18next";
import { PresentationContainer } from "../styled/components/Presentation";
import { Text, TitleXL } from "../styled/ui/Text";
import CodeBackgroundContent from "./CodeBackground";
import { Button } from "../styled/ui/Buttons";
import { RoundImage } from "../styled/ui/Image";
import Photo from "../../../assets/images/photo-me.jpg";

export const Presentation = () => {
  const { t } = useTranslation("common");
  return (
    <PresentationContainer>
      <div>
        <CodeBackgroundContent />
        <div>
          <TitleXL className="-mb-4">Juan Gabriel</TitleXL>
          <TitleXL>Benitez Rinas</TitleXL>
        </div>
        <Text className="mt-4">
          Desarrollador de páginas web & aplicaciones móviles
        </Text>
        <div className="mt-8 flex gap-4">
          <Button variant="full">Sobre mi</Button>
          <Button variant="outline">Contacto</Button>
        </div>
      </div>
      <RoundImage src={Photo} size={"400px"} />
    </PresentationContainer>
  );
};
