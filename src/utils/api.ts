import axios from 'axios';

const formDataPost = async (formData: FormData, url: string) => {
  try {
    const { status } = await axios.post(url, formData);
    console.log(status);

    return status;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const fetchJobsData = async () => {
  try {
    const { data } = await axios.get('https://api.work-set.eu/api/jobs');

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const fetchJobData = async (id: string) => {
  try {
    const { data } = await axios.get(`https://api.work-set.eu/api/jobs/${id}`);

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export { formDataPost, fetchJobsData, fetchJobData };
