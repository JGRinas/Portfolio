import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { t } = useTranslation("common", { keyPrefix: "projects" });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <button
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center transition-opacity ${
        inView ? "opacity-100" : "opacity-0"
      } px-4 md:px-0 cursor-default`}
      onClick={onClose}
    >
      <button
        ref={ref}
        className={`relative bg-white rounded-2xl shadow-lg max-w-[1000px] w-full md:w-auto p-8 px-4 md:p-12 transition-transform ${
          inView ? "scale-100" : "scale-50"
        } scrollbar-hide cursor-default`}
        style={{
          maxHeight: "95vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="w-full h-80 flex justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
        <h2 className="text-2xl font-bold mt-4 text-center">
          {t(project.title)}
        </h2>
        <p className="text-gray-700 mt-2 text-center">
          {t(project.description)}
        </p>
      </button>
    </button>,
    document.body
  );
};
