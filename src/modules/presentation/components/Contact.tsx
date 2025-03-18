import { FunctionComponent, SVGProps } from "react";
import { Text, TitleL, TitleS } from "../styled/ui/Text";
import { EmailIcon, DiscordIcon, LinkedinIcon } from "../../../assets/icons";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation("common", { keyPrefix: "contacts" });

  return (
    <section
      id="contact"
      className="grid grid-cols-1 md:grid-cols-2 gap-[50px]"
    >
      <div>
        <TitleL>{t("title")}</TitleL>
        <Text>{t("desc")}</Text>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-4">
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
