import { useTranslation } from "react-i18next";
import { Text, TitleL } from "../../styled/ui/Text";
import { Experience } from "./experience";
import { Technologies } from "./technologies";
import { Studies } from "./Studies";
import { FadeIn } from "../animations/fade-in";

export const AboutMe = () => {
  const { t } = useTranslation("common", { keyPrefix: "aboutMe" });
  return (
    <section
      id="aboutme"
      className="grid grid-cols-1 md:grid-cols-2 gap-[40px]"
    >
      <div>
        <FadeIn delay={50} className="w-full">
          <article className="mb-4">
            <TitleL className="mb-4 text-center md:text-start">
              {t("title")}
            </TitleL>
            <Text className="ml-2">{t("desc")}</Text>
          </article>
        </FadeIn>
        <FadeIn delay={50} className="w-full">
          <Studies />
        </FadeIn>
        <FadeIn delay={50} className="w-full">
          <div className="hidden md:!block">
            <Technologies />
          </div>
        </FadeIn>
      </div>
      <div className="mt-[-30px] md:mt-0 ">
        <FadeIn delay={50} className="w-full">
          <Experience />
        </FadeIn>
        <div className="block md:!hidden">
          <FadeIn delay={50} className="w-full">
            <Technologies />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
