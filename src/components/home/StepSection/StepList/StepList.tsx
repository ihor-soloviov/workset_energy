import Button from '@/components/common/Button/Button';
import styles from './StepList.module.css';
import { inter } from '@/utils/fonts';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import stepOneImgMob from '/public/images/step-1-mob.jpg';
import stepTwoImgMob from '/public/images/step-2-mob.jpg';
import stepThreeImgMob from '/public/images/step-3-mob.jpg';
import stepFourImgMob from '/public/images/step-4-mob.jpg';
import stepFiveImgMob from '/public/images/step-5-mob.jpg';
import stepOneImgDesc from '/public/images/step-1-desc.jpg';
import stepTwoImgDesc from '/public/images/step-2-desc.jpg';
import stepThreeImgDesc from '/public/images/step-3-desc.jpg';
import stepFourImgDesc from '/public/images/step-4-desc.jpg';
import stepFiveImgDesc from '/public/images/step-5-desc.jpg';
import BtnArrowIcon from '/public/icons/small-arrow-btn.svg';

type StepItem = {
  title: string;
  text: string;
  link: string;
  imgMob: StaticImageData;
  imgDesc: StaticImageData;
};

export const stepItems: StepItem[] = [
  {
    imgMob: stepOneImgMob,
    imgDesc: stepOneImgDesc,
    link: '',
    text: 'Unser Fachberater unterstützt Sie bei der Installation von Solaranlagen. Mit umfangreicher Erfahrung begleiten wir Sie durch jeden Schritt, um sicherzustellen, dass Ihre Anlage optimal funktioniert und Sie von den Vorteilen sauberer Energie profitieren.',
    title: 'Beratungsgespräch',
  },
  {
    imgMob: stepTwoImgMob,
    imgDesc: stepTwoImgDesc,
    link: '',
    text: 'Sie erhalten innerhalb von 72 Stunden nach Ihrer Anfrage ein individuelles Angebot, das nur für Sie erstellt wird. Wir berechnen auch die Kosten des Projekts auf der Grundlage Ihres individuellen Energieverbrauchs und erörtern Ihre mögliche Unabhängigkeit von herkömmlichen Energiequellen.',
    title: 'Projektierung',
  },
  {
    imgMob: stepThreeImgMob,
    imgDesc: stepThreeImgDesc,
    link: '',
    text: 'Du unterschreibst den Kaufvertrag und legst damit den Grundstein für die Realisierung Ihres individuellen Solarprojekts',
    title: 'Unterschrift',
  },
  {
    imgMob: stepFourImgMob,
    imgDesc: stepFourImgDesc,
    link: '',
    text: 'Wir installieren innerhalb von 2 Monaten deine PV-Anlage, beginnend ab dem Zeitpunkt der Vertragsunterzeichnung. Unsere Installation wird sorgfältig geplant, um sicherzustellen, dass sie optimal auf Ihre Bedürfnisse und die Eigenschaften Ihrer Immobilie abgestimmt ist.',
    title: 'Installation',
  },
  {
    imgMob: stepFiveImgMob,
    imgDesc: stepFiveImgDesc,
    link: '',
    text: 'Nachdem du die Rechnung beglichen hast, wird deine PV-Anlage installiert. Wir bleiben während des gesamten Prozesses in Kontakt, um sicherzustellen, dass deine Bedürfnisse erfüllt werden und du die Vorteile der sauberen Energie nutzen kannst.',
    title: 'Abschluss',
  },
];

const StepList = () => {
  const getClass = (index: number) => {
    return (index + 1) % 2 === 0 ? styles.white : '';
  };
  return (
    <ul className={styles.stepList}>
      {stepItems.map(({ text, title, imgDesc, imgMob }, index) => (
        <li className={`${styles.stepItem} ${getClass(index)}`} key={title}>
          <Image className={styles.stepImgMob} alt="title" src={imgMob} />
          <Image className={styles.stepImgDesc} alt="title" src={imgDesc} />
          <div className={`${styles.stepTextWrap} ${getClass(index)}`}>
            <p
              className={`${styles.stepCount} ${getClass(index)} ${inter.className}`}
            >
              0<span className={styles.stepCountSpan}>{index + 1}</span>
            </p>
            <h3 className={`${styles.stepTitle} ${getClass(index)}`}>
              {title}
            </h3>
            <p className={`${styles.stepText} ${getClass(index)}`}>{text}</p>
            <Button
              className={`${styles.stepBtn} ${getClass(index)}`}
              type="button"
            >
              Zum Angebot{' '}
              <BtnArrowIcon
                className={`${styles.stepBtnIcon} ${getClass(index)}`}
              />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default StepList;
