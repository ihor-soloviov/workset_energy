import AmenitiesFirstIcon from '/public/icons/amenities-1.svg';
import AmenitiesSecondIcon from '/public/icons/amenities-2.svg';
import AmenitiesThirdIcon from '/public/icons/amenities-3.svg';
import AmenitiesFourthIcon from '/public/icons/amenities-4.svg';

type AmenitiesItem = {
  title: string;
  text: string;
  icon: React.ElementType;
};

export const amenitiesItems: AmenitiesItem[] = [
  {
    text: 'Wir möchten, dass Solarenergie für alle Bewohner Deutschlands zugänglich wird.',
    title: 'Erschwingliche Preise',
    icon: AmenitiesFirstIcon,
  },
  {
    text: 'Vom unterschriebenen Auftrag bis zum finalen Anschluss der Anlage vergehen maximal 2 Monate!',
    title: 'Wir sind schnell',
    icon: AmenitiesSecondIcon,
  },
  {
    text: 'Wir verlangen von unseren Kunden keine Vorkasse. Du zahlst erst nach der Fertigstellung.',
    title: 'Keine Vorkasse',
    icon: AmenitiesThirdIcon,
  },
  {
    text: 'Wir arbeiten nicht mit Subunternehmern zusammen. Monteure, Elektriker, Berater, Backoffice – wir sind alle ein großes Team.',
    title: 'Unser Team',
    icon: AmenitiesFourthIcon,
  },
];
