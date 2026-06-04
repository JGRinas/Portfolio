const CAREER_START = new Date(2022, 3, 1);

export const getYearsOfExperience = (): number => {
  const now = new Date();
  let years = now.getFullYear() - CAREER_START.getFullYear();
  const monthDiff = now.getMonth() - CAREER_START.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && now.getDate() < CAREER_START.getDate())
  ) {
    years -= 1;
  }

  return Math.max(0, years);
};

export const getYearsOfExperienceLabel = (): string =>
  `${getYearsOfExperience()}+`;
