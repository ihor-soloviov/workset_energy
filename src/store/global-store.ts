import { create } from 'zustand';

type State = {
  isDesktop: boolean;
  setIsDesktop: (value: boolean) => void;
};

export const useGlobalStore = create<State>(set => ({
  isDesktop: false,

  setIsDesktop: value => set(_state => ({ isDesktop: value })),
}));
