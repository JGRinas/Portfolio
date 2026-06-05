export type ProjectType = "featured" | "secondary";

export interface Project {
  id: string;
  type: ProjectType;
  images: string[];
  technologies: string[];
  page?: string;
  repository?: string;
}

export interface ProjectCopy {
  title: string;
  description: string;
  longDescription: string;
  highlights?: string[];
  subtitle?: string;
}

/** @deprecated Use Project */
export type FeaturedProject = Project;

/** @deprecated Use Project */
export type SecondaryProject = Project;
