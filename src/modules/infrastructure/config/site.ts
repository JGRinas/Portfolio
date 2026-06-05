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
  "Portfolio oficial de Juan Gabriel Benitez Rinas, también conocido como Juan Gabriel Rinas o JGRinas. Desarrollador Full-Stack y Mobile especializado en React, React Native, TypeScript, Node.js, NestJS y AWS.";

export const SITE_OG_DESCRIPTION =
  "Portfolio oficial de Juan Gabriel Rinas, desarrollador Full-Stack & Mobile especializado en React, React Native, TypeScript, Node.js, NestJS y AWS.";

export const THEME_COLOR_DARK = "#030712";

export const OG_IMAGE_PATH = "/og-image.svg";

export const PERSON_ALTERNATE_NAMES = [
  "Juan Gabriel Rinas",
  "Juan Rinas",
  "JG Rinas",
  "JGRinas",
  "juangabrielrinas",
  "Benitez Rinas",
] as const;

export const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Juan Gabriel Benitez Rinas",
  alternateName: [...PERSON_ALTERNATE_NAMES],
  url: "https://juangabrielrinas.com",
  jobTitle: "Full-Stack & Mobile Developer",
  email: "juangabrielrinas@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Corrientes",
    addressCountry: "Argentina",
  },
  sameAs: [
    "https://github.com/JGRinas",
    "https://www.linkedin.com/in/juangabrielrinas",
    "https://nandexa.com",
  ],
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
} as const;

export const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Juan Gabriel Benitez Rinas",
  alternateName: ["Juan Gabriel Rinas", "JGRinas", "juangabrielrinas"],
  url: "https://juangabrielrinas.com",
} as const;
