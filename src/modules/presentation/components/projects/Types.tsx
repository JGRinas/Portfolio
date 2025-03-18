import { useTranslation } from "react-i18next";
import { TitleL } from "../../styled/ui/Text";
import { MobileType, ProjectType } from "~/modules/domain/projects";

const projectType = ["back", "front", "mobile", "design"];
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

  return (
    <section className="flex mt-4 justify-around">
      {(isMobile ? mobileType : projectType).map((type) => (
        <TitleL
          key={type}
          className="cursor-pointer"
          style={{
            color: selectedType === type ? "#000" : "#aaa",
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
