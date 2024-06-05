type AmenitiesItem = {
  title: string;
  subTitle?: string;
  textList: string[];
};

export const amenitiesItems: AmenitiesItem[] = [
  {
    title: 'Kostenfreies EMS',
    textList: [
      'Spare dank dynamischen Tarifen',
      'Optimiere dein Smart Home',
      'Alles mit nur einer App',
    ],
  },

  {
    title: '0€ Anzahlung',
    textList: [
      'Kein Risiko',
      '⁠Rechnung nach Installation',
      '500 EUR Preisnachlass',
    ],
  },
  {
    title: 'Kunden',
    subTitle: '10.000',
    textList: [
      'Keine Subunternehmen',
      '⁠⁠Kontakt mit Kundenservice',
      'Rundum Sorglos Paket',
    ],
  },
];
