import AlmotickImage from "~/assets/images/projects/almotick.png";
import PassLpImage from "~/assets/images/projects/passlp.png";
import { FeaturedProject, SecondaryProject } from "~/modules/domain/projects";

export const featuredProjects: FeaturedProject[] = [
  {
    id: "almotick",
    image: AlmotickImage,
    technologies: ["React", "Python", "AWS", "Cloudflare", "MongoDB"],
    page: "https://almotick.com",
  },
  {
    id: "hre",
    image:
      "https://res.cloudinary.com/dca4jaeix/image/upload/fl_preserve_transparency/v1742305421/b76f2dbc-b2e9-4f99-8ae8-4d39cc1b667f.jpg?_s=public-apps",
    technologies: ["React", "Python", "AWS", "Cloudflare", "PostgreSQL"],
    page: "https://hre.com.ar",
  },
  {
    id: "passlp",
    image: PassLpImage,
    technologies: ["React", "Nest", "AWS", "Cloudflare", "MongoDB"],
    page: "https://passlp.com/",
  },
];

export const secondaryProjects: SecondaryProject[] = [
  {
    id: "visortv",
    technologies: ["React", "TypeScript", "Vercel"],
    repository: "https://github.com/JGRinas/VisorTV-Front",
  },
  { id: "anavir", technologies: ["Figma", "React", "Node.js", "Cloudflare"] },
  { id: "posmart", technologies: ["React", "Node.js", "Railway", "AWS"] },
  { id: "gillette", technologies: ["Electron"] },
  {
    id: "todoagro",
    technologies: ["React Native", "TypeScript", "Expo", "Firebase"],
  },
  { id: "agrocarteira", technologies: ["React Native", "Expo", "TypeScript"] },
  { id: "derecho", technologies: ["React", "Next.js"] },
  { id: "figma", icon: "figma" },
];
