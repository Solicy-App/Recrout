import { ITranslate } from './translate';

export interface IAboutMeContent {
  name: string;
  about: string;
  aboutMe: IAboutUser[];
}

export interface IAboutUser {
  icon: string;
  value: string;
  iconSize: number;
}

export interface IAboutAndShare extends ITranslate {
  description: string;
}

export interface ISocialNetwork {
  network: string;
  url: string;
}

export interface UserProfile {
  first_name: string;
  last_name: string;
  pitch: string;
  headline: string;
  contact_info: string;
  contact_value: string;
  show_in_profile: boolean;
  birthday: {
    day: number;
    month: string;
    year: number;
  };
  gender: number;
  language: {
    language: string;
    proficiency: number;
  };
  homeTown: string;
  socialNetwork: {
    network: string;
    url: string;
  }[];
  blog_rss: string;
  interests: string;
  premium_code: string;
}
