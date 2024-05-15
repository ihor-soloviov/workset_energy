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
      { text: 'Unser Team', href: '/pv-anlagen#team' },
      { text: 'Kontakt', href: '/pv-anlagen#kontact' },
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
      { text: 'Unser Team', href: '/stromspeicher#team' },
      { text: 'Kontakt', href: '/stromspeicher#kontact' },
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
      { text: 'Unser Team', href: '/wallbox#team' },
      { text: 'Kontakt', href: '/wallbox#kontact' },
    ],
  },
  {
    href: '/uber-uns',
    text: 'Company',
    links: [
      { text: 'Über uns', href: '/uber-uns' },
      // { text: 'Karrier', href: '/karriere' },
      { text: 'Kontakt', href: '/uber-uns#kontact' },
    ],
  },
];
