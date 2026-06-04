import { useTranslation } from "react-i18next";
import { FaDownload } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import CV from "~/assets/documents/CV-JuanGabrielBenitezRinas.pdf";
import {
  GithubIcon,
  GitlabIcon,
  LinkedinIcon,
} from "~/assets/icons";
import { handleScrollToSection } from "~/modules/infrastructure/utils/handleScroll";
import { HeroPhoto } from "./HeroPhoto";
import { HeroStats } from "./HeroStats";

const LINKEDIN_URL = "https://www.linkedin.com/in/juangabrielrinas/";

const SOCIAL_LINKS = [
  { href: "https://github.com/JGRinas", Icon: GithubIcon, label: "GitHub" },
  {
    href: "https://gitlab.com/juangabrielrinas1",
    Icon: GitlabIcon,
    label: "GitLab",
  },
  { href: LINKEDIN_URL, Icon: LinkedinIcon, label: "LinkedIn" },
] as const;

const fadeUpClass =
  "animate-fadeUp motion-reduce:animate-none opacity-0 [animation-fill-mode:forwards]";

export const Presentation = () => {
  const { t } = useTranslation("common", { keyPrefix: "presentation" });

  return (
    <section className="relative overflow-hidden bg-background-light bg-hero-gradient-light dark:bg-background-dark dark:bg-hero-gradient-dark">
      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span
              className={`mb-5 inline-flex items-center gap-2 rounded-full border border-border-light bg-background-lightElevated/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-text-lightSecondary backdrop-blur-sm dark:border-border-dark dark:bg-background-darkElevated/80 dark:text-text-darkSecondary sm:text-xs ${fadeUpClass}`}
            >
              <span
                className="h-2 w-2 rounded-full bg-accent-green"
                aria-hidden="true"
              />
              {t("badge")}
            </span>

            <h1
              className={`text-4xl font-bold leading-tight text-text-lightPrimary dark:text-text-darkPrimary sm:text-5xl md:text-6xl ${fadeUpClass} [animation-delay:100ms]`}
            >
              Juan Gabriel
              <br />
              Benitez{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                Rinas
              </span>
            </h1>

            <p
              className={`mt-5 max-w-xl text-base leading-relaxed text-text-lightSecondary dark:text-text-darkSecondary sm:text-lg ${fadeUpClass} [animation-delay:200ms]`}
            >
              {t("desc")}
            </p>

            <div
              className={`mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start ${fadeUpClass} [animation-delay:300ms]`}
            >
              <button
                type="button"
                onClick={() => handleScrollToSection("projects")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-white shadow-glowBlue transition-opacity hover:opacity-90"
              >
                {t("btnProjects")}
                <HiArrowRight size={18} aria-hidden="true" />
              </button>

              <a
                href={CV}
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border-light bg-background-lightElevated/80 px-6 py-3 text-sm font-semibold text-text-lightPrimary backdrop-blur-sm transition-colors hover:border-accent-blue hover:text-accent-blue dark:border-border-dark dark:bg-background-darkElevated/80 dark:text-text-darkPrimary dark:hover:border-accent-blue dark:hover:text-accent-blue"
              >
                <FaDownload size={14} aria-hidden="true" />
                {t("btnCv")}
              </a>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border-light bg-background-lightElevated/80 px-6 py-3 text-sm font-semibold text-text-lightPrimary backdrop-blur-sm transition-colors hover:border-accent-blue hover:text-accent-blue dark:border-border-dark dark:bg-background-darkElevated/80 dark:text-text-darkPrimary dark:hover:border-accent-blue dark:hover:text-accent-blue"
              >
                <LinkedinIcon width={16} height={16} aria-hidden="true" />
                {t("btnLinkedin")}
              </a>
            </div>

            <div
              className={`mt-8 flex items-center gap-4 ${fadeUpClass} [animation-delay:400ms]`}
            >
              {SOCIAL_LINKS.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-text-lightSecondary transition-colors hover:text-accent-blue dark:text-text-darkSecondary dark:hover:text-accent-blue [&_svg]:fill-current"
                >
                  <Icon width={22} height={22} />
                </a>
              ))}
            </div>
          </div>

          <div className="order-first lg:order-none">
            <HeroPhoto />
          </div>
        </div>

        <HeroStats />
      </div>
    </section>
  );
};
