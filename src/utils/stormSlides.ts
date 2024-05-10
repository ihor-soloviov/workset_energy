import { ImportedImages, VorteileSliderItems } from '@/types/infoTypes';
import StormSlide1Mob from '/public/images/stormspeicher-page/StormSlide1Mob.webp';
import StormSlide1Desk from '/public/images/stormspeicher-page/StormSlide1Desk.jpg';
import StormSlide2Mob from '/public/images/stormspeicher-page/StormSlide2Mob.jpg';
import StormSlide2Desk from '/public/images/stormspeicher-page/StormSlide2Desk.jpg';

export const stormItems: VorteileSliderItems[] = [
  {
    title: 'Stormspeicher Vorteile',
    text: 'Mit der Integration eines Batteriespeichers in deine Photovoltaikanlage sorgst du Tag und Nacht für solarbetriebene Beleuchtung. Du kannst dein Haus aogarmit Notstrom versorgen oder es bei Bedarf komplett vom Stromnetz trennen. Eine dezentrale Stromversorgung und die Speicherung von Strom sind die großen Themen von morgen',
  },
  {
    title: 'Speichern von überschüssigem Strom',
    text: 'Mit Stromspeichern kannst du das Problem eines niedrigen Eigenverbrauchs lösen. Einfach ausgedrückt: Was du nicht verbrauchen kannst, kommt in deinen Speicher. Gerade an bewölkten Tagen und im Winter, wenn der Stromverbrauch steigt, ist das sehr hilfreich',
  },
];

export const stormImages: ImportedImages[] = [
  {
    mobile: StormSlide1Mob,
    desktop: StormSlide1Desk,
  },
  {
    mobile: StormSlide2Mob,
    desktop: StormSlide2Desk,
  },
];
