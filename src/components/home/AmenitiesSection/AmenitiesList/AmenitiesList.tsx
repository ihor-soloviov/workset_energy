import Button from '@/components/common/Button/Button';
import styles from './AmenitiesList.module.css';
import { inter } from '@/utils/fonts';
import BtnArrowIcon from '/public/icons/small-product-arrow.svg';
import Image from 'next/image';
import pvAnlagenImgMob from '/public/images/pv-anlagen-mob.jpg';
import stromspeicherImgMob from '/public/images/stromspeicher-mob.jpg';
import walaboxImgMob from '/public/images/wallbox-mob.jpg';
import pvAnlagenImgDesc from '/public/images/pv-anlagen-desc.jpg';
import stromspeicherImgDesc from '/public/images/stromspeicher-desc.jpg';
import walaboxImgDesc from '/public/images/wallbox-desc.jpg';
import { StaticImageData } from 'next/image';

type amenitiesItem = {
  title: string;
  text: string;
  link: string;
  imgMob: StaticImageData;
  imgDesc: StaticImageData;
};

export const amenitiesItems: amenitiesItem[] = [
  {
    imgMob: pvAnlagenImgMob,
    imgDesc: pvAnlagenImgDesc,
    link: '',
    text: 'Sie wandelt Sonnenlicht in Strom um und ist daher eine nachhaltige und umweltfreundliche Energiequelle.',
    title: 'PV-Anlagen',
  },
  {
    imgMob: stromspeicherImgMob,
    imgDesc: stromspeicherImgDesc,
    link: '',
    text: 'Eine zuverlässige Resrve, die überschüssigen Strom für den künftigen Verbrauch speichert.',
    title: 'Stormspeicher',
  },
  {
    imgMob: walaboxImgMob,
    imgDesc: walaboxImgDesc,
    link: '',
    text: 'Ein hochmodernes Ladesystem für Elektrofahrzeuge, das bequeme und effiziente Betankungsmöglichkeiten bietet.',
    title: 'Wallbox',
  },
];

const AmenitiesList = () => {
  return (
    <ul className={styles.amenitiesList}>
      {amenitiesItems.map(({ text, title, link, imgMob, imgDesc }) => (
        <li className={styles.amenitiesItem} key={title}>
          <Image className={styles.amenitiesImgMob} src={imgMob} alt={title} />
          <Image
            className={styles.amenitiesImgDesc}
            src={imgDesc}
            alt={title}
          />

          <div className={styles.amenitiesTextWrap}>
            <h3 className={styles.amenitiesTitle}>{title}</h3>
            <p className={`${styles.amenitiesText} ${inter.className}`}>
              {text}
            </p>
            <Button className={styles.amenitiesBtn} type="button">
              Mehr Info
              <BtnArrowIcon className={styles.productIcon} />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AmenitiesList;
