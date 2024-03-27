import { StaticImageData } from 'next/image';

type TitleText = {
  title: string;
  text: string;
};

type ImportedImages = {
  mobile: StaticImageData;
  desktop: StaticImageData;
};

type VisionImageItem = ImportedImages & {
  className: string;
  rangeSlides: number[];
};

type VisionLinkItem = TitleText;
type VorteileSliderItems = TitleText;

type PlanT = {
  price: string;
  name: string;
  article: string;
  imageMob: StaticImageData;
  imageDesk: StaticImageData;
  benefits: string[];
};

type ObjectItem = {
  standort: string;
  gesamtleistung: string;
  stückzahl: string;
  speichersystem: string;
};

type RedHelp = TitleText & {
  icon: React.ElementType;
  href?: HrefObject;
  arrayOfLinks?: Link[];
};

type Link = {
  icon: React.ElementType;
  linkTo: string;
};

type HrefObject = {
  title: string;
  linkTo: string;
};

type NavLinkItem = HrefObject;

type VorteileSliderT = {
  sliderImages: ImportedImages[];
  sliderText: VorteileSliderItems[];
};

export type {
  VisionLinkItem,
  VorteileSliderItems,
  ImportedImages,
  VisionImageItem,
  PlanT,
  ObjectItem,
  RedHelp,
  VorteileSliderT,
  NavLinkItem,
};
