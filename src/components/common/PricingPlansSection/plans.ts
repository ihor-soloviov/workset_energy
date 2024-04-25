import plan1Mob from '/public/images/common/plans/plan-1-mob.png';
import plan2Mob from '/public/images/common/plans/plan-2-mob.png';
import plan3Mob from '/public/images/common/plans/plan-3-mob.png';
import plan1Desk from '/public/images/common/plans/plan-1-desk.png';
import plan2Desk from '/public/images/common/plans/plan-2-desk.png';
import plan3Desk from '/public/images/common/plans/plan-3-desk.png';

import { PlanT } from '@/types/infoTypes';

export const plans: PlanT[] = [
  {
    price: '15.116 EUR',
    name: 'Huawei',
    article:
      'Starte in die E-Mobilität mit dem "Huawei -Paket – die ideale Wallbox-Lösung für Einsteiger, die Wert auf Qualität und Effizienz legen',
    imageMob: plan1Mob,
    imageDesk: plan1Desk,
    benefits: [
      'Projektierung',
      'Wirtschaftlichkeitsanalyse',
      'inkl. Lieferung + Montage',
      'inkl. Inbetriebnahme',
      'inkl. Netzanmeldung',
    ],
  },
  {
    price: '16.090 EUR',
    name: 'Sungrow',
    article:
      'Das "Sungrow”-Paket bietet dir eine zuverlässige und benutzerfreundliche Ladeinfrastruktur, perfekt für den täglichen Gebrauch',
    imageMob: plan2Mob,
    imageDesk: plan2Desk,
    benefits: [
      'Projektierung',
      'Wirtschaftlichkeitsanalyse',
      'inkl. Lieferung + Montage',
      'inkl. Inbetriebnahme',
      'inkl. Netzanmeldung',
    ],
  },
  {
    price: '22.300 EUR',
    name: 'Enphase',
    article:
      'Wähle “Enphase” für höchste Ladeleistung und smarte Technologie, um dein Elektrofahrzeug schnell und intelligent zu laden',
    imageMob: plan3Mob,
    imageDesk: plan3Desk,
    benefits: [
      'Projektierung',
      'Wirtschaftlichkeitsanalyse',
      'inkl. Lieferung + Montage',
      'inkl. Inbetriebnahme',
      'inkl. Netzanmeldung',
    ],
  },
];
