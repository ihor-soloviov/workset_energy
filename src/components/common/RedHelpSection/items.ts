import Email from '/public/icons/emailIconWhite.svg';
import Phone from '/public/icons/phoneIconWhite.svg';
import Navigator from '/public/icons/navIconWhite.svg';
import InstIcon from '/public/icons/instagram.svg';
import FacebookIcon from '/public/icons/facebook.svg';
import YoutubeIcon from '/public/icons/youtube.svg';
import { RedHelp } from '@/types/infoTypes';

export const items: RedHelp[] = [
  {
    icon: Email,
    title: 'Per E-Mail',
    text: 'Unser freundliches Support-Team beantwortet gern deine Fragen!',
    href: {
      linkTo: 'mailto:service@work-set.eu',
      title: 'service@work-set.eu',
    },
  },
  {
    icon: Phone,
    title: 'Per Telefon',
    text: 'Auch telefonisch stehen wir dir mit Rede und Antwort zur Verfügung',
    href: {
      linkTo: 'tel:+4973114613210',
      title: '+49 73 114 613 210',
    },
  },
  {
    icon: Navigator,
    title: 'Über die sozialen Netzwerke',
    text: 'Verpasse nicht unsere neuesten Nachrichten und Angebote!',
    arrayOfLinks: [
      {
        icon: InstIcon,
        linkTo: 'https://www.instagram.com/workset.energy/',
      },
      {
        icon: FacebookIcon,
        linkTo: 'https://www.facebook.com/profile.php?id=100090207079736',
      },
      {
        icon: YoutubeIcon,
        linkTo: 'https://www.youtube.com/@WorkSETEnergy',
      },
    ],
  },
];
