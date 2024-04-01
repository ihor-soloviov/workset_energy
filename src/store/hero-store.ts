import { create } from 'zustand';

type ThankYouStoreState = {
  isThankYouOpen: boolean;
  setStylesChangedToTrue: () => void;
  setStylesChangedToFalse: () => void;
};

export const useThankYouStore = create<ThankYouStoreState>(set => ({
  isThankYouOpen: false,
  setStylesChangedToTrue: () => set(state => ({ isThankYouOpen: true })),
  setStylesChangedToFalse: () => set(state => ({ isThankYouOpen: false })),
}));
