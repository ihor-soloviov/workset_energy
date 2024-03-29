import { create } from 'zustand';

type State = {
  currIndex: number;
  prevIndex: number;
  nextIndex: number;
  setIndex: (index: number) => void;
};

export const useSliderStore = create<State>(set => ({
  currIndex: 0,
  prevIndex: 5,
  nextIndex: 1,

  setIndex: (index: number) =>
    set(state => {
      const newIndex = Math.max(0, Math.min(index, 5));

      if (state.currIndex === newIndex) {
        return {};
      }

      return {
        currIndex: newIndex,
        prevIndex: newIndex === 0 ? 5 : newIndex - 1,
        nextIndex: newIndex === 5 ? 0 : newIndex + 1,
      };
    }),
}));
