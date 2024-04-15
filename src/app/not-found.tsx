import styles from './not-found.module.css';
import { navLinkItems } from '@/components/Header/HeaderNavList/navLinkItems';
import Link from 'next/link';
import ErrorIcon from '/public/icons/404.svg';
import EnergyManIcon from '/public/icons/energy-man.svg';
import { inter } from '@/utils/fonts';
const NotFound = () => {
  return (
    <section className={`${styles.errorSection} ${inter.className}`}>
      <div className={styles.errorContainer}>
        <div className={styles.errorIconWrap}>
          <EnergyManIcon className={styles.errorManIcon} />
          <ErrorIcon className={styles.errorIcon} />
        </div>

        <p className={styles.errorTopText}>Seite nicht gefunden</p>
        <h2 className={styles.errorTitle}>Huch! Diese Seite gibt es nicht</h2>
        <p className={styles.errorBottomText}>
          Die Seite, die du suchst, kann nicht gefunden werden (Fehler 404).
          Aber keine Sorge, unser Team von digitalen Entdeckern ist unermüdlich
          auf der Suche nach den fehlenden Inhalten. Nimm dir doch in der
          Zwischenzeit einen Moment Zeit, um unsere Website zu erkunden
        </p>
        <Link className={styles.errorBtn} href="/">
          Zurück zur Homepage
        </Link>
        <nav className={styles.errorNav}>
          <ul className={styles.errorList}>
            {navLinkItems.map(({ title, linkTo }) => (
              <li className={styles.errorItem} key={title}>
                {title !== 'Home' && title !== 'Über uns' && (
                  <Link className={styles.errorLink} href={linkTo}>
                    {title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default NotFound;
