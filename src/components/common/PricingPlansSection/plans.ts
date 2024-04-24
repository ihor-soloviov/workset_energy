import huaweiStarterMob from '../../../../public/images/pv-anlagen-page/plans/HuaweiStarter-mob.png';
import huaweiStarter from '/public/images/pv-anlagen-page/plans/HuaweiStarter.png';
import huaweiBasicMob from '../../../../public/images/pv-anlagen-page/plans/HuaweiBasic-mob.png';
import huaweiBasic from '/public/images/pv-anlagen-page/plans/HuaweiBasic.png';
import enphaseProMob from '../../../../public/images/pv-anlagen-page/plans/Enphase-mob.png';
import enphasePro from '/public/images/pv-anlagen-page/plans/Enphase.png';
import { PlanT } from '@/types/infoTypes';

export const plans: PlanT[] = [
  {
    price: '15.116 EUR',
    name: 'Huawei Starter',
    article:
      'Starte in die E-Mobilität mit dem "Huawei Starter”-Paket – die ideale Wallbox-Lösung für Einsteiger, die Wert auf Qualität und Effizienz legen',
    imageMob: huaweiStarterMob,
    imageDesk: huaweiStarter,
    benefits: [
      'Projektierung',
      'Wirtschaftlichkeitsanalyse',
      'inkl. Lieferung + Montage',
      'inkl. Inbetriebnahme',
      'inkl. Netzanmeldung',
    ],
  },
  {
    price: '17.850 EUR',
    name: 'Huawei Basic',
    article:
      'Das "Huawei Basic”-Paket bietet dir eine zuverlässige und benutzerfreundliche Ladeinfrastruktur, perfekt für den täglichen Gebrauch',
    imageMob: huaweiBasicMob,
    imageDesk: huaweiBasic,
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
    name: 'Enphase Pro',
    article:
      'Wähle “Enphase Pro” für höchste Ladeleistung und smarte Technologie, um dein Elektrofahrzeug schnell und intelligent zu laden',
    imageMob: enphaseProMob,
    imageDesk: enphasePro,
    benefits: [
      'Projektierung',
      'Wirtschaftlichkeitsanalyse',
      'inkl. Lieferung + Montage',
      'inkl. Inbetriebnahme',
      'inkl. Netzanmeldung',
    ],
  },
];
