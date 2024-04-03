import { StaticImageData } from 'next/image';
import pvAnlagenImgMob from '/public/images/home-page/pv-anlagen-mob.jpg';
import stromspeicherImgMob from '/public/images/home-page/stromspeicher-mob.jpg';
import walaboxImgMob from '/public/images/home-page/wallbox-mob.jpg';
import pvAnlagenImgDesc from '/public/images/home-page/pv-anlagen-desc.jpg';
import stromspeicherImgDesc from '/public/images/home-page/stromspeicher-desc.jpg';
import walaboxImgDesc from '/public/images/home-page/wallbox-desc.jpg';

type ProductItem = {
  title: string;
  text: string;
  imgMob: StaticImageData;
  imgDesc: StaticImageData;
  href: string;
};

export const productsItems: ProductItem[] = [
  {
    imgMob: pvAnlagenImgMob,
    imgDesc: pvAnlagenImgDesc,
    href: '/pv-anlagen',
    text: 'Sie wandelt Sonnenlicht in Strom um und ist daher eine nachhaltige und umweltfreundliche Energiequelle.',
    title: 'PV-Anlagen',
  },
  {
    imgMob: stromspeicherImgMob,
    imgDesc: stromspeicherImgDesc,
    href: '/stormspeicher',
    text: 'Eine zuverlässige Resrve, die überschüssigen Strom für den künftigen Verbrauch speichert.',
    title: 'Stormspeicher',
  },
  {
    imgMob: walaboxImgMob,
    imgDesc: walaboxImgDesc,
    href: '/wallbox',
    text: 'Ein hochmodernes Ladesystem für Elektrofahrzeuge, das bequeme und effiziente Betankungsmöglichkeiten bietet.',
    title: 'Wallbox',
  },
];
