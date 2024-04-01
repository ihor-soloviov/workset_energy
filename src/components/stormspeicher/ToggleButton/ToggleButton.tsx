'use client';
import React from 'react';
import styles from './ToggleButton.module.css';

type Props = {
  toggleDarkMode: () => void;
};

const ToggleButton: React.FC<Props> = ({ toggleDarkMode }) => (
  <>
    <input
      className={styles.toggleButton}
      type="checkbox"
      id="switch"
      onClick={toggleDarkMode}
    />
    <label className={styles.toggleLabel} htmlFor="switch"></label>
  </>
);

export default ToggleButton;
