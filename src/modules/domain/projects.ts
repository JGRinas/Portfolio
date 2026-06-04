export interface FeaturedProject {
  id: string;
  image: string;
  technologies: string[];
  page?: string;
  repository?: string;
}

export interface SecondaryProject {
  id: string;
  image?: string;
  technologies?: string[];
  page?: string;
  repository?: string;
  icon?: "postman" | "figma";
}

export interface ProjectCopy {
  title: string;
  description?: string;
  subtitle?: string;
}
