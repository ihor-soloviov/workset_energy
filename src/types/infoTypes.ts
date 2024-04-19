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
  textList: string[];
} & ImportedImages;

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

type HeroItem = ImportedImages & {
  title: string;
};

type KarrierAttributes = {
  job_title: string;
  job_type: string;
  job_description: string;
  job_responsibilities: string;
  job_requirements: string;
  job_message: string;
  job_location: string;
  job_salary: string;
  job_hours: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
};

type KarrierJobData = {
  id: number;
  attributes: KarrierAttributes;
};

type KarrierPagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

type KarrierJobMeta = {
  pagination: KarrierPagination;
};

type KarrierJobItems = {
  data: KarrierJobData[];
  meta: KarrierJobMeta;
};

type KarrierJobItem = {
  data: KarrierJobData;
  meta?: KarrierJobMeta;
};

type SelectValues = {
  role: string;
  location: string;
  contract: string;
};

type PopupAction = {
  visible: boolean;
  status: 'success' | 'error' | '';
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
  HeroItem,
  KarrierJobItems,
  KarrierJobItem,
  KarrierAttributes,
  SelectValues,
  PopupAction,
};
