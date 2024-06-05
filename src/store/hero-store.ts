import { create } from 'zustand';

type ModalStoreState = {
  isModalOpen: boolean;
  setIsModalOpen: (newValue: boolean) => void;
  handleModal: () => void;
};

export const useModalStore = create<ModalStoreState>(set => ({
  isModalOpen: false,
  setIsModalOpen: newValue => set(_state => ({ isModalOpen: newValue })),
  handleModal: () => set(state => ({ isModalOpen: !state.isModalOpen })),
}));
