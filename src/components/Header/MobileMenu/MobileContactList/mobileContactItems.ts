type ContactLinkItem = {
  href?: string;
  text: string;
  title: string;
};

export const contactLinkItems: ContactLinkItem[] = [
  { text: 'Magirus-Deutz-Str, 1289077 Ulm', title: 'Address' },
  {
    href: 'mailto:service@work-set.eu',
    text: 'service@work-set.eu',
    title: 'E-mail',
  },
  {
    href: 'tel:+4973114613210',
    text: '+49-73-114-613-210',
    title: 'Telefonnummer',
  },
];
