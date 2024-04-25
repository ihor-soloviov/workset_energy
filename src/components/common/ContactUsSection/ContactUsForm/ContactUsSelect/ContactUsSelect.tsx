import styles from '../ContactUsForm.module.css';
import Dropdown, { Option } from 'react-dropdown';
import React from 'react';

type ContactUsSelect = {
  label: string;
  options: Option[];
  value: string;
  placeholder: string;
  onChange: (e: Option) => void;
};

const ContactUsSelect = ({
  label,
  options,
  value,
  onChange,
  placeholder,
}: ContactUsSelect) => {
  return (
    <label className={styles.contactUsLabel}>
      {label}
      <Dropdown
        onChange={onChange}
        arrowOpen={
          <svg
            className={styles.dropIconOpen}
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
            className={styles.dropIconClose}
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
        className={styles.contactSelect}
        options={options}
        value={value}
        placeholder={placeholder}
      />
    </label>
  );
};

export default ContactUsSelect;
