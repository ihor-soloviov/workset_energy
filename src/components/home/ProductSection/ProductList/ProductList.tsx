import Button from '@/components/common/Button/Button';
import styles from './ProductList.module.css';
import { inter } from '@/utils/fonts';
import { StaticImageData } from 'next/image';
import BtnArrowIcon from '/public/icons/small-product-arrow.svg';
import Image from 'next/image';
import pvAnlagenImgMob from '/public/images/home-page/pv-anlagen-mob.jpg';
import stromspeicherImgMob from '/public/images/home-page/stromspeicher-mob.jpg';
import walaboxImgMob from '/public/images/home-page/wallbox-mob.jpg';
import pvAnlagenImgDesc from '/public/images/home-page/pv-anlagen-desc.jpg';
import stromspeicherImgDesc from '/public/images/home-page/stromspeicher-desc.jpg';
import walaboxImgDesc from '/public/images/home-page/wallbox-desc.jpg';
import Link from 'next/link';

type ProductItem = {
  title: string;
  text: string;
  imgMob: StaticImageData;
  imgDesc: StaticImageData;
  href: string;
};

export const productsItems: ProductItem[] = [
  {
    imgMob: pvAnlagenImgMob,
    imgDesc: pvAnlagenImgDesc,
    href: '/pv-anlagen',
    text: 'Sie wandelt Sonnenlicht in Strom um und ist daher eine nachhaltige und umweltfreundliche Energiequelle.',
    title: 'PV-Anlagen',
  },
  {
    imgMob: stromspeicherImgMob,
    imgDesc: stromspeicherImgDesc,
    href: '/stormspeicher',
    text: 'Eine zuverlässige Resrve, die überschüssigen Strom für den künftigen Verbrauch speichert.',
    title: 'Stormspeicher',
  },
  {
    imgMob: walaboxImgMob,
    imgDesc: walaboxImgDesc,
    href: '/wallbox',
    text: 'Ein hochmodernes Ladesystem für Elektrofahrzeuge, das bequeme und effiziente Betankungsmöglichkeiten bietet.',
    title: 'Wallbox',
  },
];

const ProductList = () => {
  return (
    <ul className={styles.productList}>
      {productsItems.map(({ text, title, href, imgMob, imgDesc }) => (
        <li className={styles.productItem} key={title}>
          <div className={styles.productImgWrap}>
            <Image className={styles.productImgMob} src={imgMob} alt={title} />
            <Image
              className={styles.productImgDesc}
              src={imgDesc}
              alt={title}
            />
          </div>
          <div className={styles.productTextWrap}>
            <h3 className={styles.productTitle}>{title}</h3>
            <p className={`${styles.productText} ${inter.className}`}>{text}</p>
            <Link href={href} className={styles.productLink}>
              Mehr Info
              <BtnArrowIcon className={styles.productIcon} />
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
