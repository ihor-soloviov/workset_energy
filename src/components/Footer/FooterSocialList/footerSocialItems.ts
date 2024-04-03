import InstIcon from '/public/icons/instagram.svg';
import FacebookIcon from '/public/icons/facebook.svg';
import YoutubeIcon from '/public/icons/youtube.svg';
import TikTokIcon from '/public/icons/tiktok.svg';

type SocialLinkItem = {
  href: string;
  icon: React.ElementType;
};

export const socialLinkItems: SocialLinkItem[] = [
  { href: 'https://www.instagram.com/workset.energy/', icon: InstIcon },
  {
    href: 'https://www.facebook.com/profile.php?id=100090207079736',
    icon: FacebookIcon,
  },
  { href: 'https://www.youtube.com/@WorkSETEnergy', icon: YoutubeIcon },
  {
    href: 'https://www.tiktok.com/@caplicon/video/6959087922247191810',
    icon: TikTokIcon,
  },
];
