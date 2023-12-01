import { IEducationAndExperienceItems } from '../interface/educationAndExperience';
import { aboutEducation, aboutUniversity } from './educationAndExperience';

const educationExperience: IEducationAndExperienceItems[] = [{
  title: 'AYYH,ceo',
  description:
    'Lorem ipsum dolor sit amet consectetur. Lectus proin volutpat dui aenean elementum pulvinar laoreet nisl. ',
  years: '2018-2020',
  categories: aboutEducation,
}];

const education: IEducationAndExperienceItems[] = [{
  title: 'Biologie',
  description: 'AGSB University',
  years: '2018-2020',
  categories: aboutUniversity,
}];

export { educationExperience, education };
