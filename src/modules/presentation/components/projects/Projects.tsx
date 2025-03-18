import { useTranslation } from "react-i18next";
import { TitleL } from "../../styled/ui/Text";
import { ProjectTypes } from "./Types";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import { projects } from "~/modules/infrastructure/projects";
import { MobileType, ProjectType } from "~/modules/domain/projects";

export const Projects = () => {
  const { t } = useTranslation("common", { keyPrefix: "projects" });
  const [selectedType, setSelectedType] = useState<ProjectType>("back");
  const [selectedMobileType, setSelectedMobileType] =
    useState<MobileType>("ios");

  const handleTypeClick = (type: ProjectType) => setSelectedType(type);
  const handleMobileTypeClick = (type: MobileType) =>
    setSelectedMobileType(type);

  const selectedProjects = projects[selectedType];

  return (
    <section className="flex flex-col mt-8 justify-start w-[100%]">
      <TitleL>{t("title")}</TitleL>
      <ProjectTypes handleClick={handleTypeClick} selectedType={selectedType} />
      {/* {selectedType === "mobile" && (
        <ProjectTypes
          handleMobileClick={handleMobileTypeClick}
          selectedType={selectedMobileType}
          isMobile
        />
      )} */}
      <div className="flex justify-around mt-8">
        {selectedProjects.map((project) => (
          <ProjectCard key={project.title} {...project} onClick={() => {}} />
        ))}
      </div>
    </section>
  );
};
