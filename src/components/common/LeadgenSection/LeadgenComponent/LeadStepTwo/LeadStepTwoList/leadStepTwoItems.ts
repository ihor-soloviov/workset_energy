import type { StepItem } from '../../../types';

import stepTwoFirstIcon from '/public/icons/leadgen/step-2-1.svg';
import stepTwoSecondIcon from '/public/icons/leadgen/step-2-2.svg';
import stepTwoThirdIcon from '/public/icons/leadgen/step-2-3.svg';
import stepTwoFourIcon from '/public/icons/leadgen/step-2-4.svg';

export const stepTwoItems: StepItem[] = [
  { title: 'Speicher', icon: stepTwoFirstIcon, className: 'first' },
  { title: 'Wallbox', icon: stepTwoSecondIcon },
  { title: 'Optimierer', icon: stepTwoThirdIcon },
  { title: 'Wechselrichter', icon: stepTwoFourIcon },
];
