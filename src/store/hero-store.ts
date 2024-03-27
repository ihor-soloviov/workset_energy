import { create } from 'zustand';

type ThankYouStoreState = {
  isStylesChanged: boolean;
  toggleStyles: () => void;
};

export const useThankYouStore = create<ThankYouStoreState>(set => ({
  isStylesChanged: false,
  toggleStyles: () =>
    set(state => ({ isStylesChanged: !state.isStylesChanged })),
}));
