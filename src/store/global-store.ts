import { create } from 'zustand';
import { PopupAction } from '@/types/infoTypes';
type State = {
  isDesktop: boolean;
  popupAction: PopupAction;
  setIsDesktop: (value: boolean) => void;
  setPopupAction: (value: PopupAction) => void;
};

export const useGlobalStore = create<State>(set => ({
  isDesktop: false,
  popupAction: { visible: false, status: '' },
  setIsDesktop: value => set(_state => ({ isDesktop: value })),
  setPopupAction: value => set(_state => ({ popupAction: value })),
}));
