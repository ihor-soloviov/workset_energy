import { create } from 'zustand';

type ThankYouStoreState = {
  isThankYouOpen: boolean;
  setIsThankYouOpen: () => void;
  isModalOpen: boolean;
  setIsModalOpen: (newValue: boolean) => void;
  handleModal: () => void;
  addStyles: () => void;
  removeStyles: () => void;
};

export const useThankYouStore = create<ThankYouStoreState>(set => ({
  isThankYouOpen: false,
  setIsThankYouOpen: () =>
    set(state => ({ isThankYouOpen: !state.isThankYouOpen })),
  isModalOpen: false,
  setIsModalOpen: newValue => set(_state => ({ isModalOpen: newValue })),
  handleModal: () => set(state => ({ isModalOpen: !state.isModalOpen })),
  addStyles: () => set(_state => ({ isThankYouOpen: true })),
  removeStyles: () => set(_state => ({ isThankYouOpen: false })),
}));
