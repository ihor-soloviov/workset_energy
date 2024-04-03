'use client';
import styles from './JobsSelect.module.css';
import Dropdown, { Option } from 'react-dropdown';
import { inter } from '@/utils/fonts';

import { useState } from 'react';
const roleOptions = [
  { value: 'role-1', label: 'role-1' },
  { value: 'role-2', label: 'role-2' },
  { value: 'role-3', label: 'role-3' },
];
const locationOptions = [
  { value: 'location-1', label: 'location-1' },
  { value: 'location-2', label: 'location-2' },
  { value: 'location-3', label: 'location-3' },
];
const contractOptions = [
  { value: 'contract-1', label: 'contract-1' },
  { value: 'contract-2', label: 'contract-2' },
  { value: 'contract-3', label: 'contract-3' },
];

const JobsSelect = () => {
  const [roleValue, setRoleValue] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [contractValue, setContractValue] = useState('');
  console.log('roleValue', roleValue);
  console.log('locationValue', locationValue);
  console.log('contractValue', contractValue);

  const handleRoleChange = (e: Option) => setRoleValue(e.value);
  const handleLocationChange = (e: Option) => setLocationValue(e.value);
  const handleContractChange = (e: Option) => setContractValue(e.value);
  return (
    <form className={`${styles.jobsSelectForm} ${inter.className}`}>
      <label className={styles.jobsLabel}>
        Role
        <Dropdown
          onChange={handleRoleChange}
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
          options={roleOptions}
          value={roleValue}
          placeholder="All"
        />
      </label>
      <label className={styles.jobsLabel}>
        Location
        <Dropdown
          onChange={handleLocationChange}
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
          options={locationOptions}
          value={locationValue}
          placeholder="Deutschland,Ulm"
        />
      </label>
      <label className={styles.jobsLabel}>
        Contract types
        <Dropdown
          onChange={handleContractChange}
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
          className={styles.jobsSelect}
          options={contractOptions}
          value={contractValue}
          placeholder="All contract types"
        />
      </label>
    </form>
  );
};

export default JobsSelect;
