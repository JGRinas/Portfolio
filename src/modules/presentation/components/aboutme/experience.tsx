import { useTranslation } from "react-i18next";
import { Text, TitleL, TitleM, TitleS } from "../../styled/ui/Text";

export const Experience = () => {
  const { t } = useTranslation("common", { keyPrefix: "experience" });
  return (
    <article className="mb-4">
      <TitleL className="text-center md:text-start">{t("title")}</TitleL>
      <TitleM>{t("experiences.almoby.title")}</TitleM>
      <TitleS>{t("experiences.almoby.date")}</TitleS>
      <ul className="flex flex-col gap-4 mt-4 ml-4">
        {[1, 2].map((num) => (
          <li key={num}>
            <Text>{t(`experiences.almoby.items.${num}`)}</Text>
          </li>
        ))}
      </ul>
      <TitleM className="mt-4">{t("experiences.macrointell.title")}</TitleM>
      <TitleS>{t("experiences.macrointell.date")}</TitleS>
      <ul className="flex flex-col gap-4 mt-4 ml-4">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <li key={num}>
            <Text>{t(`experiences.macrointell.items.${num}`)}</Text>
          </li>
        ))}
      </ul>
      <TitleM className="mt-4">{t("experiences.freelance.title")}</TitleM>
      <TitleS>{t("experiences.freelance.date")}</TitleS>
      <ul className="flex flex-col gap-4 mt-4 ml-4">
        {[1, 2].map((num) => (
          <li key={num}>
            <Text>{t(`experiences.freelance.items.${num}`)}</Text>
          </li>
        ))}
      </ul>
    </article>
  );
};
