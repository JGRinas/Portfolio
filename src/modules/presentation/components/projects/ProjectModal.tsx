import Modal from "react-modal";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Text, Title } from "../../styled/components/Project";
import { useThemeContext } from "~/modules/infrastructure/hooks/useThemeContext";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const { t } = useTranslation("common", { keyPrefix: "projects" });
  const [isClosing, setIsClosing] = useState(false);
  const { isDarkTheme } = useThemeContext();
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  return (
    <Modal
      isOpen={!!project}
      onRequestClose={handleClose}
      className={`relative bg-white rounded-2xl shadow-lg w-full max-w-[90vw] md:max-w-[800px] p-6 md:p-8 overflow-y-auto max-h-[90vh] transition-transform transform ${
        isClosing ? "animate-fadeOutScale" : "animate-fadeInScale"
      } ${isDarkTheme ? "!bg-[#2e2929]" : "!bg-[#fff]"}`}
      overlayClassName={`fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center px-4 md:px-0 transition-opacity ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      shouldCloseOnOverlayClick={true}
    >
      <button
        className="absolute top-0 right-2 text-gray-600 hover:text-gray-900 text-2xl"
        onClick={handleClose}
      >
        ✕
      </button>

      <div className="w-full max-h-[60vh] flex justify-center overflow-hidden">
        <img
          src={project.image}
          alt={t(project.title)}
          className="w-full h-auto object-contain rounded-lg"
        />
      </div>

      <Title className="text-2xl font-bold mt-4 text-center">
        {t(project.title)}
      </Title>
      <Text className="text-gray-700 mt-2 text-center">
        {t(project.description)}
      </Text>
    </Modal>
  );
};
