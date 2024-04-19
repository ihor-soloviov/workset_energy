import axios from 'axios';
import { PopupAction } from '@/types/infoTypes';
const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL ?? '';

const baseStrapiUrl = process.env.NEXT_PUBLIC_BASE_STRAPI_URL ?? '';

const formDataPost = async (
  formData: FormData,
  url: string,
  setPopupAction: (action: PopupAction) => void,
) => {
  try {
    await axios.post(`${baseUrl}${url}`, formData);
    setPopupAction({ visible: true, status: 'success' });
  } catch (error) {
    console.error('Error fetching data:', error);
    setPopupAction({ visible: true, status: 'error' });
  } finally {
    setTimeout(() => setPopupAction({ visible: false, status: '' }), 3000);
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
