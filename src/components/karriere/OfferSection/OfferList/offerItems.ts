import { StaticImageData } from 'next/image';
import Offer1Mob from '/public/images/karriere-page/offer-1-mob.webp';
import Offer2Mob from '/public/images/karriere-page/offer-2-mob.webp';
import Offer3Mob from '/public/images/karriere-page/offer-3-mob.webp';
import Offer4Mob from '/public/images/karriere-page/offer-4-mob.webp';
import Offer5Mob from '/public/images/karriere-page/offer-5-mob.webp';
import Offer1Desc from '/public/images/karriere-page/offer-1-desk.webp';
import Offer2Desc from '/public/images/karriere-page/offer-2-desk.webp';
import Offer3Desc from '/public/images/karriere-page/offer-3-desk.webp';
import Offer4Desc from '/public/images/karriere-page/offer-4-desk.webp';
import Offer5Desc from '/public/images/karriere-page/offer-5-desk.webp';

export type OfferItem = {
  mainTitle: string;
  mainText: string;
  title: string;
  text: string;
  timeType: string;
  mobile: StaticImageData;
  desktop: StaticImageData;
};

export const offerItems: OfferItem[] = [
  {
    mainTitle: 'Trainee Sales Manager',
    mainText: 'Eine Chance, eine erfolgreiche Karriere im Vertrieb zu starten!',
    title: '2,1K+Gehalt',
    text: 'Lorem ipsum dolor sit amet consectetur',
    timeType: 'Full time',
    mobile: Offer1Mob,
    desktop: Offer1Desc,
  },
  {
    mainTitle: 'Junior Sales Manager',
    mainText: 'Eine Chance, eine erfolgreiche Karriere im Vertrieb zu starten!',
    title: '2,1K+Gehalt',
    text: 'Lorem ipsum dolor sit amet consectetur',
    timeType: 'Full time',
    mobile: Offer2Mob,
    desktop: Offer2Desc,
  },
  {
    mainTitle: 'Elektroinstallateur',
    mainText:
      'Stellenangebote für erfahrene Elektriker im Bereich der erneuerbaren Energien!',
    title: '2,1K+Gehalt',
    text: 'Lorem ipsum dolor sit amet consectetur',
    timeType: 'Full time',
    mobile: Offer3Mob,
    desktop: Offer3Desc,
  },
  {
    mainTitle: 'PV-Modul-Installateur',
    mainText: 'Helfen Sie uns bei der Schaffung einer sauberen Energiezukunft',
    title: '2,1K+Gehalt',
    text: 'Lorem ipsum dolor sit amet consectetur',
    timeType: 'Full time',
    mobile: Offer4Mob,
    desktop: Offer4Desc,
  },
  {
    mainTitle: 'Middle Sales Maneger',
    mainText: 'Eine Chance, eine erfolgreiche Karriere im Vertrieb zu starten!',
    title: '2,1K+Gehalt',
    text: 'Lorem ipsum dolor sit amet consectetur',
    timeType: 'Full time',
    mobile: Offer5Mob,
    desktop: Offer5Desc,
  },
];
