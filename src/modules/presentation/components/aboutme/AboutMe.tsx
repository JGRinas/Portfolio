import { useTranslation } from "react-i18next";
import { Text, TitleL } from "../../styled/ui/Text";
import { Experience } from "./experience";
import { Technologies } from "./technologies";
import { Studies } from "./Studies";

export const AboutMe = () => {
  const { t } = useTranslation("common", { keyPrefix: "aboutMe" });
  return (
    <section
      id="aboutme"
      className="grid grid-cols-1 md:grid-cols-2 gap-[40px]"
    >
      <div>
        <article className="mb-4">
          <TitleL className="mb-4">{t("title")}</TitleL>
          <Text className="ml-2">{t("desc")}</Text>
        </article>
        <Studies />
        <div className="hidden md:!block">
          <Technologies />
        </div>
      </div>
      <div className="mt-[-30px] md:mt-0 ">
        <Experience />
        <div className="block md:!hidden">
          <Technologies />
        </div>
      </div>
    </section>
  );
};
