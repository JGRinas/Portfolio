import { useTranslation } from "react-i18next";
import { TitleL } from "../../styled/ui/Text";

export const Projects = () => {
  const { t } = useTranslation("common", { keyPrefix: "projects" });

  return (
    <section className="flex mt-8 justify-start w-[100%]">
      <TitleL>{t("title")}</TitleL>
    </section>
  );
};
