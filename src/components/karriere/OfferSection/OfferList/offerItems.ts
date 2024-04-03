import { StaticImageData } from 'next/image';
import Offer1Mob from '/public/images/karriere-page/offer-1-mob.jpg';
import Offer2Mob from '/public/images/karriere-page/offer-2-mob.jpg';
import Offer3Mob from '/public/images/karriere-page/offer-3-mob.jpg';
import Offer4Mob from '/public/images/karriere-page/offer-4-mob.jpg';
import Offer5Mob from '/public/images/karriere-page/offer-5-mob.jpg';
import Offer1Desc from '/public/images/karriere-page/offer-1-desk.jpg';
import Offer2Desc from '/public/images/karriere-page/offer-2-desk.jpg';
import Offer3Desc from '/public/images/karriere-page/offer-3-desk.jpg';
import Offer4Desc from '/public/images/karriere-page/offer-4-desk.jpg';
import Offer5Desc from '/public/images/karriere-page/offer-5-desk.jpg';

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
    mainText:
      'Starten Sie mit uns! Junior Sales Manager in einem innovativen Unternehmen mit der Möglichkeit zur Weiterbildung',
    title: '2,1K+Gehalt',
    text: 'Lorem ipsum dolor sit amet consectetur',
    timeType: 'Full time',
    mobile: Offer2Mob,
    desktop: Offer2Desc,
  },
  {
    mainTitle: 'Elektroinstallateur',
    mainText:
      'Stellenangebote für erfahrene Elektriker im Bereich der erneuerbaren Energien',
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
    mainText:
      'Möglichkeit zur beruflichen Weiterentwicklung in einem erfolgreichen Verkaufsteam',
    title: '4,2K+Gehalt',
    text: 'Lorem ipsum dolor sit amet consectetur',
    timeType: 'Full time',
    mobile: Offer5Mob,
    desktop: Offer5Desc,
  },
];
