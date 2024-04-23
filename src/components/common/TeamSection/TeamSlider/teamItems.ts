type TeamItem = {
  title: string;
  textMob: string;
  textDesk?: string;
  className: string;
};

export const teamItems: TeamItem[] = [
  {
    title: 'Boris Jung',
    textDesk: 'Gründer und Fachberater',
    textMob: 'Ulm',
    className: 'first',
  },
  {
    title: 'Michael Olberg',
    textDesk: 'Fachberater',
    textMob: 'Frankfurt',
    className: 'second',
  },
  {
    title: 'Paul Steinhauer',
    textDesk: 'Fachberater',
    textMob: 'Stuttgart',
    className: 'third',
  },
  {
    title: 'Damian Feluks',
    textMob: 'Frankfurt',
    className: 'fourth',
  },
  {
    title: 'Antonio Fiusco',
    textMob: 'Frankfurt',
    className: 'fifth',
  },
  {
    title: 'Chafiq Soultana',
    textMob: 'Frankfurt',
    className: 'sixth',
  },
  {
    title: 'Damir Dergic',
    textMob: 'Region Mainz',
    className: 'seventh',
  },
  {
    title: 'Norbert Opp',
    textMob: 'Mannheim',
    className: 'eighth',
  },
];
