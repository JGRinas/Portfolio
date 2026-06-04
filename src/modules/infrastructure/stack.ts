export const STACK_CATEGORIES = [
  {
    id: "frontend",
    items: [
      "react",
      "nextjs",
      "typescript",
      "tailwindcss",
      "vite",
      "angular",
      "vuejs",
    ],
  },
  {
    id: "backend",
    items: ["nodejs", "express", "python", "php", "nestjs"],
  },
  {
    id: "mobile",
    items: ["reactNative", "expo", "kotlin", "swift"],
  },
  {
    id: "database",
    items: [
      "mongodb",
      "mysql",
      "postgresql",
      "firebase",
      "couchdb",
      "watermelondb",
    ],
  },
  {
    id: "devOps",
    items: [
      "aws",
      "docker",
      "cloudflare",
      "githubActions",
      "railway",
      "ecr",
      "ecs",
      "s3",
    ],
  },
  {
    id: "tools",
    items: ["git", "figma", "postman", "jest", "testingLibrary"],
  },
] as const;

export type StackItemKey =
  (typeof STACK_CATEGORIES)[number]["items"][number];

export const NANDEXA_URL = "https://nandexa.com/";
export const CONTACT_EMAIL = "juangabrielrinas@gmail.com";
export const GITHUB_URL = "https://github.com/JGRinas";
export const LINKEDIN_URL = "https://www.linkedin.com/in/juangabrielrinas/";
