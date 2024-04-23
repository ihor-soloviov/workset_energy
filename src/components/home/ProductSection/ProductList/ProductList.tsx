'use client';

import styles from './ProductList.module.css';
import { inter } from '@/utils/fonts';
import BtnArrowIcon from '/public/icons/small-product-arrow.svg';
import Image from 'next/image';
import Link from 'next/link';
import { productsItems } from './productItems';
import useObserver from '@/hooks/useObserver';

const ProductList = () => {
  useObserver(`.${styles.productItem}`, `${styles.productItemVisible}`);

  return (
    <ul className={styles.productList}>
      {productsItems.map(({ text, title, href, imgMob, imgDesc }, index) => (
        <li className={styles.productItem} key={title}>
          <div className={styles.productImgWrap}>
            <Image
              quality={100}
              className={styles.productImgMob}
              src={imgMob}
              loading="lazy"
              alt={title}
            />
            <Image
              quality={100}
              className={styles.productImgDesc}
              src={imgDesc}
              loading="lazy"
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
