import { TitleL, TitleM, TitleS } from "../../styled/ui/Text";
import { Button } from "../../styled/ui/Buttons";
import { useTranslation } from "react-i18next";
import CV from "../../../../assets/documents/CV-JuanGabrielBenitezRinas.pdf";

export const Studies = () => {
  const { t } = useTranslation("common", { keyPrefix: "studies" });
  return (
    <article className="flex items-end justify-between mb-4">
      <ul className="flex flex-col gap-4 mt-4">
        <li>
          <TitleL>{t("title")}</TitleL>
          <TitleM>{t("analist.title")}</TitleM>
          <TitleS>{t("analist.date")}</TitleS>
        </li>
      </ul>
      <a href={CV} download>
        <Button variant="outline" className="mt-4">
          {t("downloadCv")}
        </Button>
      </a>
    </article>
  );
};
