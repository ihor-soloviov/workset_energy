type JobItem = {
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  message: string;
  location: string;
  salary: string;
  hours: string;
};
type JobListItem = {
  title: string;
};

export const jobItem: JobItem = {
  title: 'Trainee Sales Manager',
  description:
    'Wir suchen engagierte und motivierte Personen, die sich unserem Team als Trainee Sales Manager anschließen möchten. Diese Position bietet eine einzigartige Gelegenheit, in der dynamischen Welt des Vertriebs zu arbeiten und zum Wachstum unseres Unternehmens beizutragen.',
  responsibilities:
    '# Lernen und Entwicklung:\n- Teilnahme an Trainingsprogrammen und Schulungen zum Verkauf von Solarmodulen, um Verkaufsfähigkeiten, Produktkenntnisse und Verfahren zur Installation von Solarmodulen zu erwerben.\n# Verkaufsunterstützung: \n- Interaktion mit potenziellen Kunden durch Telefonanrufe, E-Mails und persönliche Treffen, um deren Solarenergiebedarf zu besprechen und geeignete Lösungen vorzuschlagen.\n# Marktanalyse:\n- Untersuchung und Analyse des deutschen Solarenergiemarktes, einschließlich Wettbewerber, Trends und potenzieller Geschäftsmöglichkeiten.\n# Vorlage eines individuellen Angebots:\n- Ausarbeitung und Präsentation von maßgeschneiderten Vorschlägen für die Installation von Solarmodulen für Kunden, einschließlich Kostenvoranschlägen, technischen Spezifikationen und prognostizierten wirtschaftlichen Vorteilen.\n# Kundenbeziehungsmanagement: \n- Pflege der Kundendatenbank, Kontaktverfolgung und Verwaltung der Kundenbeziehungen, um ein hohes Maß an Kundenservice und Kundenzufriedenheit zu gewährleisten.\n# Zusammenarbeit mit anderen Abteilungen:\n- Enge Zusammenarbeit mit den Abteilungen für technischen Support, Installation und Logistik, um eine effiziente Umsetzung von Projekten zur Installation von Solarmodulen zu gewährleisten.\n',
  requirements:
    '# Bildung: \n- Hochschulbildung, vorzugsweise in den Bereichen Wirtschaft, Marketing, Business oder verwandten Disziplinen.\n# Kommunikationsfähigkeiten:\n- Ausgezeichnete Kommunikationsfähigkeiten in Deutsch mindestens auf B2-Niveau und darüber, sowohl mündlich als auch schriftlich. Die Fähigkeit, sich klar und überzeugend auszudrücken.\n# Verkauf und Überzeugung:\n- Der Wunsch, Verkaufskompetenzen zu entwickeln und die Fähigkeit, Kunden zu überzeugen und zu beeinflussen, indem die Vorteile der Produkte und Dienstleistungen des Unternehmens aufgezeigt werden.\n# Organisatorische Fähigkeiten:\n- Fähigkeit zur effizienten Zeiteinteilung, zur Planung von Kundenterminen und zur fristgerechten Erledigung von Aufgaben.\n# Teamarbeit:\n- Bereitschaft, im Team zu arbeiten und mit verschiedenen Abteilungen des Unternehmens zusammenzuarbeiten, um gemeinsame Ziele zu erreichen.\n# Interesse an erneuerbaren Energiequellen:\n- Verständnis und Interesse für Solarenergie und nachhaltige Technologien sowie der Wunsch, zur Entwicklung dieser Branche beizutragen.',
  message:
    'Wenn Sie über Erfahrungen und Kenntnisse im Bereich der Solarsysteme verfügen und sich unserem Team anschließen möchten, senden Sie uns bitte Ihren Lebenslauf und Ihr Bewerbungsschreiben. Unser Unternehmen bietet Ihnen die Möglichkeit, grüne Energie zu entwickeln und die Welt zu einem besseren Ort für alle zu machen.\nIhre Zukunft ist sauber und sonnig!',
  location: 'Deutschland, Ulm',
  salary: '12 € / Jahr',
  hours: '150 Stunden/Monat',
};

export const JobListItems: JobListItem[] = [
  {
    title: 'Stellenbeschreibung:',
  },
  {
    title: 'Zuständigkeiten:',
  },
  {
    title: 'Anforderungen:',
  },
];
