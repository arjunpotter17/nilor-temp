export interface FormData {
  name: string;
  phone: string;
  email: string;
  company: string;
  industry: string;
  country: string;
  businessType: string;
}

export interface TabDetails {
  tabName: string;
  title: string;
  buttonText: string;
  para: string;
  imgSrc: string;
}

export interface Project {
  id: number;
  name: string;
  title: string;
  pre: string;
  description: string;
  buttonText: string;
  fullText: string;
  url: string;
}

interface HeroPropsBase {
  text?: string;
  src: string;
  titleText?: string;
}

interface HeroPropsVideo extends HeroPropsBase {
  type: "video";
  pre?: never;
  title?: never;
}

interface HeroPropsImage extends HeroPropsBase {
  type: "image" | "bgVideo";
  pre: string;
  title: string;
}

export type HeroProps = HeroPropsVideo | HeroPropsImage;

export interface FilmProps {
  title: string;
  para: string;
  imgSrc: string;
}
