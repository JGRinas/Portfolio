/**
 * URL canónica del portfolio.
 * Actualizar VITE_SITE_URL en .env antes del deploy (ver .env.example).
 */
export const SITE_URL =
  import.meta.env.VITE_SITE_URL ?? "https://juangabrielrinas.com";

export const SITE_NAME = "Juan Gabriel Benitez Rinas";

export const SITE_TITLE =
  "Juan Gabriel Benitez Rinas | Full-Stack & Mobile Developer";

export const SITE_DESCRIPTION =
  "Portfolio de Juan Gabriel Benitez Rinas, desarrollador Full-Stack y Mobile especializado en React, React Native, TypeScript, Node.js, NestJS y AWS.";

export const SITE_KEYWORDS =
  "Juan Gabriel Rinas, Juan Gabriel Benitez Rinas, Full-Stack Developer, Mobile Developer, React, React Native, TypeScript, Node.js, NestJS, AWS, Portfolio";

export const THEME_COLOR_DARK = "#030712";

export const OG_IMAGE_PATH = "/og-image.svg";

export const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Juan Gabriel Benitez Rinas",
  alternateName: "Juan Gabriel Rinas",
  jobTitle: "Full-Stack & Mobile Developer",
  email: "juangabrielrinas@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Corrientes",
    addressCountry: "AR",
  },
  knowsAbout: [
    "React",
    "React Native",
    "TypeScript",
    "Node.js",
    "NestJS",
    "AWS",
    "Mobile Development",
    "Full-Stack Development",
  ],
  sameAs: [
    "https://www.linkedin.com/in/juangabrielrinas/",
    "https://github.com/JGRinas",
    "https://nandexa.com/",
  ],
} as const;
