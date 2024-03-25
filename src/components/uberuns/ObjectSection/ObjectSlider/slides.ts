import { ImportedImages, ObjectItem } from '@/types/infoTypes';
import objectSlide1Mob from '/public/images/uberuns-page/object-1-mob.jpg';
import objectSlide1Desk from '/public/images/uberuns-page/object-1-desc.jpg';

export const objectItems: ObjectItem[] = [
  {
    standort: 'Deutschland, Ulm',
    gesamtleistung: '8,3',
    stückzahl: '19',
    speichersystem: '10',
  },
  {
    standort: 'test2',
    gesamtleistung: 'test2',
    stückzahl: 'test2',
    speichersystem: 'test2',
  },
  {
    standort: 'test3',
    gesamtleistung: 'test3',
    stückzahl: 'test3',
    speichersystem: 'test3',
  },
];

export const objectImages: ImportedImages[] = [
  {
    mobile: objectSlide1Mob,
    desktop: objectSlide1Desk,
  },
  {
    mobile: objectSlide1Mob,
    desktop: objectSlide1Desk,
  },
  {
    mobile: objectSlide1Mob,
    desktop: objectSlide1Desk,
  },
];
