type ImpressumItem = {
  title: string;
  textList?: string[];
  className?: string;
};

export const ImpressumItems: ImpressumItem[] = [
  {
    title: 'Angaben gemäß § 5 TMG:',
    textList: ['WorkSET Energy GmbH', 'Magirus-Deutz-Str. 12', '89077 Ulm'],

    className: 'contact',
  },
  {
    title: 'Kontaktaufnahme:',
    textList: ['Telefon: +49 731 146 132 10', 'E-Mail: office@work-set.eu'],

    className: 'contact',
  },
  {
    title: 'Geschäftsführer:',
    textList: [
      'Herr Boris Jung',
      'Registergericht:',
      'Amtsgericht Ulm',
      'HRB 746124',
      'USt.-ID: DE360949233',
    ],
    className: 'contact',
  },
  {
    title: 'Haftungsbeschränkung für externe Links',
    textList: [
      'Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf die Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Daher können wir für die „externen Links“ auch keine Gewähr auf Richtigkeit der Inhalte übernehmen. Für die Inhalte der externen Links sind die jeweilige Anbieter oder Betreiber (Urheber) der Seiten verantwortlich. Die externen Links wurden zum Zeitpunkt der Linksetzung auf eventuelle Rechtsverstöße überprüft und waren im Zeitpunkt der Linksetzung frei von rechtswidrigen Inhalten.',
      'Eine ständige inhaltliche Überprüfung der externen Links ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht möglich. Bei direkten oder indirekten Verlinkungen auf die Webseiten Dritter, die außerhalb unseres Verantwortungsbereichs liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall nur bestehen, wenn wir von den Inhalten Kenntnis erlangen und es uns technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. Werden uns Rechtsverletzungen bekannt, werden die externen Links durch uns unverzüglich entfernt.',
    ],
  },
  {
    title: 'Urheberrecht',
    textList: [
      'Die auf unserer Webseite veröffentlichen Inhalte und Werke unterliegen dem deutschen Urheberrecht (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf). Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung des geistigen Eigentums in ideeller und materieller Sicht des Urhebers außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers i.S.d. Urhebergesetzes (http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf). Downloads und Kopien dieser Seite sind nur für den privaten und nicht kommerziellen Gebrauch erlaubt. ',
      'Sind die Inhalte auf unserer Webseite nicht von uns erstellt wurden, sind die Urheberrechte Dritter zu beachten. Die Inhalte Dritter werden als solche kenntlich gemacht. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte unverzüglich entfernen.',
    ],
  },
];
