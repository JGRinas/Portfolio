import { Project } from "~/modules/domain/projects";

import Almotick1 from "~/assets/images/projects/almotick/1.webp";
import PassLp1 from "~/assets/images/projects/passlp/1.webp";

import AgroCarteira1 from "~/assets/images/projects/agrocarteira/1.webp";
import AgroCarteira2 from "~/assets/images/projects/agrocarteira/2.webp";
import TodoAgro1 from "~/assets/images/projects/todoagro/1.webp";
import AgroNative1 from "~/assets/images/projects/agronative/1.webp";
import MacroIntell1 from "~/assets/images/projects/macrointell-app/1.webp";
import MacroIntell2 from "~/assets/images/projects/macrointell-app/2.webp";
import Gillette1 from "~/assets/images/projects/gillette/1.webp";
import Gillette2 from "~/assets/images/projects/gillette/2.webp";
import Gillette3 from "~/assets/images/projects/gillette/3.webp";
import AnaVir1 from "~/assets/images/projects/ana-vir/1.webp";
import AnaVir2 from "~/assets/images/projects/ana-vir/2.webp";
import Posmart1 from "~/assets/images/projects/posmart/1.webp";
import Posmart2 from "~/assets/images/projects/posmart/2.webp";
import GymApp1 from "~/assets/images/projects/gymapp/1.webp";
import GymApp2 from "~/assets/images/projects/gymapp/2.webp";
import GymApp3 from "~/assets/images/projects/gymapp/3.webp";
import GymApp4 from "~/assets/images/projects/gymapp/4.webp";

import SpaceShip1 from "~/assets/images/projects/spaceship/image1.webp";
import SpaceShip2 from "~/assets/images/projects/spaceship/image2.webp";
import SpaceShip3 from "~/assets/images/projects/spaceship/image3.webp";
import BluLight1 from "~/assets/images/projects/blulight/1.webp";
import BluLight2 from "~/assets/images/projects/blulight/2.webp";
import BluLight3 from "~/assets/images/projects/blulight/3.webp";
import FileTable2 from "~/assets/images/projects/filetable/image2.webp";
import FileTable3 from "~/assets/images/projects/filetable/image3.webp";
import FileTable4 from "~/assets/images/projects/filetable/image4.webp";

const HRE_IMAGE =
  "https://res.cloudinary.com/dca4jaeix/image/upload/fl_preserve_transparency/v1742305421/b76f2dbc-b2e9-4f99-8ae8-4d39cc1b667f.jpg?_s=public-apps";

const VISOR_TV_IMAGE =
  "https://res.cloudinary.com/dca4jaeix/image/upload/fl_preserve_transparency/v1742305555/0a00c867-ef3b-4a6d-8019-9e5fd1cea371.jpg?_s=public-apps";

export const projects: Project[] = [
  {
    id: "almotick",
    type: "featured",
    images: [Almotick1],
    technologies: ["React", "Python", "AWS", "Cloudflare", "MongoDB"],
    page: "https://almotick.com",
  },
  {
    id: "hre",
    type: "featured",
    images: [HRE_IMAGE],
    technologies: ["React", "Python", "AWS", "Cloudflare", "PostgreSQL"],
    page: "https://hre.com.ar",
  },
  {
    id: "passlp",
    type: "featured",
    images: [PassLp1],
    technologies: ["React", "Nest", "AWS", "Cloudflare", "MongoDB"],
    page: "https://passlp.com/",
  },
  {
    id: "agrocarteira",
    type: "secondary",
    images: [AgroCarteira1, AgroCarteira2],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase",
      "App Store",
      "Play Store",
      "Clean Architecture",
      "Screaming Architecture",
    ],
  },
  {
    id: "todoagro",
    type: "secondary",
    images: [TodoAgro1],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Firebase",
      "App Store",
      "Play Store",
      "Clean Architecture",
      "Screaming Architecture",
    ],
  },
  {
    id: "agronative",
    type: "secondary",
    images: [AgroNative1],
    technologies: [
      "React Native",
      "TypeScript",
      "npm private packages",
      "Design System",
    ],
  },
  {
    id: "macrointell",
    type: "secondary",
    images: [MacroIntell1, MacroIntell2],
    technologies: [
      "React Native",
      "TypeScript",
      "Mobile Development",
      "Mentoring",
    ],
  },
  {
    id: "gillette",
    type: "secondary",
    images: [Gillette1, Gillette2, Gillette3],
    technologies: [
      "Electron",
      "HTML",
      "CSS",
      "JavaScript",
      "ml5",
      "FaceMesh",
      "Offline ML",
    ],
  },
  {
    id: "anavir",
    type: "secondary",
    images: [AnaVir1, AnaVir2],
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Node.js",
      "Express",
      "Railway",
      "Cloudflare",
    ],
  },
  {
    id: "posmart",
    type: "secondary",
    images: [Posmart1, Posmart2],
    technologies: [
      "Node.js",
      "Express",
      "TypeScript",
      "WhatsApp API",
      "Meta Business",
      "Whisper",
      "GPT",
      "AWS",
      "Railway",
      "Cloudflare",
    ],
  },
  {
    id: "gymapp",
    type: "secondary",
    images: [GymApp1, GymApp2, GymApp3, GymApp4],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Express",
      "Figma",
      "Trello",
      "Database Design",
    ],
    repository: "https://github.com/JGRinas/GymApp",
  },
  {
    id: "visortv",
    type: "secondary",
    images: [VISOR_TV_IMAGE],
    technologies: ["React", "TypeScript", "AWS"],
    repository: "https://github.com/JGRinas/VisorTV-Front",
  },
  {
    id: "spaceship",
    type: "early",
    year: "2020",
    images: [SpaceShip1, SpaceShip2, SpaceShip3],
    technologies: ["C++", "OOP", "Game Development"],
    repository: "https://github.com/JGRinas/SpaceShip/blob/main/SpaceShip.cpp",
  },
  {
    id: "blulight",
    type: "early",
    year: "2021",
    images: [BluLight1, BluLight2, BluLight3],
    technologies: [
      "C#",
      "WinForms",
      "Entity Framework",
      "SQL Server",
      "Relational Database",
    ],
    repository:
      "https://github.com/JGRinas/BluLight-ProyectoTaller2/tree/main/CapaPresentacion",
  },
  {
    id: "filetable",
    type: "early",
    year: "2021",
    images: [FileTable2, FileTable3, FileTable4],
    technologies: ["C#", "WinForms", "SQL Server", "FileTable", "HierarchyID"],
    repository: "https://github.com/JGRinas/Galeria-con-FileTable-SQL-Server",
  },
];

export const featuredProjects = projects.filter((p) => p.type === "featured");

export const secondaryProjects = projects.filter((p) => p.type === "secondary");

export const earlyProjects = projects.filter((p) => p.type === "early");

export const getProjectById = (id: string): Project | undefined =>
  projects.find((p) => p.id === id);

export const getProjectCover = (project: Project): string | undefined =>
  project.images[0];
