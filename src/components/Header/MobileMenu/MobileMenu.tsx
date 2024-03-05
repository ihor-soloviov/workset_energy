import styles from './MobileMenu.module.css';
import Container from '../../common/Container/Container';
import Icon from '../../common/Icon/Icon';
import Button from '../../common/Button/Button';
import Link from 'next/link';
import { inter } from '@/utils/fonts';

type MobileMenuProps = {
  handleMenuClick: () => void;
};

const MobileMenu = ({ handleMenuClick }: MobileMenuProps) => {
  const handleBtnSubmit = () => {};
  const handleLinkClick = () => handleMenuClick();

  return (
    <div className={styles.menu}>
      <div className={styles.menuTopWrap}>
        <Button
          handleClick={handleMenuClick}
          className={styles.menuCrossBtn}
          type="button"
        >
          <Icon
            width={44}
            height={44}
            name="cross"
            className={styles.menuCrossIcon}
          />
          <Icon
            width={44}
            height={44}
            name="cross-gray"
            className={styles.menuCrossIconGray}
          />
        </Button>
      </div>
      <div className={styles.menuLine}></div>
      <Container>
        <nav className={styles.menuNav}>
          <ul className={styles.menuTopList}>
            <li className={styles.menuTopItem}>
              <p className={styles.menuTopItemText}>PV-System</p>
              <Link
                onClick={handleLinkClick}
                className={styles.menuNavLink}
                href="/pvsystem"
              >
                <Icon
                  width={40}
                  height={40}
                  name="mob-menu-arrow"
                  className={styles.menuArrowIcon}
                />
                <Icon
                  width={40}
                  height={40}
                  name="mob-menu-arrow-white"
                  className={styles.menuArrowIconWhite}
                />
              </Link>
            </li>
            <li className={styles.menuTopItem}>
              <p className={styles.menuTopItemText}>Stormspeicher</p>
              <Link
                onClick={handleLinkClick}
                className={styles.menuNavLink}
                href="/stormspeicher"
              >
                <Icon
                  width={40}
                  height={40}
                  name="mob-menu-arrow"
                  className={styles.menuArrowIcon}
                />
                <Icon
                  width={40}
                  height={40}
                  name="mob-menu-arrow-white"
                  className={styles.menuArrowIconWhite}
                />
              </Link>
            </li>
            <li className={styles.menuTopItem}>
              <p className={styles.menuTopItemText}>Wallbox</p>
              <Link
                onClick={handleLinkClick}
                className={styles.menuNavLink}
                href="/wallbox"
              >
                <Icon
                  width={40}
                  height={40}
                  name="mob-menu-arrow"
                  className={styles.menuArrowIcon}
                />
                <Icon
                  width={40}
                  height={40}
                  name="mob-menu-arrow-white"
                  className={styles.menuArrowIconWhite}
                />
              </Link>
            </li>
            <li className={styles.menuTopItem}>
              <p className={styles.menuTopItemText}>Karrier</p>
              <Link
                onClick={handleLinkClick}
                className={styles.menuNavLink}
                href="/karrier"
              >
                <Icon
                  width={40}
                  height={40}
                  name="mob-menu-arrow"
                  className={styles.menuArrowIcon}
                />
                <Icon
                  width={40}
                  height={40}
                  name="mob-menu-arrow-white"
                  className={styles.menuArrowIconWhite}
                />
              </Link>
            </li>
            <li className={styles.menuTopItem}>
              <p className={styles.menuTopItemText}>Über uns</p>
              <Link
                onClick={handleLinkClick}
                className={styles.menuNavLink}
                href="/uberuns"
              >
                <Icon
                  width={40}
                  height={40}
                  name="mob-menu-arrow"
                  className={styles.menuArrowIcon}
                />
                <Icon
                  width={40}
                  height={40}
                  name="mob-menu-arrow-white"
                  className={styles.menuArrowIconWhite}
                />
              </Link>
            </li>
          </ul>
        </nav>
        <Button
          handleSubmit={handleBtnSubmit}
          text="Jetzt Berechnen"
          className={styles.menuSubmitBtn}
          type="button"
        >
          <Icon
            width={22}
            height={22}
            name="small-arrow-white"
            className={styles.menuSubmitIcon}
          />
          <Icon
            width={22}
            height={22}
            name="small-arrow-red"
            className={styles.menuSubmitIconRed}
          />
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
        <ul className={styles.menuBottomList}>
          <li className={styles.menuItem}>
            <a className={styles.menuBottomLink}>
              <Icon
                width={18}
                height={18}
                name="instagram-white"
                className={styles.menuSocialIcon}
              />
              <Icon
                width={18}
                height={18}
                name="instagram-red"
                className={styles.menuSocialIconRed}
              />
            </a>
          </li>
          <li className={styles.menuBottomItem}>
            <a className={styles.menuBottomLink}>
              <Icon
                width={18}
                height={18}
                name="facebook-white"
                className={styles.menuSocialIcon}
              />
              <Icon
                width={18}
                height={18}
                name="facebook-red"
                className={styles.menuSocialIconRed}
              />
            </a>
          </li>
          <li className={styles.menuBottomItem}>
            <a className={styles.menuBottomLink}>
              <Icon
                width={18}
                height={18}
                name="youtube-white"
                className={styles.menuSocialIcon}
              />
              <Icon
                width={18}
                height={18}
                name="youtube-red"
                className={styles.menuSocialIconRed}
              />
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default MobileMenu;
