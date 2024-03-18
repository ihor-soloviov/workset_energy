import Button from '@/components/common/Button/Button';
import styles from './ProductList.module.css';
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

type ProductItem = {
  title: string;
  text: string;
  imgMob: StaticImageData;
  imgDesc: StaticImageData;
  link: string;
};

export const navLinkItems: ProductItem[] = [
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

const ProductList = () => {
  return (
    <ul className={styles.productList}>
      {navLinkItems.map(({ text, title, link, imgMob, imgDesc }) => (
        <li className={styles.productItem} key={title}>
          <Image className={styles.productImgMob} src={imgMob} alt={title} />{' '}
          <Image className={styles.productImgDesc} src={imgDesc} alt={title} />
          <div className={styles.productTextWrap}>
            <h3 className={styles.productTitle}>{title}</h3>
            <p className={`${styles.productText} ${inter.className}`}>{text}</p>
            <Button className={styles.productBtn} type="button">
              Mehr Info
              <BtnArrowIcon className={styles.productIcon} />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
