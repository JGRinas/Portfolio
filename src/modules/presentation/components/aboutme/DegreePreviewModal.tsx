import { useEffect, useState } from "react";
import Modal from "react-modal";
import { useTranslation } from "react-i18next";
import DegreePdf from "~/assets/documents/analist-degree.pdf";

interface DegreePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DegreePreviewModal = ({
  isOpen,
  onClose,
}: DegreePreviewModalProps) => {
  const { t } = useTranslation("common", { keyPrefix: "education" });
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#root");
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel={t("modalTitle")}
      className={`relative flex w-full max-w-[95vw] max-h-[90vh] flex-col overflow-hidden rounded-2xl border border-border-light bg-background-lightElevated p-4 shadow-cardLight dark:border-border-dark dark:bg-background-darkElevated dark:shadow-cardDark md:max-w-4xl md:p-6 transition-transform ${
        isClosing ? "animate-fadeOutScale" : "animate-fadeInScale"
      } motion-reduce:transition-none`}
      overlayClassName={`fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 transition-opacity ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      shouldCloseOnOverlayClick
    >
      <button
        type="button"
        onClick={handleClose}
        aria-label={t("closeModal")}
        className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-lg text-text-lightSecondary transition-colors hover:text-accent-blue dark:text-text-darkSecondary dark:hover:text-accent-blue"
      >
        ✕
      </button>

      <h2 className="mb-4 shrink-0 pr-8 text-lg font-bold text-text-lightPrimary dark:text-text-darkPrimary">
        {t("modalTitle")}
      </h2>

      <div className="min-h-0 flex-1 overflow-hidden rounded-lg border border-border-light dark:border-border-dark">
        <iframe
          src={DegreePdf}
          title={t("modalTitle")}
          className="h-[70vh] w-full bg-background-light dark:bg-background-dark"
        />
      </div>
    </Modal>
  );
};
