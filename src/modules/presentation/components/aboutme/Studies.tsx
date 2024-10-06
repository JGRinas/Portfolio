import { TitleL, TitleM, TitleS } from "../../styled/ui/Text";
import { Button } from "../../styled/ui/Buttons";
import { useTranslation } from "react-i18next";

export const Studies = () => {
  const { t } = useTranslation("common", { keyPrefix: "studies" });
  return (
    <article>
      <ul className="flex flex-col gap-4 mt-4">
        <li>
          <TitleL>{t("title")}</TitleL>
          <TitleM>{t("analist.title")}</TitleM>
          <TitleS>{t("analist.date")}</TitleS>
        </li>
      </ul>
      <Button variant="outline" className="mt-4">
        {t("downloadCv")}
      </Button>
    </article>
  );
};
