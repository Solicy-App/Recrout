export interface IEducationAndExperience {
  education: IEducationAndExperienceItems[];
}
export interface IEducationAndExperienceItems {
  title: string;
  years: string;
  description: string;
  categories?: IEducationCategories[];
}

export interface IEducationCategories {
  title: string;
  icon: string;
}
