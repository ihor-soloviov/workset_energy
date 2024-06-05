import InstIcon from '/public/icons/instagram.svg';
import FacebookIcon from '/public/icons/facebook.svg';
import YoutubeIcon from '/public/icons/youtube.svg';

type SocialLinkItem = {
  href: string;
  ariaLabel: string;
  icon: React.ElementType;
};

export const socialLinkItems: SocialLinkItem[] = [
  {
    href: 'https://www.instagram.com/workset.energy/',
    ariaLabel: 'instagram',
    icon: InstIcon,
  },
  {
    href: 'https://www.facebook.com/profile.php?id=100090207079736',
    ariaLabel: 'facebook',
    icon: FacebookIcon,
  },
  {
    href: 'https://www.youtube.com/@WorkSETEnergy',
    ariaLabel: 'youtube',
    icon: YoutubeIcon,
  },
];
