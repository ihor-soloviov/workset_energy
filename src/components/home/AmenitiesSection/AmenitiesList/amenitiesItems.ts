type AmenitiesItem = {
  mainTitle: string;
  title: string;
  mainText: string;
  extraText: string;
};

export const amenitiesItems: AmenitiesItem[] = [
  {
    mainTitle: '0 €',
    title: 'Anzahlung',
    mainText:
      'Zahlung erfolgt erst nach Installation der PV-Anlage: 90% nach Montage, 10% nach Netzanschluss.',
    extraText:
      'Bei einer 50%-Vorauszahlung erhältst du einen Rabatt von 500 Euro.',
  },
  {
    mainTitle: '30%',
    title: 'Günstiger',
    mainText:
      'Wir sind 30 % günstiger als die Konkurrenz. Unser Ziel ist es, dir einen hochwertigen Übergang zu erneuerbaren Energien zu ',
    extraText:
      'ermöglichen, damit du unabhängig von fossilen Ressourcen und politischen Krisen wirst.',
  },
  {
    mainTitle: '10.000+',
    title: 'Befriedigte Kunden',
    mainText:
      'Über 10.000 zufriedene Kunden. Diese Zahl spricht für die Qualität und Zuverlässigkeit unserer Dienstleistungen. Unsere Kunden',
    extraText:
      'schätzen unseren Service und den Professionalismus unserer Team. Das macht uns zu einem vertrauenswürdigen Partner.',
  },
];
