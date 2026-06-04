import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaGraduationCap, FaStar } from "react-icons/fa";
import { DegreePreviewModal } from "./DegreePreviewModal";

const cardClass =
  "rounded-xl border border-border-light bg-accent-blue/5 p-4 dark:border-border-dark dark:bg-accent-blue/5";

export const EducationCard = () => {
  const { t } = useTranslation("common", { keyPrefix: "education" });
  const { t: tAbout } = useTranslation("common", { keyPrefix: "aboutMe" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={cardClass}>
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue">
            <FaGraduationCap size={16} aria-hidden="true" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-text-lightPrimary dark:text-text-darkPrimary">
              {t("degree")}
            </p>
            <p className="text-xs text-text-lightSecondary dark:text-text-darkSecondary">
              {t("institution")} · {t("date")}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-text-lightSecondary dark:text-text-darkSecondary">
              {t("desc")}
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="mt-3 text-xs font-semibold text-accent-blue transition-opacity hover:opacity-80"
            >
              {t("viewDegree")} →
            </button>
          </div>
        </div>
      </div>

      <div className={`${cardClass} mt-3`}>
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-blue/10 text-accent-blue">
            <FaStar size={14} aria-hidden="true" />
          </div>
          <p className="text-sm text-text-lightSecondary dark:text-text-darkSecondary">
            {tAbout("passion")}
          </p>
        </div>
      </div>

      <DegreePreviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};
