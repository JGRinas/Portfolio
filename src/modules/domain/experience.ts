export interface ExperienceSubrole {
  role: string;
  date: string;
  summary: string;
  bullets: string[];
  technologies: string[];
}

export interface ExperienceItemData {
  company: string;
  role: string;
  employmentType: string;
  date: string;
  location: string;
  summary: string;
  bullets?: string[];
  technologies?: string[];
  subroles?: ExperienceSubrole[];
}
