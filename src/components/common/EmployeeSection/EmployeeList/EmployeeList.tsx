import styles from './EmployeeList.module.css';
import employeeFirstImgMob from '/public/images/common/employee-1-mob.jpg';
import employeeSecondImgMob from '/public/images/common/employee-2-mob.jpg';
import employeeThirdImgMob from '/public/images/common/employee-3-mob.jpg';
import employeeFirstImgDesc from '/public/images/common/employee-1-desc.jpg';
import employeeSecondImgDesc from '/public/images/common/employee-2-desc.jpg';
import employeeThirdImgDesc from '/public/images/common/employee-3-desc.jpg';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { inter } from '@/utils/fonts';
import ArrowIcon from '/public/icons/small-arrow-btn.svg';
import Button from '../../Button/Button';

export type EmployeeItem = {
  title: string;
  text: string;
  imgMob: StaticImageData;
  imgDesc: StaticImageData;
  btn?: boolean;
};

const EmployeeList = () => {
  const employeeItems: EmployeeItem[] = [
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

  return (
    <ul className={styles.employeeList}>
      {employeeItems.map(({ text, title, imgMob, imgDesc, btn }) => (
        <li className={styles.employeeItem} key={title}>
          <Image className={styles.employeeImgMob} src={imgMob} alt={title} />
          <Image className={styles.employeeImgDesc} src={imgDesc} alt={title} />
          <div className={styles.employeeTextWrap}>
            <h3 className={styles.employeeTitle}>{title}</h3>
            <p className={`${styles.employeeText} ${inter.className}`}>
              {text}
            </p>
            {btn && (
              <Button className={styles.employeeItemBtn} type="button">
                Zum Angebot
                <ArrowIcon className={styles.employeeIcon} />
              </Button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;
