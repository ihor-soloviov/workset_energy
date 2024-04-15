import { StaticImageData } from 'next/image';
import product1Mob from '/public/images/home-page/product-1-mob.jpg';
import product2Mob from '/public/images/home-page/product-2-mob.jpg';
import product3Mob from '/public/images/home-page/product-3-mob.jpg';
import product1Desk from '/public/images/home-page/product-1-desk.jpg';
import product2Desk from '/public/images/home-page/product-2-desk.jpg';
import product3Desk from '/public/images/home-page/product-3-desk.jpg';

type ProductItem = {
  title: string;
  text: string;
  imgMob: StaticImageData;
  imgDesc: StaticImageData;
  href: string;
};

export const productsItems: ProductItem[] = [
  {
    imgMob: product1Mob,
    imgDesc: product1Desk,
    href: '/pv-anlagen',
    text: 'Sie wandelt Sonnenlicht in Strom um und ist daher eine nachhaltige und umweltfreundliche Energiequelle.',
    title: 'PV-Anlagen',
  },
  {
    imgMob: product2Mob,
    imgDesc: product2Desk,
    href: '/stormspeicher',
    text: 'Eine zuverlässige Resrve, die überschüssigen Strom für den künftigen Verbrauch speichert.',
    title: 'Stormspeicher',
  },
  {
    imgMob: product3Mob,
    imgDesc: product3Desk,
    href: '/wallbox',
    text: 'Ein hochmodernes Ladesystem für Elektrofahrzeuge, das bequeme und effiziente Betankungsmöglichkeiten bietet.',
    title: 'Wallbox',
  },
];
