import type { StepItem } from '../../../types';

import stepTwoFirstIcon from '/public/icons/leadgen/step-2-1.svg';
import stepTwoSecondIcon from '/public/icons/leadgen/step-2-2.svg';
import stepTwoThirdIcon from '/public/icons/leadgen/step-2-3.svg';
import stepTwoFourIcon from '/public/icons/leadgen/step-2-4.svg';

import stepTwoFirstIconDesk from '/public/icons/leadgen/step-2-1-desk.svg';
import stepTwoSecondIconDesk from '/public/icons/leadgen/step-2-2-desk.svg';
import stepTwoThirdIconDesk from '/public/icons/leadgen/step-2-3-desk.svg';
import stepTwoFourIconDesk from '/public/icons/leadgen/step-2-4-desk.svg';

import stepTwoFirstIconDeskWhite from '/public/icons/leadgen/step-2-1-desk-white.svg';
import stepTwoSecondIconDeskWhite from '/public/icons/leadgen/step-2-2-desk-white.svg';
import stepTwoThirdIconDeskWhite from '/public/icons/leadgen/step-2-3-desk-white.svg';
import stepTwoFourIconDeskWhite from '/public/icons/leadgen/step-2-4-desk-white.svg';

export const stepTwoItems: StepItem[] = [
  {
    title: 'Speicher',
    iconMob: stepTwoFirstIcon,
    iconDesk: stepTwoFirstIconDesk,
    iconDeskWhite: stepTwoFirstIconDeskWhite,
    className: 'first',
  },
  {
    title: 'Wallbox',
    iconMob: stepTwoSecondIcon,
    iconDesk: stepTwoSecondIconDesk,
    iconDeskWhite: stepTwoSecondIconDeskWhite,
  },
  {
    title: 'Optimierer',
    iconMob: stepTwoThirdIcon,
    iconDesk: stepTwoThirdIconDesk,
    iconDeskWhite: stepTwoThirdIconDeskWhite,
  },
  {
    title: 'Wechselrichter',
    iconMob: stepTwoFourIcon,
    iconDesk: stepTwoFourIconDesk,
    iconDeskWhite: stepTwoFourIconDeskWhite,
  },
];
