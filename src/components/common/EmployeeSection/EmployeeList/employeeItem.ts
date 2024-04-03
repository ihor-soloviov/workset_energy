import employeeFirstImgMob from '/public/images/common/employee-1-mob.jpg';
import employeeSecondImgMob from '/public/images/common/employee-2-mob.jpg';
import employeeThirdImgMob from '/public/images/common/employee-3-mob.jpg';
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
    title: 'Unsere Handelsvertreter',
    text: 'Unser Team von Personalmanagern ist ein Kollektiv, das aus engagierten Fachleuten besteht, die von den Vorteilen der Solarenergie überzeugt sind. Unsere Manager sind echte Experten für Solarenergie.',
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
