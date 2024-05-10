import { ImportedImages, VorteileSliderItems } from '@/types/infoTypes';
import pvSlide1Mob from '/public/images/pv-anlagen-page/PVSlide1Mob.webp';
import pvSlide1Desk from '/public/images/pv-anlagen-page/pvSlide1Desk.jpg';
import pvSlide2Mob from '/public/images/pv-anlagen-page/PVSlide2Mob.webp';
import pvSlide2Desk from '/public/images/pv-anlagen-page/pvSlide2Desk.webp';
import pvSlide3Mob from '/public/images/pv-anlagen-page/PVSlide3Mob.webp';
import pvSlide3Desk from '/public/images/pv-anlagen-page/pvSlide3Desk.webp';
import pvSlide4Mob from '/public/images/pv-anlagen-page/PVSlide4Mob.webp';
import pvSlide4Desk from '/public/images/pv-anlagen-page/pvSlide4Desk.webp';
import pvSlide5Mob from '/public/images/pv-anlagen-page/PVSlide5Mob.webp';
import pvSlide5Desk from '/public/images/pv-anlagen-page/pvSlide5Desk.webp';

export const pvItems: VorteileSliderItems[] = [
  {
    title: 'PV-Anlage Vorteile',
    text: 'Hast du genug von steigenden Stromrechnungen? Eine Photovoltaikanlage schützt dich vor steigenden Tarifen und steigert den Wert deines Hauses. Stell dir vor, du sparst jeden Monat Geld, tust etwas für die Umwelt und steigerst den Wert deines Hauses. Willst du damit loslegen? Dann scrolle nach unten und wähle ein Paket aus, das dich interessiert',
  },
  {
    title: 'Selbstversorgung',
    text: 'Mit Photovoltaikanlagen kannst du mindestens 20 Jahre lang deinen eigenen Strom erzeugen und dich vor den Preiserhöhungen der Großkonzerne schützen. Unser Planungsteam berechnet die effizienteste Option für dich. Dabei gehen unsere Experten immer von der Autarkie-Grad aus, so sich dein Projekt schon viel früher als in 20 Jahren rentiert',
  },
  {
    title: 'Kompensation durch Stromverkauf',
    text: 'In Deutschland können die Besitzer von PV-Anlagen ihre Kosten decken, indem sie überschüssige Energie an das Stromnetz verkaufen. Staatliche Anreize und Subventionen tragen ebenfalls dazu bei, die Vorlaufkosten für die Installation dieser Systeme zu senken',
  },
  {
    title: 'Wertsteigerung der Immobilien',
    text: 'Die Anbringung einer Photovoltaikanlage steigert den Wert deines Haus	es und macht es für Käufer attraktiver. Die Möglichkeit, überschüssige Energie in das Stromnetz einzuspeisen, macht dein Haus für potenzielle Käufer besonders interessant und erhöht seine Attraktivität als Investition in die Zukunft',
  },
  {
    title: 'Umweltschutz',
    text: 'Die Nutzung von Solarenergie durch Photovoltaikanlagen ist ein wichtiger Beitrag zum Umweltschutz, denn Solarenergie ist eine erneuerbare Energiequelle. Indem du dir die Energie der Sonne zunutze machst, trägst du zum Erhalt unseres Planeten bei',
  },
];

export const pvImages: ImportedImages[] = [
  {
    mobile: pvSlide1Mob,
    desktop: pvSlide1Desk,
  },
  {
    mobile: pvSlide2Mob,
    desktop: pvSlide2Desk,
  },
  {
    mobile: pvSlide3Mob,
    desktop: pvSlide3Desk,
  },
  {
    mobile: pvSlide4Mob,
    desktop: pvSlide4Desk,
  },
  {
    mobile: pvSlide5Mob,
    desktop: pvSlide5Desk,
  },
];
