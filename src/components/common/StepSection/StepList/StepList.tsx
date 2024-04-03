'use client';
import Button from '@/components/common/Button/Button';
import styles from './StepList.module.css';
import { inter } from '@/utils/fonts';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import stepOneImgMob from '/public/images/home-page/step-1-mob.jpg';
import stepTwoImgMob from '/public/images/home-page/step-2-mob.jpg';
import stepThreeImgMob from '/public/images/home-page/step-3-mob.jpg';
import stepFourImgMob from '/public/images/home-page/step-4-mob.jpg';
import stepFiveImgMob from '/public/images/home-page/step-5-mob.jpg';
import stepOneImgDesc from '/public/images/home-page/step-1-desc.jpg';
import stepTwoImgDesc from '/public/images/home-page/step-2-desc.jpg';
import stepThreeImgDesc from '/public/images/home-page/step-3-desc.jpg';
import stepFourImgDesc from '/public/images/home-page/step-4-desc.jpg';
import stepFiveImgDesc from '/public/images/home-page/step-5-desc.jpg';
import BtnArrowIcon from '/public/icons/small-arrow-btn.svg';

import { motion } from 'framer-motion';
import { fromBotAnimation } from '@/animations/animations';

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
    text: 'Unser Fachberater unterstützt dich bei der Einrichtung von PV-Anlagen. Mit umfangreicher Erfahrung begleiten wir dich bei jedem Schritt, um sicherzustellen, dass deine Anlage optimal funktioniert und du von den Vorteilen sauberer Energie profitierst.',
    title: 'Beratungsgespräch',
  },
  {
    imgMob: stepTwoImgMob,
    imgDesc: stepTwoImgDesc,
    link: '',
    text: 'Du erhältst innerhalb von 72 Stunden nach deiner Anfrage ein individuelles Angebot, das nur für dich erstellt wird. Wir berechnen auch die Kosten des Projekts auf der Grundlage deines individuellen Energieverbrauchs und erörtern deine mögliche Unabhängigkeit von herkömmlichen Energiequellen.',
    title: 'Projektierung',
  },
  {
    imgMob: stepThreeImgMob,
    imgDesc: stepThreeImgDesc,
    link: '',
    text: 'Du unterschreibst den Kaufvertrag und legst damit den Grundstein für die Realisierung deines individuellen PV-Projekts.',
    title: 'Unterschrift',
  },
  {
    imgMob: stepFourImgMob,
    imgDesc: stepFourImgDesc,
    link: '',
    text: 'Wir richten innerhalb von 2 Monaten deine PV-Anlage ein, beginnend ab dem Zeitpunkt der Vertragsunterzeichnung. Die Einrichtung wird von uns sorgfältig geplant, um sicherzustellen, dass sie optimal auf deine Bedürfnisse und die Eigenschaften deiner Immobilie abgestimmt ist.',
    title: 'Montage',
  },
  {
    imgMob: stepFiveImgMob,
    imgDesc: stepFiveImgDesc,
    link: '',
    text: 'Nachdem du die Rechnung beglichen hast, wird deine PV-Anlage eingerichtet. Wir bleiben während des gesamten Prozesses in Kontakt, um sicherzustellen, dass deine Bedürfnisse erfüllt werden und du die Vorteile der sauberen Energie nutzen kannst.',
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
        <motion.li
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.6, once: true }}
          variants={fromBotAnimation}
          className={`${styles.stepItem} ${getClass(index)}`}
          key={title}
        >
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
        </motion.li>
      ))}
    </ul>
  );
};

export default StepList;
