import { FunctionComponent, SVGProps } from "react";
import { Text, TitleL, TitleS } from "../styled/ui/Text";
import { EmailIcon, DiscordIcon } from "../../../assets/icons";

export const Contact = () => {
  return (
    <section className="grid grid-cols-2 gap-[50px]">
      <div>
        <TitleL>Contacto</TitleL>
        <Text>
          Me interesan los proyectos freelance. Sin embargo, si tenés preguntas
          o propuestas de otro tipo, no dudes en contactarme.
        </Text>
      </div>
      <div className="flex flex-row items-center gap-4">
        <IconText icon={DiscordIcon} title="juanGBR#7962" />
        <IconText icon={EmailIcon} title="juangabrielrinas@gmail.com" />
      </div>
    </section>
  );
};

interface IIconText {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
}

const IconText = ({ icon: Icon, title }: IIconText) => (
  <div className="flex justify-start items-center gap-4">
    <Icon width={50} height={50} />
    <TitleS>{title}</TitleS>
  </div>
);
