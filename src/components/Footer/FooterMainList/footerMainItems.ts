type NavLink = { text: string; href: string };
type NavLinkItem = {
  href: string;
  text: string;
  links: Array<NavLink>;
};

export const navLinkItems: NavLinkItem[] = [
  {
    href: '/pv-anlagen',
    text: 'PV-Anlagen',
    links: [
      { text: 'PV-Anlage Vorteile', href: '/pv-anlagen#pv-vorteile' },
      { text: 'Verfügbare Tarifpläne', href: '/pv-anlagen#tarifpläne' },
      { text: 'Unsere Mitarbeiter', href: '/pv-anlagen#mitarbeiter' },
      { text: 'Feedback', href: '/pv-anlagen#feedback' },
      { text: 'Unsere Team', href: '/pv-anlagen#team-section' },
      { text: 'Kontakt', href: '/pv-anlagen#contact' },
    ],
  },
  {
    href: '/stromspeicher',
    text: 'Stromspeicher',
    links: [
      { text: 'Stromspeicher Vorteile', href: '/stromspeicher#strom-vorteile' },
      { text: 'Verfügbare Tarifpläne', href: '/stromspeicher#tarifpläne' },
      { text: 'Unsere Mitarbeiter', href: '/stromspeicher#mitarbeiter' },
      { text: 'Feedback', href: '/stromspeicher#feedback' },
      { text: 'Unsere Team', href: '/stromspeicher#team-section' },
      { text: 'Kontakt', href: '/stromspeicher#contact' },
    ],
  },
  {
    href: '/wallbox',
    text: 'Wallbox',
    links: [
      { text: 'Wallbox Vorteile', href: '/wallbox#wallbox-vorteile' },
      { text: 'Verfügbare Tarifpläne', href: '/wallbox#tarifpläne' },
      { text: 'Unsere Mitarbeiter', href: '/wallbox#mitarbeiter' },
      { text: 'Feedback', href: '/wallbox#feedback' },
      { text: 'Unsere Team', href: '/wallbox#team-section' },
      { text: 'Kontakt', href: '/wallbox#contact' },
    ],
  },
  {
    href: '/uber-uns',
    text: 'Company',
    links: [
      { text: 'Über uns', href: '/uber-uns' },
      // { text: 'Karrier', href: '/karriere' },
      { text: 'Contact', href: '/uber-uns#contact' },
    ],
  },
];
