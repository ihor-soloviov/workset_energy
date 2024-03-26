import styles from './ContactUsMap.module.css';
import Image from 'next/image';
import { inter } from '@/utils/fonts';
import mapMobImg from '/public/images/common/map-mob.jpg';
import mapDescImg from '/public/images/common/map-desc.jpg';
import AddressWrapIcon from '/public/icons/address-wrap.svg';
import PointIcon from '/public/icons/point.svg';

type ContactUsItem = {
  title: string;
  text: string;
  href: string;
};

const ContactUsMap = () => {
  const contactUsItems: ContactUsItem[] = [
    {
      title: 'E-Mail',
      text: 'office@work-set.eu',
      href: 'mailto:office@work-set.eu',
    },
    {
      title: 'Telefon-Nr.',
      text: '+49-73-114-613-210',
      href: 'tel:+4973114613210',
    },
  ];

  return (
    <div className={styles.contactUsImgWrap}>
      <Image src={mapMobImg} alt="map" className={styles.contactUsImgMob} />
      <Image src={mapDescImg} alt="map" className={styles.contactUsImgDesc} />
      <div className={styles.contactUsLocationWrap}>
        <p
          className={`${styles.contactUsLocationText} ${styles.address} ${inter.className}`}
        >
          Magirus-Deutz-Str. 12 89077 Ulm
        </p>
        <AddressWrapIcon className={styles.contactUsWrapIcon} />

        <PointIcon className={styles.contactUsPointIcon} />
      </div>
      <div className={styles.contactUsAddressMainWrap}>
        <div className={styles.contactUsAddressWrap}>
          <h3 className={styles.contactUsTitle}>Adresse</h3>
          <p
            className={`${styles.contactUsLink} ${styles.address} ${inter.className}`}
          >
            Magirus-Deutz-Str. 12
            <br className={styles.contactUsBr} />
            89077 Ulm
          </p>
        </div>
        <ul className={styles.contactUsList}>
          {contactUsItems.map(({ text, title, href }) => (
            <li key={title} className={styles.contactUsItem}>
              <h3 className={styles.contactUsTitle}>{title}</h3>
              <a
                className={`${styles.contactUsLink} ${inter.className}`}
                href={href}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactUsMap;
