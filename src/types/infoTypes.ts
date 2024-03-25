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

type Plan = {
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

export type {
  VisionLinkItem,
  VorteileSliderItems,
  ImportedImages,
  VisionImageItem,
  Plan,
  ObjectItem,
  RedHelp,
};
