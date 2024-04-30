type TeamItem = {
  title: string;
  textMob: string;
  textDesk?: string;
  className: string;
  email: string;
  tel: string;
};

export const teamItems: TeamItem[] = [
  {
    title: 'Boris Jung',
    textDesk: 'Gründer und Fachberater',
    textMob: 'Ulm',
    className: 'first',
    email: 'vertriebsleitung@work-set.eu',
    tel: '+49 731 146 153 63',
  },
  {
    title: 'Michael Olberg',
    textDesk: 'Fachberater',
    textMob: 'Frankfurt',
    className: 'second',
    email: 'm.olberg@work-set.eu',
    tel: '+49 731 146 132 17',
  },
  {
    title: 'Paul Steinhauer',
    textDesk: 'Fachberater',
    textMob: 'Stuttgart',
    className: 'third',
    email: 'p.steinhauer@work-set.eu',
    tel: '+49 731 146 153 63',
  },
  {
    title: 'Chafiq Soultana',
    textMob: 'Frankfurt',
    className: 'fourth',
    email: 'c.soultana@work-set.eu',
    tel: '+49 731 146 132 19',
  },
  // {
  //   title: 'Antonio Fiusco',
  //   textMob: 'Frankfurt',
  //   className: 'fifth',
  //   email: 'a.fiusco@work-set.eu',
  //   tel: '+49 731 146 153 60',
  // },
  {
    title: 'Damian Feluks',
    textMob: 'Frankfurt',
    className: 'sixth',
    email: 'd.feluks@work-set.eu',
    tel: '+49 731 146 132 15',
  },
  {
    title: 'Damir Dergic',
    textMob: 'Region Mainz',
    className: 'seventh',
    email: 'd.dergic@work-set.eu',
    tel: '+49 731 146 153 63',
  },
  {
    title: 'Norbert Opp',
    textMob: 'Mannheim',
    className: 'eighth',
    email: 'n.opp@work-set.eu	',
    tel: '+49 731 146 153 61',
  },
];
