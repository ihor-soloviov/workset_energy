import styles from './OfferList.module.css';
import { inter, interTight } from '@/utils/fonts';
import Image from 'next/image';
import { offerItems, OfferItem } from './offerItems';
import LinkArrowIcon from '/public/icons/small-product-arrow.svg';
import Link from 'next/link';
import useObserver from '@/hooks/useObserver';

type OfferListProps = {
  showItems: boolean;
};
const OfferList = ({ showItems }: OfferListProps) => {
  useObserver(`.${styles.offerItem}`, `${styles.offerItemVisible}`);
  const currentItems = (offerItems: OfferItem[]) =>
    showItems ? offerItems : offerItems.slice(0, 3);

  return (
    <ul className={`${styles.offerList} ${inter.className}`}>
      {currentItems(offerItems).map(
        ({ mainTitle, mainText, title, text, timeType, mobile, desktop }) => (
          <li className={styles.offerItem} key={mainTitle}>
            <Image
              className={styles.offerImgMob}
              loading="lazy"
              placeholder="blur"
              alt={title}
              src={mobile}
            />
            <Image
              className={styles.offerImgDesk}
              loading="lazy"
              placeholder="blur"
              alt={title}
              src={desktop}
            />
            <div className={styles.offerMainWrap}>
              <div className={styles.offerTopWrap}>
                <h3
                  className={`${styles.offerTopTitle} ${interTight.className}`}
                >
                  {mainTitle}
                </h3>
                <p className={styles.offerTopText}>{mainText}</p>
                <div className={styles.offerTimeWrap}>
                  <p className={styles.offerTime}>{timeType}</p>
                </div>
              </div>
              <div className={styles.offerBottomWrap}>
                <h4 className={styles.offerBottomTitle}>{title}</h4>
                <p className={styles.offerBottomText}>{text}</p>
                <Link className={styles.offerLink} href="/karriere/jobs">
                  Mehr Info
                  <LinkArrowIcon className={styles.offerIcon} />
                </Link>
              </div>
            </div>
          </li>
        ),
      )}
    </ul>
  );
};

export default OfferList;
