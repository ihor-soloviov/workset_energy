import styles from './JobsSelect.module.css';
import Dropdown, { Option } from 'react-dropdown';
import React from 'react';

type JobsSelect = {
  label: string;
  options: Option[];
  value: string;
  placeholder: string;
  onChange: (e: Option) => void;
};

const JobsSelect = ({
  label,
  options,
  value,
  onChange,
  placeholder,
}: JobsSelect) => {
  return (
    <label className={styles.jobsLabel}>
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
        className={styles.jobsSelect}
        options={options}
        value={value}
        placeholder={placeholder}
      />
    </label>
  );
};

export default JobsSelect;
