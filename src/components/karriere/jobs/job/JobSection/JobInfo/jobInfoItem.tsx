import JobIcon1 from '/public/icons/job-location.svg';
import JobIcon2 from '/public/icons/job-salary.svg';
import JobIcon3 from '/public/icons/job-grafic.svg';

type JobInfoItem = {
  title: string;

  icon: React.ElementType;
};

export const jobInfoItems: JobInfoItem[] = [
  { title: 'Standort:', icon: JobIcon1 },
  { title: 'Gehalt:', icon: JobIcon2 },
  { title: 'Grafik:', icon: JobIcon3 },
];
