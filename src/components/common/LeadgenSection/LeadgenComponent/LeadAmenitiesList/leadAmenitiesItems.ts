import type { StepItem } from '../../types';
import amenitiesFirstIcon from '/public/icons/leadgen/amenities-1.svg';
import amenitiesSecondIcon from '/public/icons/leadgen/amenities-2.svg';
import amenitiesThirdIcon from '/public/icons/leadgen/amenities-3.svg';
import amenitiesFourIcon from '/public/icons/leadgen/amenities-4.svg';

export const leadAmenitiesItems: StepItem[] = [
  {
    title: 'Bewertung 4,9',
    text: 'Unsere Bewertung bei Google: 4,9 Sterne Kunden sind zufrieden mit unserem Service.',
    icon: amenitiesFirstIcon,
  },
  {
    title: '0€ Anzahlung',
    text: 'Kein Risiko: Du zahlst erst nach Installation! 500€ Preisnachlass optional.',
    icon: amenitiesSecondIcon,
  },
  {
    title: 'Kostenfreies EMS',
    text: 'Spare mit dynamischen Tarifen und optimiere dein Smart Home.',
    icon: amenitiesThirdIcon,
  },
  {
    title: 'Glückliche Kunden',
    text: 'Mehr als 10.000 glückliche Kunden vertrauen uns.',
    icon: amenitiesFourIcon,
  },
];
