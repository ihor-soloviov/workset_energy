import { KarrierJobItems, SelectValues } from '@/types/infoTypes';

export const filteredJobs = (
  response: KarrierJobItems | null,
  selectValues: SelectValues,
) => {
  if (!response?.data) return [];

  const { role, location, contract } = selectValues;
  const filteredData = response.data.filter(({ attributes }) => {
    const roleMatch = role ? attributes.job_title.includes(role) : true;
    const locationMatch = location
      ? attributes.job_location.includes(location)
      : true;
    const contractMatch = contract ? attributes.job_type === contract : true;

    return roleMatch && locationMatch && contractMatch;
  });

  return filteredData;
};
