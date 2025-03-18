import { useTranslation } from "react-i18next";
import { TitleL } from "../../styled/ui/Text";
import { ProjectTypes } from "./Types";
import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import { projects } from "~/modules/infrastructure/projects";
import { ProjectType } from "~/modules/domain/projects";
import { ProjectModal } from "./ProjectModal";
import { FadeIn } from "../animations/fade-in";

export const Projects = () => {
  const { t } = useTranslation("common", { keyPrefix: "projects" });
  const [selectedType, setSelectedType] = useState<ProjectType>("front");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleTypeClick = (type: ProjectType) => setSelectedType(type);
  const handleOpenModal = (project: any) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  const selectedProjects = projects[selectedType];

  return (
    <>
      <section className="flex flex-col mt-8 justify-start w-[100%]">
        <TitleL>{t("title")}</TitleL>
        <ProjectTypes
          handleClick={handleTypeClick}
          selectedType={selectedType}
        />

        <div className="flex justify-around mt-8">
          {selectedProjects.map((project) => (
            <FadeIn key={project.title}>
              <ProjectCard
                {...project}
                onClick={() => handleOpenModal(project)}
              />
            </FadeIn>
          ))}
        </div>
      </section>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </>
  );
};
