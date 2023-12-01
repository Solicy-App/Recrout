import { ContactType } from '../enum/contact';
import { Gender } from '../enum/gender';

export interface IWhoAmI {
  first_name: string;
  last_name: string;
  headline: string;
  gender: Gender;
  birth_date: string;
  place: any;
}

export interface IContact {
  contact_type: ContactType;
  value: string;
}

export interface IPitch {
  pitch: string;
}

export interface IPreferences {
  places: any;
  contract: number;
  availability: number;
  relocation: number;
  career_level: number;
  salary: number;
  management_exp: number;
  industries: string;
}

export interface IWorkExperience {
  start_date: string;
  end_date?: string;
  industry_ref: string;
  position: string;
  company: string;
  company_website: string;
  place: any;
  description: string;
  work_type: string;
}

export interface IEducation {
  if_graduate: boolean;
  start_date: string;
  end_date?: string;
  school: string;
  degree: string;
  degree_type: number;
  grade: number;
}

export interface ILanguage {
  lang: string;
  proficiency: number;
}

export interface IExtraActivities {
  started_at: string;
  ended_at: string;
  name: string;
  url: string;
  description: string;
}

export interface ICertifications {
  finished: boolean;
  year: string;
  title: string;
  institute: string;
}

export interface IitSkills {
  name: string;
  proficiency: number;
  description: string;
}

export interface ISocialNetwork {
  social_network: string;
  proficiency: number;
}

export interface ISharedImages {
  title: string;
  description: string;
  image: any;
}

export interface IBlogRss {
  if_active: boolean;
  url: string;
}

export interface ISharedVideo {
  swfurl: string;
  title: string;
  thumbnail: string;
  url: string;
  share_type: number;
}

export interface ISearchVideo {
  data: ISearchVideoResponse[];
}

export interface ISearchVideoResponse {
  swfurl: string;
  thumbnail: string;
  title: string;
  url: string;
}
