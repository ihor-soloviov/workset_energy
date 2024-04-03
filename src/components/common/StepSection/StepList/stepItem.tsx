import { StaticImageData } from 'next/image';
import stepOneImgMob from '/public/images/home-page/step-1-mob.jpg';
import stepTwoImgMob from '/public/images/home-page/step-2-mob.jpg';
import stepThreeImgMob from '/public/images/home-page/step-3-mob.jpg';
import stepFourImgMob from '/public/images/home-page/step-4-mob.jpg';
import stepFiveImgMob from '/public/images/home-page/step-5-mob.jpg';
import stepOneImgDesc from '/public/images/home-page/step-1-desc.jpg';
import stepTwoImgDesc from '/public/images/home-page/step-2-desc.jpg';
import stepThreeImgDesc from '/public/images/home-page/step-3-desc.jpg';
import stepFourImgDesc from '/public/images/home-page/step-4-desc.jpg';
import stepFiveImgDesc from '/public/images/home-page/step-5-desc.jpg';

type StepItem = {
  title: string;
  text: string;
  link: string;
  imgMob: StaticImageData;
  imgDesc: StaticImageData;
};

export const stepItems: StepItem[] = [
  {
    imgMob: stepOneImgMob,
    imgDesc: stepOneImgDesc,
    link: '',
    text: 'Unser Fachberater unterstützt dich bei der Einrichtung von PV-Anlagen. Mit umfangreicher Erfahrung begleiten wir dich bei jedem Schritt, um sicherzustellen, dass deine Anlage optimal funktioniert und du von den Vorteilen sauberer Energie profitierst.',
    title: 'Beratungsgespräch',
  },
  {
    imgMob: stepTwoImgMob,
    imgDesc: stepTwoImgDesc,
    link: '',
    text: 'Du erhältst innerhalb von 72 Stunden nach deiner Anfrage ein individuelles Angebot, das nur für dich erstellt wird. Wir berechnen auch die Kosten des Projekts auf der Grundlage deines individuellen Energieverbrauchs und erörtern deine mögliche Unabhängigkeit von herkömmlichen Energiequellen.',
    title: 'Projektierung',
  },
  {
    imgMob: stepThreeImgMob,
    imgDesc: stepThreeImgDesc,
    link: '',
    text: 'Du unterschreibst den Kaufvertrag und legst damit den Grundstein für die Realisierung deines individuellen PV-Projekts.',
    title: 'Unterschrift',
  },
  {
    imgMob: stepFourImgMob,
    imgDesc: stepFourImgDesc,
    link: '',
    text: 'Wir richten innerhalb von 2 Monaten deine PV-Anlage ein, beginnend ab dem Zeitpunkt der Vertragsunterzeichnung. Die Einrichtung wird von uns sorgfältig geplant, um sicherzustellen, dass sie optimal auf deine Bedürfnisse und die Eigenschaften deiner Immobilie abgestimmt ist.',
    title: 'Montage',
  },
  {
    imgMob: stepFiveImgMob,
    imgDesc: stepFiveImgDesc,
    link: '',
    text: 'Nachdem du die Rechnung beglichen hast, wird deine PV-Anlage eingerichtet. Wir bleiben während des gesamten Prozesses in Kontakt, um sicherzustellen, dass deine Bedürfnisse erfüllt werden und du die Vorteile der sauberen Energie nutzen kannst.',
    title: 'Abschluss',
  },
];
