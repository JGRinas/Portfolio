import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useTranslation } from "react-i18next";
import { HiArrowRight } from "react-icons/hi";
import { Project } from "~/modules/domain/projects";
import { ProjectTag } from "./ProjectTag";
import { ProjectImageSlider } from "./ProjectImageSlider";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal = ({
  project,
  onClose,
}: ProjectDetailModalProps) => {
  const { t } = useTranslation("common", { keyPrefix: "projects" });
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  useEffect(() => {
    if (project) setIsClosing(false);
  }, [project]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  if (!project) return null;

  const copy = t(`items.${project.id}`, { returnObjects: true }) as {
    title: string;
    description: string;
    longDescription: string;
    highlights?: string[];
  };

  const highlights = copy.highlights ?? [];

  return (
    <Modal
      isOpen={Boolean(project)}
      onRequestClose={handleClose}
      contentLabel={copy.title}
      className={`relative flex max-h-[90vh] w-full max-w-[95vw] flex-col overflow-hidden rounded-2xl border border-border-light bg-background-lightElevated shadow-cardLight dark:border-border-dark dark:bg-background-darkElevated dark:shadow-cardDark md:max-w-4xl lg:max-w-5xl transition-transform ${
        isClosing ? "animate-fadeOutScale" : "animate-fadeInScale"
      } motion-reduce:transition-none`}
      overlayClassName={`fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-0 sm:items-center sm:p-4 transition-opacity ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      shouldCloseOnOverlayClick
    >
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-border-light bg-background-lightElevated/95 px-4 py-3 backdrop-blur-sm dark:border-border-dark dark:bg-background-darkElevated/95 sm:px-5">
          <h2 className="text-lg font-bold text-text-lightPrimary dark:text-text-darkPrimary sm:text-xl">
            {copy.title}
          </h2>
          <button
            type="button"
            onClick={handleClose}
            aria-label={t("closeModal")}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-text-lightSecondary transition-colors hover:text-accent-blue dark:text-text-darkSecondary dark:hover:text-accent-blue"
          >
            ✕
          </button>
        </div>

        <div className="space-y-5 p-4 sm:p-5">
          <ProjectImageSlider images={project.images} alt={copy.title} />

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <ProjectTag key={tech} label={tech} />
            ))}
          </div>

          <p className="text-sm leading-relaxed text-text-lightSecondary dark:text-text-darkSecondary sm:text-base">
            {copy.longDescription || copy.description}
          </p>

          {highlights.length > 0 && (
            <div>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent-blue">
                {t("highlightsTitle")}
              </h3>
              <ul className="space-y-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-text-lightSecondary dark:text-text-darkSecondary"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-violet"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-3 pt-1">
            {project.page && (
              <a
                href={project.page}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-gradient-accent px-4 py-2 text-sm font-semibold text-white shadow-glowBlue transition-opacity hover:opacity-90"
              >
                {t("viewProject")}
                <HiArrowRight size={14} aria-hidden="true" />
              </a>
            )}
            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-border-light px-4 py-2 text-sm font-semibold text-text-lightPrimary transition-colors hover:border-accent-blue hover:text-accent-blue dark:border-border-dark dark:text-text-darkPrimary dark:hover:border-accent-blue dark:hover:text-accent-blue"
              >
                {t("viewRepository")}
                <HiArrowRight size={14} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};
