import { useTranslation } from "react-i18next";
import { FaCode } from "react-icons/fa";
import { STACK_CATEGORIES } from "~/modules/infrastructure/stack";
import { FadeIn } from "../animations/fade-in";
import { StackIconItem } from "./StackIconItem";

const cardClass =
  "rounded-2xl border border-border-light bg-background-lightElevated/80 p-6 shadow-cardLight backdrop-blur-sm dark:border-border-dark dark:bg-background-darkElevated/80 dark:shadow-cardDark md:p-8";

export const TechStack = () => {
  const { t } = useTranslation("common", { keyPrefix: "stack" });

  return (
    <section id="stack" className="py-12 md:py-16">
      <FadeIn className="w-full">
        <article className={cardClass}>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-accent text-white shadow-glowViolet">
                <FaCode size={18} aria-hidden="true" />
              </div>
              <h2 className="text-xl font-bold text-text-lightPrimary dark:text-text-darkPrimary md:text-2xl">
                {t("title")}
              </h2>
            </div>
            <p className="text-sm text-text-lightSecondary dark:text-text-darkSecondary sm:text-right">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
            {STACK_CATEGORIES.map(({ id, items }) => (
              <div key={id} className="min-w-0">
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-accent-blue">
                  {t(`categories.${id}`)}
                </h3>
                <div className="flex flex-col gap-3">
                  {items.map((itemKey) => (
                    <StackIconItem key={itemKey} itemKey={itemKey} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>
      </FadeIn>
    </section>
  );
};
