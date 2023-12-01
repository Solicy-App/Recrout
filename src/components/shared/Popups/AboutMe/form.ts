import * as Yup from 'yup';
import { TFunction } from 'i18next';
import { UserProfile } from '@/core/interface/aboutMe';

const validation = (t: TFunction) => {
  return Yup.object({
    first_name: Yup.string()
      .min(1, `${t('least')} 1 ${t('characters')}`)
      .max(15, `${t('less_than')} 15 ${t('characters')}`),
    last_name: Yup.string()
      .min(1, `${t('least')} 1 ${t('characters')}`)
      .max(15, `${t('less_than')} 15 ${t('characters')}`),
    pitch: Yup.string().min(1, `${t('least')} 1 ${t('characters')}`),
    headline: Yup.string()
      .min(1, `${t('least')} 1 ${t('characters')}`)
      .max(150, `${t('less_than')} 150 ${t('characters')}`),
    contact_info: Yup.string().min(1, `${t('least')} 1 ${t('characters')}`),
    contact_value: Yup.string().min(1, `${t('least')} 1 ${t('characters')}`),
    birthday: Yup.object().shape({
      day: Yup.number().min(1).max(31),
      month: Yup.string(),
      year: Yup.number(),
    }),
    show_in_profile: Yup.boolean(),
    gender: Yup.number(),
    language: Yup.object().shape({
      language: Yup.string(),
      proficiency: Yup.number().max(5).default(1),
    }),
    homeTown: Yup.string(),
    socialNetwork: Yup.array(
      Yup.object().shape({
        network: Yup.string(),
        url: Yup.string(),
      }),
    ),
    blog_rss: Yup.string(),
    interests: Yup.string(),
    premium_code: Yup.string(),
  });
};

const initialValues: UserProfile = {
  first_name: '',
  last_name: '',
  pitch: '',
  headline: '',
  contact_info: '',
  contact_value: '',
  show_in_profile: false,
  birthday: {
    day: 1,
    month: '',
    year: 2023,
  },
  gender: 1,
  language: {
    language: 'Armenian',
    proficiency: 5,
  },
  homeTown: 'Armenia',
  socialNetwork: [
    {
      network: 'Facebook',
      url: 'some url',
    },
  ],
  blog_rss: 'rss blog url',
  interests: 'Armwrestling',
  premium_code: '',
};

export { validation, initialValues };
