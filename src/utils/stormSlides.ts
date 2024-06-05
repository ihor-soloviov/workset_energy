import { ImportedImages, VorteileSliderItems } from '@/types/infoTypes';
import StromSlide1Mob from '/public/images/stromspeicher-page/StromSlide1Mob.webp';
import StromSlide1Desk from '/public/images/stromspeicher-page/StromSlide1Desk.jpg';
import StromSlide2Mob from '/public/images/stromspeicher-page/StromSlide2Mob.jpg';
import StromSlide2Desk from '/public/images/stromspeicher-page/StromSlide2Desk.jpg';

export const stormItems: VorteileSliderItems[] = [
  {
    title: 'Stromspeicher Vorteile',
    text: 'Mit der Integration eines Batteriespeichers in deine Photovoltaikanlage sorgst du Tag und Nacht für solarbetriebene Beleuchtung. Du kannst dein Haus sogar mit Notstrom versorgen oder es bei Bedarf komplett vom Stromnetz trennen. Eine dezentrale Stromversorgung und die Speicherung von Strom sind die großen Themen von morgen.',
  },
  {
    title: 'Speichern von überschüssigem Strom',
    text: 'Stromspeicherhern kannst du das Problem eines niedrigen Eigenverbrauchs lösen. Einfach ausgedrückt: Was du nicht verbrauchen kannst, kommt in deinen Speicher. Gerade an bewölkten Tagen und im Winter, wenn der Stromverbrauch steigt, ist das sehr hilfreich.',
  },
];

export const stormImages: ImportedImages[] = [
  {
    mobile: StromSlide1Mob,
    desktop: StromSlide1Desk,
  },
  {
    mobile: StromSlide2Mob,
    desktop: StromSlide2Desk,
  },
];
