import visionFirstImgMob from '/public/images/common/vision-1-mob.webp';
import visionSecondImgMob from '/public/images/common/vision-2-mob.webp';
import visionThirdImgMob from '/public/images/common/vision-3-mob.webp';
import visionFirstImgDesc from '/public/images/common/vision-1-desc.webp';
import visionSecondImgDesc from '/public/images/common/vision-2-desc.webp';
import visionThirdImgDesc from '/public/images/common/vision-3-desc.webp';
import { VisionImageItem, VisionLinkItem } from '@/types/infoTypes';

export const visionItems: VisionLinkItem[] = [
  {
    title: 'Unsere Vision',
    text: 'Unsere Vision ist es, einen positiven Einfluss auf die Umwelt zu nehmen und gleichzeitig unseren Kunden zu helfen, Geld zu sparen und ihre Energiekosten langfristig zu senken. Wir sind stolz darauf, an einer besseren Zukunft zu arbeiten, und sind bestrebt, unser Engagement für Nachhaltigkeit und erneuerbare Energiequellen fortzusetzen.',
  },
  {
    title: 'Unsere Mission',
    text: 'Unser Unternehmen hat es sich zur Aufgabe gemacht, durch den Bau von Photovoltaikanlagen einen Beitrag zur nachhaltigen Energieversorgung zu leisten. Wir glauben, dass erneuerbare Energien der Schlüssel zur Bekämpfung des Klimawandels sind, und arbeiten daher hart daran, saubere Energie zugänglicher zu machen.',
  },
  {
    title: 'Unsere Ziel',
    text: 'Unser Ziel ist es Deutschland und Europa von fossilen Energieträgern loszulösen. Deutschland muss als Unternehmensstandort attraktiv bleiben!',
  },
];

export const visionImages: VisionImageItem[] = [
  {
    mobile: visionFirstImgMob,
    desktop: visionFirstImgDesc,
    className: 'first',
    rangeSlides: [0],
  },
  {
    mobile: visionSecondImgMob,
    desktop: visionSecondImgDesc,
    className: 'second',
    rangeSlides: [0, 1],
  },
  {
    mobile: visionThirdImgMob,
    desktop: visionThirdImgDesc,
    className: 'third',
    rangeSlides: [0, 1, 2],
  },
];
