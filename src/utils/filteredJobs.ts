import { KarrierJobItems, SelectValues } from '@/types/infoTypes';

export const filteredJobs = (
  response: KarrierJobItems | null,
  selectValues: SelectValues,
) => {
  const filteredData = response?.data.filter(({ attributes }) => {
    const roleMatch = selectValues.role
      ? attributes.job_title.includes(selectValues.role)
      : true;
    const locationMatch = selectValues.location
      ? attributes.job_location.includes(selectValues.location)
      : true;
    const contractMatch = selectValues.contract
      ? attributes.job_type === selectValues.contract
      : true;

    return roleMatch && locationMatch && contractMatch;
  });
  return filteredData;
};
