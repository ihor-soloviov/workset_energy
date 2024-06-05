import styles from './FormSelect.module.css';
import Dropdown, { Option } from 'react-dropdown';
import React from 'react';
import { usePathname } from 'next/navigation';

type FormSelect = {
  label: string;
  options: Option[];
  value: string;
  placeholder: string;
  className?: string;
  placeholderClassName?: string;
  onChange: (e: Option) => void;
};

const FormSelect = ({
  label,
  options,
  value,
  onChange,
  placeholder,
  placeholderClassName,
  className,
}: FormSelect) => {
  return (
    <label
      id="dropSelect"
      className={`${styles.selectLabel} ${className ? styles[className] : ''}`}
    >
      {label}
      <Dropdown
        onChange={onChange}
        arrowOpen={
          <svg
            className={styles.selectIconOpen}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5 11.6667L9.41075 7.25594C9.73618 6.9305 10.2638 6.9305 10.5893 7.25594L15 11.6667"
              stroke=""
              strokeWidth="1.67"
              strokeLinecap="round"
            />
          </svg>
        }
        arrowClosed={
          <svg
            className={styles.selectIconClose}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M5 11.6667L9.41075 7.25594C9.73618 6.9305 10.2638 6.9305 10.5893 7.25594L15 11.6667"
              stroke=""
              strokeWidth="1.67"
              strokeLinecap="round"
            />
          </svg>
        }
        className={`${styles.select} ${className ? styles[className] : ''} ${placeholderClassName ? styles[placeholderClassName] : ''}`}
        options={options}
        value={value}
        placeholder={placeholder}
      />
    </label>
  );
};

export default FormSelect;
