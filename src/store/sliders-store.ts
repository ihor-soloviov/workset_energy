import { create } from 'zustand';

type State = {
  currIndex: number;
  prevIndex: number;
  nextIndex: number;
  updatePrevIndex: (length: number) => void;
  setIndex: (index: number, length: number) => void;
  animateTo: string;
  setAnimate: (direction: string) => void;
};

export const useSliderStore = create<State>(set => ({
  currIndex: 0,
  prevIndex: 0,
  nextIndex: 1,

  updatePrevIndex: length =>
    set(state => {
      const lastIndex = length - 1;
      return {
        prevIndex: state.currIndex === 0 ? lastIndex : state.currIndex - 1,
      };
    }),

  setIndex: (index, length) =>
    set(state => {
      const lastIndex = length - 1;
      const newIndex = Math.max(0, Math.min(index, lastIndex));

      if (state.currIndex === newIndex) {
        return {};
      }

      return {
        currIndex: newIndex,
        prevIndex: newIndex === 0 ? lastIndex : newIndex - 1,
        nextIndex: newIndex === lastIndex ? 0 : newIndex + 1,
      };
    }),

  animateTo: '',
  setAnimate: (direction: string) => set(state => ({ animateTo: direction })),
}));
