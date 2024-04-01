import JobIcon1 from '/public/icons/job-location.svg';
import JobIcon2 from '/public/icons/job-salary.svg';
import JobIcon3 from '/public/icons/job-grafic.svg';

type JobInfoItem = {
  title: string;
  text: string;

  icon: React.ElementType;
};

export const jobInfoItems: JobInfoItem[] = [
  { title: 'Standort:', text: 'Deutschland, Ulm', icon: JobIcon1 },
  { title: 'Gehalt:', text: '12 €/Jahr', icon: JobIcon2 },
  { title: 'Grafik:', text: '150 Stunden/Monat', icon: JobIcon3 },
];
