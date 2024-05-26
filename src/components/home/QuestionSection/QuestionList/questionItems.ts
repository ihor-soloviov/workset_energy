export type QuestItem = {
  title: string;
  text: string;
  leadSrc?: boolean;
  className?: string;
};

export const questItems: QuestItem[] = [
  {
    title: 'Wie viel kWp sind für eine vollständige Autonomie erforderlich?',
    text: 'Die Anzahl der Module, die für eine autonome Stromversorgung nur durch Sonnenenergie nötig sind, hängt in erster Linie von deinem persönlichen Verbrauch ab. Des Weiteren ist auch die zur Verfügung stehende Größe deines Daches ein zu berücksichtigender Faktor.\nMöchtest du erfahren, wie viele Module für deinen konkreten Fall nötig sind, um autonom Strom zu erzeugen? Kontaktiere uns – wir erstellen dir gern einen auf deine Bedürfnisse zugeschnittenen Plan.',
    leadSrc: true,
  },
  {
    title: 'Wird der Einbau von PV-Anlagen staatlich gefördert?',
    text: 'Ja! Mit den Solarpaketen der letzten Jahre I will die Bundesregierung den Ausbau von Photovoltaik-/Solaranlagen weiter beschleunigen. Deshalb hat sie die jährlichen Zubauziele noch einmal angehoben: Ab 2026 soll mehr als dreimal so viel Solarenergie zugebaut werden wie bisher. Bis 2030 sollen in Deutschland Solaranlagen mit einer elektrischen Gesamtleistung von 215.000 MW auf Dächern installiert und auf Freiflächen aufgestellt sein.\nWenn du mehr über die konkreten Fördermöglichkeiten deiner Region erfahren willst, kontaktiere uns!',
  },
  {
    title:
      'Gibt es Folgekosten wie etwa für Wartung und Reparatur der PV-Anlage?',
    text: 'Bei uns gibt es keine versteckten Kosten. Alle Kosten, die auf dich zukommen, erfährst du in unserem Kostenplan, den du unverbindlich vor der Auftragserteilung erhältst.\nZudem sind unsere Anlagen so konzipiert, dass sie ohne Wartung auskommen. Einmal positioniert, produziert die Anlage ein Leben lang Strom.',
  },

  {
    title: 'Wie lange dauert es, bis sich eine PV-Anlage amortisiert?',
    text: 'Wie lange es dauert, bis sich eine PV-Anlage amortisiert, hängt von den Komponenten ab, für die du dich beim Kauf deiner PV-Anlage entschieden hast.\nDurchschnittlich dauert es 9-15 Jahre, bis sich deine PV-Anlage amortisiert. Mit Stromspeicher können es auch 7-13 Jahre sein – und danach kannst du noch mehr Stromkosten sparen! Kontaktiere uns, wenn du konkrete Zahlen zu deinem konkreten Fall wissen möchtest!',
  },
  {
    title: 'Worauf sollte ich beim Kauf von PV-Modulen achten?',
    text: 'Wichtig sind vor allem qualitativ hochwertige Produkte und ein Team aus Spezialisten, die diese Produkte sicher positionieren. Des Weiteren ist die Amortisationszeit, die Anzahl der PV-Module und die Entscheidung für oder gegen einen Stromspeicher wichtig.\nKontaktiere uns noch heute und unser Spezialisten-Team berät dich unverbindlich in allen Fragen, die du zu deiner künftigen PV-Anlage hast. Stelle auch gerne Vergleiche zu anderen PV-Anbietern an und entscheide dich nur für die WorkSET Energy GmbH, wenn du überzeugt davon bist, dass wir die beste Wahl für dich sind!',
    className: 'small',
  },
  {
    title:
      'Woher weiß ich, welche Art von PV-Modulen für mich am besten geeignet ist?',
    text: 'Bei dieser Frage können dir unsere Spezialisten weiterhelfen. Die Technologie schreitet schnell voran, daher ist es umso wichtiger bestens beraten zu werden.',
  },
];
