import { useTranslation } from "react-i18next";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight, HiExternalLink } from "react-icons/hi";
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  NANDEXA_URL,
} from "~/modules/infrastructure/stack";
import { FadeIn } from "../animations/fade-in";

const cardClass =
  "relative overflow-hidden rounded-2xl border border-border-light bg-background-lightElevated/80 p-6 shadow-cardLight backdrop-blur-sm dark:border-border-dark dark:bg-background-darkElevated/80 dark:shadow-cardDark md:p-8 lg:p-10";

export const ContactCta = () => {
  const { t } = useTranslation("common", { keyPrefix: "contactCta" });
  const mailto = `mailto:${CONTACT_EMAIL}`;

  return (
    <section id="contact" className="py-12 md:py-16">
      <FadeIn className="w-full">
        <article className={cardClass}>
          <div
            className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-glow-blue blur-3xl dark:bg-glow-violet"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 rounded-full bg-glow-violet blur-3xl opacity-60"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent-blue">
                {t("eyebrow")}
              </p>
              <h2 className="text-2xl font-bold leading-tight text-text-lightPrimary dark:text-text-darkPrimary md:text-3xl">
                {t("title")}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-text-lightSecondary dark:text-text-darkSecondary md:text-base">
                {t("description")}
              </p>
              <p className="mt-4 text-sm text-text-lightSecondary dark:text-text-darkSecondary">
                {t("nandexaPrefix")}{" "}
                <a
                  href={NANDEXA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent-blue transition-opacity hover:opacity-80"
                >
                  {t("nandexaName")}
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href={mailto}
                className="flex items-center gap-3 rounded-xl border border-border-light bg-background-light/60 px-4 py-3 transition-colors hover:border-accent-blue/40 dark:border-border-dark dark:bg-background-dark/40 dark:hover:border-accent-blue/40"
              >
                <FaEnvelope
                  className="shrink-0 text-accent-blue"
                  size={18}
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-text-lightPrimary dark:text-text-darkPrimary">
                  {CONTACT_EMAIL}
                </span>
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border-light bg-background-light/60 px-4 py-3 transition-colors hover:border-accent-blue/40 dark:border-border-dark dark:bg-background-dark/40 dark:hover:border-accent-blue/40"
              >
                <FaLinkedin
                  className="shrink-0 text-accent-blue"
                  size={18}
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-text-lightPrimary dark:text-text-darkPrimary">
                  {t("linkedin")}
                </span>
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border-light bg-background-light/60 px-4 py-3 transition-colors hover:border-accent-blue/40 dark:border-border-dark dark:bg-background-dark/40 dark:hover:border-accent-blue/40"
              >
                <FaGithub
                  className="shrink-0 text-text-lightPrimary dark:text-text-darkPrimary"
                  size={18}
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-text-lightPrimary dark:text-text-darkPrimary">
                  {t("github")}
                </span>
              </a>

              <a
                href={NANDEXA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border-light bg-background-light/60 px-4 py-3 transition-colors hover:border-accent-blue/40 dark:border-border-dark dark:bg-background-dark/40 dark:hover:border-accent-blue/40"
              >
                <HiExternalLink
                  className="shrink-0 text-accent-violet"
                  size={18}
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-text-lightPrimary dark:text-text-darkPrimary">
                  {t("nandexa")}
                </span>
              </a>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <a
                  href={mailto}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-white shadow-glowBlue transition-opacity hover:opacity-90"
                >
                  {t("sendMessage")}
                  <HiArrowRight size={16} aria-hidden="true" />
                </a>
                <a
                  href={NANDEXA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border-light px-6 py-3 text-sm font-semibold text-accent-blue transition-colors hover:border-accent-blue hover:bg-accent-blue/10 dark:border-border-dark"
                >
                  {t("visitNandexa")}
                  <HiExternalLink size={16} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </FadeIn>
    </section>
  );
};
