export const scrollToContact = () => {
  const teamSection = document.getElementById('contact');
  teamSection && teamSection.scrollIntoView({ behavior: 'smooth' });
};
