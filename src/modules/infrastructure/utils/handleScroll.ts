export const handleScrollToSection = (section: string) => {
  const aboutSection = document.getElementById(section);
  if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
};
