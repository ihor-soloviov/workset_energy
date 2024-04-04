'use client';
import styles from './ProductList.module.css';
import { inter } from '@/utils/fonts';
import BtnArrowIcon from '/public/icons/small-product-arrow.svg';
import Image from 'next/image';
import Link from 'next/link';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { fromBotAnimation } from '@/utils/animations';
import { productsItems } from './productItems';

const ProductList = () => {
  return (
    <LazyMotion features={domAnimation}>
      <ul className={styles.productList}>
        {productsItems.map(({ text, title, href, imgMob, imgDesc }, index) => (
          <m.li
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0, once: true }}
            custom={index + 0.4}
            variants={fromBotAnimation}
            className={styles.productItem}
            key={title}
          >
            <div className={styles.productImgWrap}>
              <Image
                className={styles.productImgMob}
                src={imgMob}
                loading="lazy"
                alt={title}
              />
              <Image
                className={styles.productImgDesc}
                src={imgDesc}
                loading="lazy"
                alt={title}
              />
            </div>
            <div className={styles.productTextWrap}>
              <h3 className={styles.productTitle}>{title}</h3>
              <p className={`${styles.productText} ${inter.className}`}>
                {text}
              </p>
              <Link href={href} className={styles.productLink}>
                Mehr Info
                <BtnArrowIcon className={styles.productIcon} />
              </Link>
            </div>
          </m.li>
        ))}
      </ul>
    </LazyMotion>
  );
};

export default ProductList;
