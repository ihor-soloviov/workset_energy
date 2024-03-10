import styles from './MobileMenu.module.css';
import Container from '../../common/Container/Container';
import MobileNavList from './MobileNavList/MobileNavList';
import Button from '../../common/Button/Button';
import { inter } from '@/utils/fonts';
import MobileSocialList from './MobileSocialList/MobileSocialList';

type MobileMenuProps = {
  handleMenuClick: () => void;
};

const MobileMenu = ({ handleMenuClick }: MobileMenuProps) => {
  const handleBtnSubmit = () => {};

  return (
    <div className={styles.menu}>
      <div className={styles.menuTopWrap}>
        <Button
          handleClick={handleMenuClick}
          className={styles.menuCrossBtn}
          type="button"
        >
          <svg
            className={styles.menuCrossIcon}
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.8993 12.1001L12.1003 31.8991"
              stroke=""
              strokeWidth="1.5"
            />
            <path
              d="M31.899 31.8994L12.1001 12.1004"
              stroke=""
              strokeWidth="1.5"
            />
          </svg>
        </Button>
      </div>
      <div className={styles.menuLine}></div>
      <Container>
        <nav className={styles.menuNav}>
          <MobileNavList handleMenuClick={handleMenuClick} />
        </nav>
        <Button
          handleSubmit={handleBtnSubmit}
          text="Jetzt Berechnen"
          className={styles.menuBtn}
          type="button"
        >
          <svg
            className={styles.menuBtnIcon}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16675 10H15.0001M10.8334 5L15.2442 9.41074C15.5696 9.73618 15.5696 10.2638 15.2442 10.5893L10.8334 15"
              stroke=""
              strokeWidth="1.67"
              strokeLinecap="round"
            />
          </svg>
        </Button>
        <ul className={`${styles.menuList} ${inter.className}`}>
          <li className={styles.menuItem}>
            <p className={styles.menuItemText}>Address</p>
            <p className={styles.menuLink}>Magirus-Deutz-Str, 1289077 Ulm</p>
          </li>
          <li className={styles.menuItem}>
            <p className={styles.menuItemText}>E-mail</p>
            <a href="mailto:office@work-set.eu" className={styles.menuLink}>
              office@work-set.eu
            </a>
          </li>
          <li className={styles.menuItem}>
            <p className={styles.menuItemText}>Telefonnummer</p>
            <a href="tel:+4973114613210" className={styles.menuLink}>
              +49-73-114-613-210
            </a>
          </li>
        </ul>
        <MobileSocialList />
      </Container>
    </div>
  );
};

export default MobileMenu;
