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