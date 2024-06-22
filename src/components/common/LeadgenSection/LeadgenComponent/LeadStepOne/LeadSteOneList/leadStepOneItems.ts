import type { StepItem } from '../../../types';
import stepOneFirstIcon from '/public/icons/leadgen/step-1-1.svg';
import stepOneSecondIcon from '/public/icons/leadgen/step-1-2.svg';
import stepOneThirdIcon from '/public/icons/leadgen/step-1-3.svg';
import stepOneFourIcon from '/public/icons/leadgen/step-1-4.svg';

export const stepOneItems: StepItem[] = [
  { title: '3-8 kWp', icon: stepOneFirstIcon },
  { title: '8-15 kWp', icon: stepOneSecondIcon },
  { title: '15-30 kWp', icon: stepOneThirdIcon },
  { title: '30+ kWp', icon: stepOneFourIcon },
];
