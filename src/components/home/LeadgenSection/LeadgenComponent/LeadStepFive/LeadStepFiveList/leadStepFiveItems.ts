import type { StepItem } from '../../../types';
import StepFiveFirstIcon from '/public/icons/leadgen/step-5-1.svg';
import StepFiveSecondIcon from '/public/icons/leadgen/step-5-2.svg';
import StepFiveThirdIcon from '/public/icons/leadgen/step-5-3.svg';
import StepFiveFourIcon from '/public/icons/leadgen/step-5-4.svg';

export const stepFiveItems: StepItem[] = [
  { title: 'bis zu 30 kWp', icon: StepFiveFirstIcon },
  { title: '30 - 100 kWp', icon: StepFiveSecondIcon },
  { title: '> 100 kWp', icon: StepFiveThirdIcon },
  { title: 'Weiß ich nicht?!', icon: StepFiveFourIcon },
];
