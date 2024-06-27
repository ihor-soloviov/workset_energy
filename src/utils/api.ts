import axios from 'axios';
import { PopupAction } from '@/types/infoTypes';

const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL ?? '';
const baseStrapiUrl = process.env.NEXT_PUBLIC_BASE_STRAPI_URL ?? '';

const formDataPost = async (
  formData: FormData,
  url: string,
  setPopupAction?: (action: PopupAction) => void,
) => {
  try {
    const { data } = await axios.post(`${baseUrl}${url}`, formData);
    setPopupAction && setPopupAction({ visible: true, status: 'success' });
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    setPopupAction && setPopupAction({ visible: true, status: 'error' });
  } finally {
    setTimeout(
      () => setPopupAction && setPopupAction({ visible: false, status: '' }),
      1000,
    );
  }
};

const leadgenExtraFormDataPost = async (
  formData: FormData,
  leadId: number | null,
  url: string,
  setPopupAction?: (action: PopupAction) => void,
) => {
  try {
    await axios.put(`${baseUrl}${url}/${leadId}`, formData);

    setPopupAction && setPopupAction({ visible: true, status: 'success' });
  } catch (error) {
    console.error('Error fetching data:', error);
    setPopupAction && setPopupAction({ visible: true, status: 'error' });
  } finally {
    setTimeout(
      () => setPopupAction && setPopupAction({ visible: false, status: '' }),
      1000,
    );
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

export { formDataPost, leadgenExtraFormDataPost, fetchJobsData, fetchJobData };
