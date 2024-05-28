type AmenitiesItem = {
  mainTitle: string;
  mainSymbol: string;
  title: string;
  mainText: string;
  extraText: string;
};

export const amenitiesItems: AmenitiesItem[] = [
  {
    mainTitle: '0',
    mainSymbol: ' €',
    title: 'Anzahlung',
    mainText:
      'Zahlung erfolgt erst nach Installation der PV-Anlage: 90% nach Montage, 10% nach',
    extraText:
      'Inbetriebnahme unseres Elektrikers. Bei einer 50% Anzahlung erhältst du einen Preisnachlass von 500,- EUR.',
  },
  {
    mainTitle: '30',
    mainSymbol: '%',
    title: 'Günstiger',
    mainText:
      'Wir sind 30% günstiger als der Durchschnittspreis. Bestes Preis-Leistungsverhältnis! Unser Ziel ist',
    extraText:
      'es, dir einen hochwertigen Übergang zu erneuerbaren Energien zu ermöglichen.',
  },
  {
    mainTitle: '10.000',
    mainSymbol: '+',
    title: 'Zufriedene Kunden',
    mainText:
      'Über 10.000 zufriedene Kunden. Diese Zahl spricht für die Qualität und Zuverlässigkeit unserer',
    extraText:
      'Dienstleistungen. Unsere Kunden schätzen unseren Service und die Professionalität unseres Teams. Das macht uns zu deinem idealen Partner in Sachen Photovoltaik.',
  },
];
