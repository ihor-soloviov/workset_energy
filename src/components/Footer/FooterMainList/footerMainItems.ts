type NavLink = { text: string; href: string };
type NavLinkItem = {
  href: string;
  text: string;
  links: Array<NavLink>;
};

export const navLinkItems: NavLinkItem[] = [
  {
    href: '',
    text: 'PV-System',
    links: [
      { text: 'PV-Anlage Vorteile', href: '' },
      { text: 'Verfügbare Tarifpläne', href: '' },
      { text: 'Unsere Mitarbeiter', href: '' },
      { text: 'Feedback', href: '' },
      { text: 'Unsere Team', href: '' },
      { text: 'Kontakt', href: '' },
    ],
  },
  {
    href: '',
    text: 'Stormspeicher',
    links: [
      { text: 'Stromspeicher Vorteile', href: '' },
      { text: 'Verfügbare Tarifpläne', href: '' },
      { text: 'Unsere Mitarbeiter', href: '' },
      { text: 'Feedback', href: '' },
      { text: 'Unsere Team', href: '' },
      { text: 'Kontakt', href: '' },
    ],
  },
  {
    href: '',
    text: 'Wallbox',
    links: [
      { text: 'Wallbox Vorteile', href: '' },
      { text: 'Verfügbare Tarifpläne', href: '' },
      { text: 'Unsere Mitarbeiter', href: '' },
      { text: 'Feedback', href: '' },
      { text: 'Unsere Team', href: '' },
      { text: 'Kontakt', href: '' },
    ],
  },
  {
    href: '',
    text: 'Company',
    links: [
      { text: 'Über uns', href: '' },
      { text: 'Karrier', href: '' },
      { text: 'Contact', href: '' },
    ],
  },
];
