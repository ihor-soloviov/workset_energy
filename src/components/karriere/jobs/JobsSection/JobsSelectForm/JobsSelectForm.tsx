import styles from './JobsSelectForm.module.css';
import { Option } from 'react-dropdown';
import { inter } from '@/utils/fonts';
import { roleOptions, contractOptions, locationOptions } from '@/utils/select';
import JobsSelect from './JobsSelect/JobsSelect';
import { SelectValues } from '@/types/infoTypes';

type JobsSelectFormProps = {
  selectValues: SelectValues;
  handleSelectChange: (field: string, value: string) => void;
};

const JobsSelectForm = ({
  selectValues,
  handleSelectChange,
}: JobsSelectFormProps) => {
  return (
    <form className={`${styles.jobsSelectForm} ${inter.className}`}>
      <JobsSelect
        label="Role"
        options={roleOptions}
        value={selectValues.role}
        onChange={(e: Option) => handleSelectChange('role', e.value)}
        placeholder={'All roles'}
      />
      <JobsSelect
        label="Location"
        options={locationOptions}
        value={selectValues.location}
        onChange={(e: Option) => handleSelectChange('location', e.value)}
        placeholder={'All locations'}
      />
      <JobsSelect
        label="Contract types"
        options={contractOptions}
        value={selectValues.contract}
        onChange={(e: Option) => handleSelectChange('contract', e.value)}
        placeholder={'All contract types'}
      />
    </form>
  );
};

export default JobsSelectForm;
