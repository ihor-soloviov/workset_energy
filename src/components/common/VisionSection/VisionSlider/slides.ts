import visionFirstImgMob from '/public/images/common/vision-1-mob.jpg';
import visionSecondImgMob from '/public/images/common/vision-2-mob.jpg';
import visionThirdImgMob from '/public/images/common/vision-3-mob.jpg';
import visionFirstImgDesc from '/public/images/common/vision-1-desc.jpg';
import visionSecondImgDesc from '/public/images/common/vision-2-desc.jpg';
import visionThirdImgDesc from '/public/images/common/vision-3-desc.jpg';
import { VisionImageItem, VisionLinkItem } from '@/types/infoTypes';

export const visionItems: VisionLinkItem[] = [
  {
    title: 'Unsere Vision',
    text: 'Unsere Vision ist es, einen positiven Einfluss auf die Umwelt zu haben und gleichzeitig unseren Kunden zu helfen, Geld zu sparen und ihre Energiekosten langfristig zu senken. Wir sind stolz darauf, an einer besseren Zukunft zu arbeiten, und sind bestrebt, unser Engagement für Nachhaltigkeit und erneuerbare Energiequellen fortzusetzen',
  },
  {
    title: 'Unsere Mission',
    text: 'Unser Unternehmen hat die Mission, eine nachhaltige Energieversorgung zu fördern, indem wir Photovoltaik-Anlagen bauen. Wir glauben daran, dass erneuerbare Energiequellen der Schlüssel zur Bekämpfung des Klimawandels sind, und deshalb arbeiten wir hart daran, saubere und effiziente Energiequellen zugänglicher zu machen',
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
