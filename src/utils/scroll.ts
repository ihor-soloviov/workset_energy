export const scrollToSection = (section: string) => {
  const currentSection = document.getElementById(section);
  currentSection && currentSection.scrollIntoView({ behavior: 'smooth' });
};
