import employeeFirstImgMob from '/public/images/common/employee-1-mob.webp';
import employeeSecondImgMob from '/public/images/common/employee-2-mob.webp';
import employeeThirdImgMob from '/public/images/common/employee-3-mob.webp';
import employeeFirstImgDesc from '/public/images/common/employee-1-desc.jpg';
import employeeSecondImgDesc from '/public/images/common/employee-2-desc.jpg';
import employeeThirdImgDesc from '/public/images/common/employee-3-desc.jpg';
import { StaticImageData } from 'next/image';

type EmployeeItem = {
  title: string;
  text: string;
  imgMob: StaticImageData;
  imgDesc: StaticImageData;
  btn?: boolean;
};

export const employeeItems: EmployeeItem[] = [
  {
    title: 'Unsere Berater',
    text: 'Unser Berater Team besteht aus engagierten Fachleuten, die von der Effektivität von Solarenergie überzeugt sind. Sie beantworten gerne alle deine Fragen und erarbeiten gemeinsam mit dir die beste Option für die Einrichtung deiner Photovoltaikanlage. Jeder Kunde erhält einen persönlichen Betreuer, der ihn vom Anfang bis zum Ende begleitet.',
    imgMob: employeeFirstImgMob,
    imgDesc: employeeFirstImgDesc,
  },
  {
    title: 'Unsere Monteure',
    text: 'Unsere Monteure sind Fachleute mit Erfahrung, die auch die kompliziertesten Photovoltaik-Projekte umsetzen können. Wir haben selbst ein Team zusammengestellt, das Projekte jeglicher Komplexität realisieren kann. Wir greifen nicht auf die Leistungen von Subunternehmen zurück.',
    imgMob: employeeSecondImgMob,
    imgDesc: employeeSecondImgDesc,
  },
  {
    title: 'Unser Backoffice',
    text: 'Unsere Projektierungsingenieure sind Experten mit einem reichen Erfahrungsschatz, die hochwertige Lösungen für komplexe Projekte garantieren. Der Kunden-Support bietet ein hohes Serviceniveau mit einem scharfen Blick für Details und einer Garantie für die Haftung bei jeder Anwendung.',
    imgMob: employeeThirdImgMob,
    imgDesc: employeeThirdImgDesc,
    btn: true,
  },
];
