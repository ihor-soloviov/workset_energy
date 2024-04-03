import MenuInstIcon from '/public/icons/instagram.svg';
import MenuFacebookIcon from '/public/icons/facebook.svg';
import MenuYoutubeIcon from '/public/icons/youtube.svg';

type SocialLinkItem = {
  href: string;
  icon: React.ElementType;
};

export const socialLinkItems: SocialLinkItem[] = [
  { href: 'https://www.instagram.com/workset.energy/', icon: MenuInstIcon },
  {
    href: 'https://www.facebook.com/profile.php?id=100090207079736',
    icon: MenuFacebookIcon,
  },
  { href: 'https://www.youtube.com/@WorkSETEnergy', icon: MenuYoutubeIcon },
];
