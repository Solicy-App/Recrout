import { t } from 'i18next';
import { IHeaderItems } from '../interface/headerItems';
import { DashboardTabEnum } from '../enum/dashboardTab';

const headerItems: IHeaderItems[] = [
  {
    title: 'about_me',
    isActive: true,
    value: DashboardTabEnum.ABOUT_ME,
  },
  {
    title: t('competency_scores_preferences'),
    isActive: false,
    value: DashboardTabEnum.PREFERENCES,
  },
  {
    title: 'skills',
    isActive: false,
    value: DashboardTabEnum.SKILLS,
  },
  {
    title: 'education_experience',
    isActive: false,
    value: DashboardTabEnum.EDUCATION_EXPERIENCE,
  },
  {
    title: 'image_youtube',
    isActive: false,
    value: DashboardTabEnum.IMAGE_YOUTUBE,
  },
];

export { headerItems };
