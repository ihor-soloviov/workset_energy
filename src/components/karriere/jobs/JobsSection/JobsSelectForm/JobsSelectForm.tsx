'use client';
import styles from './JobsSelectForm.module.css';
import { Option } from 'react-dropdown';
import { inter } from '@/utils/fonts';
import { useState } from 'react';
import { roleOptions, contractOptions, locationOptions } from '@/utils/select';
import JobsSelect from './JobsSelect/JobsSelect';

const JobsSelectForm = () => {
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
      <JobsSelect
        label="Role"
        options={roleOptions}
        value={roleValue}
        onChange={handleRoleChange}
        placeholder={'All'}
      />
      <JobsSelect
        label="Location"
        options={locationOptions}
        value={locationValue}
        onChange={handleLocationChange}
        placeholder={'Deutschland,Ulm'}
      />
      <JobsSelect
        label="Contract types"
        options={contractOptions}
        value={contractValue}
        onChange={handleContractChange}
        placeholder={'All contract types'}
      />
    </form>
  );
};

export default JobsSelectForm;
