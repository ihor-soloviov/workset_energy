import { StaticImageData } from 'next/image';
import product1Mob from '/public/images/home-page/product-1-mob.webp';
import product2Mob from '/public/images/home-page/product-2-mob.webp';
import product3Mob from '/public/images/home-page/product-3-mob.webp';
import product1Desk from '/public/images/home-page/product-1-desk.jpg';
import product2Desk from '/public/images/home-page/product-2-desk.jpg';
import product3Desk from '/public/images/home-page/product-3-desk.jpg';

type ProductItem = {
  title: string;
  text: string;
  imgMob: StaticImageData;
  imgDesc: StaticImageData;
  href: string;
  className?: string;
};

export const productsItems: ProductItem[] = [
  {
    imgMob: product1Mob,
    imgDesc: product1Desk,
    href: '/pv-anlagen',
    text: 'Stell dir deine eigene Anlage zusammen oder verwende fertige Pakete für dein PV-Projekt',
    title: 'PV-Anlagen',
  },
  {
    imgMob: product2Mob,
    imgDesc: product2Desk,
    href: '/stromspeicher',
    text: 'Stromspeichergie mit dem Stromspeicher. Nutze die gespeicherte Energie, wenn es sich für dich lohnt oder verkaufe den Überschuss!',
    title: 'Stromspeicher',
  },
  {
    imgMob: product3Mob,
    imgDesc: product3Desk,
    href: '/wallbox',
    text: 'Lade dein Elektrofahrzeug bequem und schnell auf. Nutze die Wallbox für effizientes Laden zu jeder Zeit, indem du den Vorgang über dein Energiemanagementsystem steuerst',
    title: 'Wallbox',
    className: 'third',
  },
];
