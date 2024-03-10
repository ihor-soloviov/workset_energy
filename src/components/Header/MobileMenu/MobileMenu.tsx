import styles from './MobileMenu.module.css';
import Container from '../../common/Container/Container';

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
          <ul className={styles.menuTopList}>
            <li className={styles.menuTopItem}>
              <p className={styles.menuTopItemText}>PV-System</p>
              <Link
                onClick={handleLinkClick}
                className={styles.menuNavLink}
                href="/pvsystem"
              >
                <svg
                  className={styles.menuArrowIcon}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5454 27.3096L26.2121 14.7927"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.0154 14.2231L26.2124 14.7921L26.7427 27.8779"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
            <li className={styles.menuTopItem}>
              <p className={styles.menuTopItemText}>Stormspeicher</p>
              <Link
                onClick={handleLinkClick}
                className={styles.menuNavLink}
                href="/stormspeicher"
              >
                <svg
                  className={styles.menuArrowIcon}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5454 27.3096L26.2121 14.7927"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.0154 14.2231L26.2124 14.7921L26.7427 27.8779"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
            <li className={styles.menuTopItem}>
              <p className={styles.menuTopItemText}>Wallbox</p>
              <Link
                onClick={handleLinkClick}
                className={styles.menuNavLink}
                href="/wallbox"
              >
                <svg
                  className={styles.menuArrowIcon}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5454 27.3096L26.2121 14.7927"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.0154 14.2231L26.2124 14.7921L26.7427 27.8779"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
            <li className={styles.menuTopItem}>
              <p className={styles.menuTopItemText}>Karrier</p>
              <Link
                onClick={handleLinkClick}
                className={styles.menuNavLink}
                href="/karrier"
              >
                <svg
                  className={styles.menuArrowIcon}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5454 27.3096L26.2121 14.7927"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.0154 14.2231L26.2124 14.7921L26.7427 27.8779"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
            <li className={styles.menuTopItem}>
              <p className={styles.menuTopItemText}>Über uns</p>
              <Link
                onClick={handleLinkClick}
                className={styles.menuNavLink}
                href="/uberuns"
              >
                <svg
                  className={styles.menuArrowIcon}
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5454 27.3096L26.2121 14.7927"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.0154 14.2231L26.2124 14.7921L26.7427 27.8779"
                    stroke=""
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
          </ul>
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
        <ul className={styles.menuBottomList}>
          <li className={styles.menuItem}>
            <a className={styles.menuBottomLink}>
              <svg
                className={styles.menuSocialIcon}
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1191_61)">
                  <path
                    d="M9.00073 6.75073C8.404 6.75073 7.8317 6.98778 7.40974 7.40974C6.98778 7.8317 6.75073 8.404 6.75073 9.00073C6.75073 9.59747 6.98778 10.1698 7.40974 10.5917C7.8317 11.0137 8.404 11.2507 9.00073 11.2507C9.59747 11.2507 10.1698 11.0137 10.5917 10.5917C11.0137 10.1698 11.2507 9.59747 11.2507 9.00073C11.2507 8.404 11.0137 7.8317 10.5917 7.40974C10.1698 6.98778 9.59747 6.75073 9.00073 6.75073ZM9.00073 5.25073C9.99529 5.25073 10.9491 5.64582 11.6524 6.34908C12.3556 7.05234 12.7507 8.00617 12.7507 9.00073C12.7507 9.99529 12.3556 10.9491 11.6524 11.6524C10.9491 12.3556 9.99529 12.7507 9.00073 12.7507C8.00617 12.7507 7.05234 12.3556 6.34908 11.6524C5.64582 10.9491 5.25073 9.99529 5.25073 9.00073C5.25073 8.00617 5.64582 7.05234 6.34908 6.34908C7.05234 5.64582 8.00617 5.25073 9.00073 5.25073ZM13.8757 5.06323C13.8757 5.31187 13.777 5.55033 13.6011 5.72614C13.4253 5.90196 13.1869 6.00073 12.9382 6.00073C12.6896 6.00073 12.4511 5.90196 12.2753 5.72614C12.0995 5.55033 12.0007 5.31187 12.0007 5.06323C12.0007 4.81459 12.0995 4.57614 12.2753 4.40032C12.4511 4.2245 12.6896 4.12573 12.9382 4.12573C13.1869 4.12573 13.4253 4.2245 13.6011 4.40032C13.777 4.57614 13.8757 4.81459 13.8757 5.06323ZM9.00073 3.00073C7.14523 3.00073 6.84223 3.00598 5.97898 3.04423C5.39098 3.07198 4.99648 3.15073 4.63048 3.29323C4.30498 3.41923 4.07023 3.56998 3.82048 3.82048C3.58574 4.04728 3.40525 4.32417 3.29248 4.63048C3.14998 4.99798 3.07123 5.39173 3.04423 5.97898C3.00523 6.80698 3.00073 7.09648 3.00073 9.00073C3.00073 10.8562 3.00598 11.1592 3.04423 12.0225C3.07198 12.6097 3.15073 13.005 3.29248 13.3702C3.41998 13.6965 3.56998 13.9312 3.81898 14.1802C4.07173 14.4322 4.30648 14.583 4.62898 14.7075C4.99948 14.8507 5.39398 14.9302 5.97898 14.9572C6.80698 14.9962 7.09648 15.0007 9.00073 15.0007C10.8562 15.0007 11.1592 14.9955 12.0225 14.9572C12.609 14.9295 13.0042 14.8507 13.3702 14.709C13.695 14.5822 13.9312 14.4315 14.1802 14.1825C14.433 13.9297 14.5837 13.695 14.7082 13.3725C14.8507 13.0027 14.9302 12.6075 14.9572 12.0225C14.9962 11.1945 15.0007 10.905 15.0007 9.00073C15.0007 7.14523 14.9955 6.84223 14.9572 5.97898C14.9295 5.39248 14.8507 4.99648 14.7082 4.63048C14.5952 4.32448 14.415 4.0477 14.181 3.82048C13.9543 3.58562 13.6774 3.40511 13.371 3.29248C13.0035 3.14998 12.609 3.07123 12.0225 3.04423C11.1945 3.00523 10.905 3.00073 9.00073 3.00073ZM9.00073 1.50073C11.0385 1.50073 11.2927 1.50823 12.0922 1.54573C12.891 1.58323 13.4347 1.70848 13.9132 1.89448C14.4082 2.08498 14.8252 2.34298 15.2422 2.75923C15.6236 3.13415 15.9187 3.58767 16.107 4.08823C16.2922 4.56598 16.4182 5.11048 16.4557 5.90923C16.491 6.70873 16.5007 6.96298 16.5007 9.00073C16.5007 11.0385 16.4932 11.2927 16.4557 12.0922C16.4182 12.891 16.2922 13.4347 16.107 13.9132C15.9192 14.4141 15.6241 14.8677 15.2422 15.2422C14.8672 15.6235 14.4137 15.9185 13.9132 16.107C13.4355 16.2922 12.891 16.4182 12.0922 16.4557C11.2927 16.491 11.0385 16.5007 9.00073 16.5007C6.96298 16.5007 6.70873 16.4932 5.90923 16.4557C5.11048 16.4182 4.56673 16.2922 4.08823 16.107C3.58748 15.9191 3.13388 15.6239 2.75923 15.2422C2.37779 14.8674 2.08268 14.4138 1.89448 13.9132C1.70848 13.4355 1.58323 12.891 1.54573 12.0922C1.51048 11.2927 1.50073 11.0385 1.50073 9.00073C1.50073 6.96298 1.50823 6.70873 1.54573 5.90923C1.58323 5.10973 1.70848 4.56673 1.89448 4.08823C2.08216 3.58737 2.37734 3.13372 2.75923 2.75923C3.13399 2.37766 3.58755 2.08253 4.08823 1.89448C4.56673 1.70848 5.10973 1.58323 5.90923 1.54573C6.70873 1.51048 6.96298 1.50073 9.00073 1.50073Z"
                    fill=""
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1191_61">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
          <li className={styles.menuBottomItem}>
            <a className={styles.menuBottomLink}>
              <svg
                className={styles.menuSocialIcon}
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5015 10.1257H12.3765L13.1265 7.12573H10.5015V5.62573C10.5015 4.8537 10.5015 4.12573 12.0015 4.12573H13.1265V1.60581C12.8822 1.57337 11.9587 1.50073 10.9836 1.50073C8.94777 1.50073 7.50146 2.74338 7.50146 5.02551V7.12573H5.25146V10.1257H7.50146V16.5007H10.5015V10.1257Z"
                  fill=""
                />
              </svg>
            </a>
          </li>
          <li className={styles.menuBottomItem}>
            <a className={styles.menuBottomLink}>
              <svg
                className={styles.menuSocialIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill=""
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.16252 2.66675C8.51859 2.66871 9.40945 2.67732 10.356 2.71523L10.6916 2.72987C11.6446 2.77499 12.5968 2.85207 13.0691 2.98375C13.699 3.16071 14.1941 3.67708 14.3615 4.33163C14.6279 5.37102 14.6613 7.39968 14.6654 7.89061L14.666 7.99235V7.99948C14.666 7.99948 14.666 8.00195 14.666 8.00668L14.6654 8.10841C14.6613 8.59935 14.6279 10.628 14.3615 11.6674C14.1918 12.3243 13.6967 12.8407 13.0691 13.0153C12.5968 13.1469 11.6446 13.224 10.6916 13.2691L10.356 13.2837C9.40945 13.3217 8.51859 13.3303 8.16252 13.3323L8.00625 13.3328H7.99932C7.99932 13.3328 7.99699 13.3328 7.99239 13.3328L7.83625 13.3323C7.08265 13.3281 3.93173 13.2941 2.92959 13.0153C2.29965 12.8383 1.80453 12.3219 1.63717 11.6674C1.37072 10.628 1.33741 8.59935 1.33325 8.10841V7.89061C1.33741 7.39968 1.37072 5.37102 1.63717 4.33163C1.80685 3.67465 2.30197 3.15829 2.92959 2.98375C3.93173 2.7049 7.08265 2.67089 7.83625 2.66675H8.16252ZM6.66599 5.66617V10.3328L10.666 7.99948L6.66599 5.66617Z"
                  fill=""
                />
              </svg>
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default MobileMenu;
