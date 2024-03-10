import styles from './MobileMenu.module.css';
import Container from '../../common/Container/Container';
import MobileNavList from './MobileNavList/MobileNavList';
import Button from '../../common/Button/Button';
import { inter } from '@/utils/fonts';
import MobileSocialList from './MobileSocialList/MobileSocialList';
import MenuBtnIcon from '/public/icons/small-arrow-btn.svg';
import MenuCrossIcon from '/public/icons/cross.svg';
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
          <MenuCrossIcon className={styles.menuCrossIcon} />
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
          <MenuBtnIcon className={styles.menuBtnIcon} />
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
