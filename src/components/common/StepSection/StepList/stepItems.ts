import { StaticImageData } from 'next/image';
import stepOneImgMob from '/public/images/home-page/step-1-mob.webp';
import stepTwoImgMob from '/public/images/home-page/step-2-mob.webp';
import stepThreeImgMob from '/public/images/home-page/step-3-mob.webp';
import stepFourImgMob from '/public/images/home-page/step-4-mob.webp';
import stepFiveImgMob from '/public/images/home-page/step-5-mob.webp';
import stepOneImgDesc from '/public/images/home-page/step-1-desc.webp';
import stepTwoImgDesc from '/public/images/home-page/step-2-desc.webp';
import stepThreeImgDesc from '/public/images/home-page/step-3-desc.webp';
import stepFourImgDesc from '/public/images/home-page/step-4-desc.webp';
import stepFiveImgDesc from '/public/images/home-page/step-5-desc.webp';

type StepItem = {
  title: string;
  text: string;
  extraText: string;
  textDesk: string;
  className?: string;
  btn?: boolean;
  imgMob: StaticImageData;
  imgDesc: StaticImageData;
};

export const stepItems: StepItem[] = [
  {
    imgMob: stepOneImgMob,
    imgDesc: stepOneImgDesc,
    text: 'Lass dich unverbindlich vom Experten-Team der WorkSET Energy GmbH beraten. Unsere',
    extraText:
      'Experten beantworten gerne alle deine Fragen.\nOb es um Preise, Fristen, Angebotsvergleiche oder einfach nur um Fragen zum Arbeitsablauf geht – unser Expertenteam ist bereit, dir die Informationen zu geben, die dich interessieren. Wir sind offen und transparent in unserer Zusammenarbeit.',
    className: 'first',
    textDesk:
      'Lass dich unverbindlich vom Experten-Team der WorkSET Energy GmbH beraten. Unsere Experten beantworten gerne alle deine Fragen.\nOb es um Preise, Fristen, Angebotsvergleiche oder einfach nur um Fragen zum Arbeitsablauf geht – unser Expertenteam ist bereit, dir die Informationen zu geben, die dich interessieren. Wir sind offen und transparent in unserer Zusammenarbeit.',
    title: 'Beratung',
  },
  {
    imgMob: stepTwoImgMob,
    imgDesc: stepTwoImgDesc,
    text: 'Nach einem vorab vereinbarten Termin kommt dein persönlicher Berater zu dir nach Hause, um',
    extraText:
      'alle notwendigen Messungen mit der Drohne vorzunehmen. Das ist notwendig, um die Planung so genau und effizient wie möglich zu gestalten.\nOhne gründliche Messungen ist es nicht möglich, ein auf deine Bedürfnisse optimal zugeschnittenes Angebot zusammenzustellen. Das Team der WorkSET Energy GmbH weiß das besser als jeder andere.',
    textDesk:
      'Nach einem vorab vereinbarten Termin kommt dein persönlicher Berater zu dir nach Hause, um alle notwendigen Messungen mit der Drohne vorzunehmen. Das ist notwendig, um die Planung so genau und effizient wie möglich zu gestalten.\nOhne gründliche Messungen ist es nicht möglich, ein auf deine Bedürfnisse optimal zugeschnittenes Angebot zusammenzustellen. Das Team der WorkSET Energy GmbH weiß das besser als jeder andere.',
    title: 'Aufmaß',
    className: 'second',
  },
  {
    imgMob: stepThreeImgMob,
    imgDesc: stepThreeImgDesc,
    text: 'Unser Team entwickelt eine maßgeschneiderte Finanzplanung für deine Anforderungen. Mithilfe',
    extraText:
      'von 3D-Simulationen und einer speziellen Software, die von den Entwicklern der WorkSET Energy GmbH programmiert wurde, finden wir die beste PV-Anlage für dich.\nMöchtest du verschiedene Optionen vergleichen? Unsere Planungsabteilung erstellt gerne mehrere Varianten deines Projekts, damit du dir über die Effizienz deiner zukünftigen Anlage sicher sein kannst.',
    textDesk:
      'Unser Team entwickelt eine maßgeschneiderte Finanzplanung für deine Anforderungen. Mithilfe von 3D-Simulationen und einer speziellen Software, die von den Entwicklern der WorkSET Energy GmbH programmiert wurde, finden wir die beste PV-Anlage für dich.\nMöchtest du verschiedene Optionen vergleichen? Unsere Planungsabteilung erstellt gerne mehrere Varianten deines Projekts, damit du dir über die Effizienz deiner zukünftigen Anlage sicher sein kannst.',
    title: 'Planung',
    className: 'third',
  },
  {
    imgMob: stepFourImgMob,
    imgDesc: stepFourImgDesc,
    text: 'Nachdem du den Auftrag unterschrieben hast, bekommst du einen Termin für die Montage',
    extraText:
      '(2-6 Wochen nach Auftragsbestätigung) und einen Elektriker-Termin für den Anschluss der Anlage (weitere 2 Wochen später).\nSomit vergeht nach Auftragsbestätigung bis zur funktionierenden PV-Anlage 2-6 Wochen nach Auftragsbestätigung.',
    textDesk:
      'Nachdem du den Auftrag unterschrieben hast, bekommst du einen Termin für die Montage (2-6 Wochen nach Auftragsbestätigung) und einen Elektriker-Termin für den Anschluss der Anlage (weitere 2 Wochen später). \nSomit vergeht nach Auftragsbestätigung bis zur funktionierenden PV-Anlage 2-6 Wochen nach Auftragsbestätigung.',
    title: 'Montage',
    className: 'four',
  },
  {
    imgMob: stepFiveImgMob,
    imgDesc: stepFiveImgDesc,
    btn: true,
    text: 'Nachdem du die Rechnung beglichen hast, wird deine PV-Anlage eingerichtet.',
    extraText:
      'Wir bleiben während des gesamten Prozesses in Kontakt, um sicherzustellen, dass deine Bedürfnisse erfüllt werden und du die Vorteile der sauberen Energie nutzen kannst.',
    textDesk:
      'Nachdem du die Rechnung beglichen hast, wird deine PV-Anlage eingerichtet. Wir bleiben während des gesamten Prozesses in Kontakt, um sicherzustellen, dass deine Bedürfnisse erfüllt werden und du die Vorteile der sauberen Energie nutzen kannst.',
    title: 'Abschluss',
    className: 'five',
  },
];
