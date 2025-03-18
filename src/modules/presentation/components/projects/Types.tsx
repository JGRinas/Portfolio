import { useTranslation } from "react-i18next";
import { TitleL } from "../../styled/ui/Text";
import { MobileType, ProjectType } from "~/modules/domain/projects";
import { useThemeContext } from "~/modules/infrastructure/hooks/useThemeContext";

const projectType = ["front", "back", "mobile", "design"];
const mobileType = ["ios", "android"];

export const ProjectTypes = ({
  handleClick,
  handleMobileClick,
  selectedType,
  isMobile,
}: {
  handleClick?: (type: ProjectType) => void;
  handleMobileClick?: (type: MobileType) => void;
  selectedType: string;
  isMobile?: boolean;
}) => {
  const { t } = useTranslation("common", { keyPrefix: "projects.projectType" });
  const { isDarkTheme } = useThemeContext();
  const getColor = (type: string) => {
    if (selectedType === type) return isDarkTheme ? "#fff" : "#000";
    return "#aaa";
  };
  return (
    <section className="flex mt-4 justify-around overflow-x-scroll gap-8 md:overflow-x-hidden">
      {(isMobile ? mobileType : projectType).map((type) => (
        <TitleL
          key={type}
          className="cursor-pointer whitespace-nowrap"
          style={{
            color: getColor(type),
          }}
          onClick={() => {
            if (handleMobileClick) return handleMobileClick(type as MobileType);
            if (handleClick) return handleClick(type as ProjectType);
          }}
        >
          {t(type)}
        </TitleL>
      ))}
    </section>
  );
};
