import { ObjectItem } from '@/types/infoTypes';
import objectSlide1Mob from '/public/images/uberuns-page/object-1-mob.jpg';
import objectSlide2Mob from '/public/images/uberuns-page/object-2-mob.jpg';
import objectSlide3Mob from '/public/images/uberuns-page/object-3-mob.jpg';
import objectSlide4Mob from '/public/images/uberuns-page/object-4-mob.jpg';
import objectSlide5Mob from '/public/images/uberuns-page/object-5-mob.jpg';
import objectSlide1Desk from '/public/images/uberuns-page/object-1-desc.jpg';
import objectSlide2Desk from '/public/images/uberuns-page/object-2-desc.jpg';
import objectSlide3Desk from '/public/images/uberuns-page/object-3-desc.jpg';
import objectSlide4Desk from '/public/images/uberuns-page/object-4-desc.jpg';
import objectSlide5Desk from '/public/images/uberuns-page/object-5-desc.jpg';

export const objectItems: ObjectItem[] = [
  {
    standort: 'Bad Soden am Taunus',
    textList: ['Anlagengröße in kWp: 12-15', 'Stückzahl der Module: 31'],
    mobile: objectSlide1Mob,
    desktop: objectSlide1Desk,
  },
  {
    standort: 'Deutschland, Illerrieden',
    textList: [
      'PV-Anlage Gesamtleistung: 8,2 kWp',
      'Stückzahl der Module: 19',
      'Speichersystem: 10 kWh',
    ],
    mobile: objectSlide2Mob,
    desktop: objectSlide2Desk,
  },
  {
    standort: 'Deutschland, Freiburg',
    textList: [
      'PV-Anlage Gesamtleistung: 58,22 kWp',
      'Stückzahl der Module: 142',
    ],
    mobile: objectSlide3Mob,
    desktop: objectSlide3Desk,
  },
  {
    standort: 'Deutschland, Bruchköbel',
    textList: ['PV-Anlage Gesamtleistung: 8,7 kWp', 'Stückzahl der Module: 20'],
    mobile: objectSlide4Mob,
    desktop: objectSlide4Desk,
  },
  {
    standort: 'Deutschland, Rodgau',
    textList: ['Stückzahl der Module: 25', 'Speichersystem: 10 kWh'],
    mobile: objectSlide5Mob,
    desktop: objectSlide5Desk,
  },
];
