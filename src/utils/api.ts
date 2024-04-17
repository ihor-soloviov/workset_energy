import axios from 'axios';

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL
  ? process.env.NEXT_PUBLIC_BASE_API_URL
  : '';

const baseStrapiUrl = process.env.NEXT_PUBLIC_BASE_STRAPI_URL
  ? process.env.NEXT_PUBLIC_BASE_STRAPI_URL
  : '';

const formDataPost = async (formData: FormData, url: string) => {
  try {
    const { status } = await axios.post(`${baseUrl}${url}`, formData);
    console.log(status);

    return status;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const fetchJobsData = async () => {
  try {
    const { data } = await axios.get(`${baseStrapiUrl}`);

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const fetchJobData = async (id: string) => {
  try {
    const { data } = await axios.get(`${baseStrapiUrl}${id}`);

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export { formDataPost, fetchJobsData, fetchJobData };
