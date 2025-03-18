import { TitleL, TitleM, TitleS } from "../../styled/ui/Text";
import { Button } from "../../styled/ui/Buttons";
import { useTranslation } from "react-i18next";
import CV from "../../../../assets/documents/CV-JuanGabrielBenitezRinas.pdf";

export const Studies = () => {
  const { t } = useTranslation("common", { keyPrefix: "studies" });
  return (
    <article className="flex justify-between mb-4 flex-col md:flex-row ">
      <TitleL>{t("title")}</TitleL>
      <ul className="flex flex-col gap-4 ml-2 mt-2">
        <li>
          <TitleM>{t("analist.title")}</TitleM>
          <TitleS>{t("analist.date")}</TitleS>
        </li>
      </ul>
      <a href={CV} download className="ml-2">
        <Button variant="outline" className="mt-2 md:mt-4">
          {t("downloadCv")}
        </Button>
      </a>
    </article>
  );
};
