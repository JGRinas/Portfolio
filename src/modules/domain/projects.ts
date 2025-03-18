export type ProjectType = "back" | "front" | "mobile" | "design";
export type MobileType = "android" | "ios";

export interface ProjectItem {
  title: string;
  description: string;
  technologies?: string[];
  repository?: string;
  page?: string;
  image: string;
}
