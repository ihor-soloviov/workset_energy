import plan1Mob from '/public/images/common/plans/plan-1-mob.png';
import plan2Mob from '/public/images/common/plans/plan-2-mob.png';
import plan3Mob from '/public/images/common/plans/plan-3-mob.png';
import plan1Desk from '/public/images/common/plans/plan-1-desk.png';
import plan2Desk from '/public/images/common/plans/plan-2-desk.png';
import plan3Desk from '/public/images/common/plans/plan-3-desk.png';

import { PlanT } from '@/types/infoTypes';

export const plans: PlanT[] = [
  {
    name: 'Huawei',

    imageMob: plan1Mob,
    imageDesk: plan1Desk,
    benefits: [
      'inkl. Speicher + Montage',
      'Wirtschaftlichkeitsanalyse',
      'Projektierung',
      'inkl. Inbetriebnahme',
    ],
  },
  {
    name: 'Sungrow',

    imageMob: plan2Mob,
    imageDesk: plan2Desk,
    benefits: [
      'inkl. Speicher + Montage',
      'Wirtschaftlichkeitsanalyse',
      'Projektierung',
      'inkl. Inbetriebnahme',
    ],
  },
  {
    name: 'Enphase',

    imageMob: plan3Mob,
    imageDesk: plan3Desk,
    benefits: [
      'inkl. Speicher + Montage',
      'Wirtschaftlichkeitsanalyse',
      'Projektierung',
      'inkl. Inbetriebnahme',
    ],
  },
];
