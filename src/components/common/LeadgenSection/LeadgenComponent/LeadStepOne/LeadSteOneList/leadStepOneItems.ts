import type { StepItem } from '../../../types';
import stepOneFirstIcon from '/public/icons/leadgen/step-1-1.svg';
import stepOneSecondIcon from '/public/icons/leadgen/step-1-2.svg';
import stepOneThirdIcon from '/public/icons/leadgen/step-1-3.svg';
import stepOneFourIcon from '/public/icons/leadgen/step-1-4.svg';

import stepOneFirstIconDesk from '/public/icons/leadgen/step-1-1-desk.svg';
import stepOneSecondIconDesk from '/public/icons/leadgen/step-1-2-desk.svg';
import stepOneThirdIconDesk from '/public/icons/leadgen/step-1-3-desk.svg';
import stepOneFourIconDesk from '/public/icons/leadgen/step-1-4-desk.svg';

import stepOneFirstIconDeskWhite from '/public/icons/leadgen/step-1-1-desk-white.svg';
import stepOneSecondIconDeskWhite from '/public/icons/leadgen/step-1-2-desk-white.svg';
import stepOneThirdIconDeskWhite from '/public/icons/leadgen/step-1-3-desk-white.svg';
import stepOneFourIconDeskWhite from '/public/icons/leadgen/step-1-4-desk-white.svg';

export const stepOneItems: StepItem[] = [
  {
    title: '3-8 kWp',
    iconMob: stepOneFirstIcon,
    iconDesk: stepOneFirstIconDesk,
    iconDeskWhite: stepOneFirstIconDeskWhite,
  },
  {
    title: '8-15 kWp',
    iconMob: stepOneSecondIcon,
    iconDesk: stepOneSecondIconDesk,
    iconDeskWhite: stepOneSecondIconDeskWhite,
  },
  {
    title: '15-30 kWp',
    iconMob: stepOneThirdIcon,
    iconDesk: stepOneThirdIconDesk,
    iconDeskWhite: stepOneThirdIconDeskWhite,
  },
  {
    title: '30+ kWp',
    iconMob: stepOneFourIcon,
    iconDesk: stepOneFourIconDesk,
    iconDeskWhite: stepOneFourIconDeskWhite,
  },
];
