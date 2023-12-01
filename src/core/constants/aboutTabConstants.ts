import { IAboutUser } from "../interface/aboutMe";
import { IExtraActivitiesItem } from "../interface/extraActivities";
import { ISocialMediaItems } from "../interface/socialMedia";

const aboutTabChartData = {
  labels: [
    'Flexibility',
    'Self-Rel..',
    'Openness To Ideas',
    'Self-Con..',
    'Stress Tolerance',
  ],
  datasets: [
    {
      label: 'Flexibility',
      data: [10, 20, 30],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const aboutUser:IAboutUser[] = [
  {
    icon: 'email.svg',
    value: 'karim.akhlal+0098@gmail.com',
    iconSize: 12,
  },
  {
    icon: 'calendar.svg',
    value: 'Nov. 17 1990',
    iconSize: 12,
  },
  {
    icon: 'gender.svg',
    value: 'Male',
    iconSize: 12,
  },
  {
    icon: 'location.svg',
    value: 'Amsterdam, The Netherlands',
    iconSize: 12,
  },
  {
    icon: 'phone.svg',
    value: '060000000',
    iconSize: 12,
  },
  {
    icon: 'language.svg',
    value: 'English, Polish',
    iconSize: 12,
  },
  {
    icon: 'social.svg',
    value: 'Facebook, LinkedIn, Twitter',
    iconSize: 12,
  },
  {
    icon: 'computer.svg',
    value: 'Blog RRS alan.akhlal+0098@gmail.com',
    iconSize: 12,
  },
];

const socialMedia: ISocialMediaItems[] = [
  {
    title: 'Linkedin',
    icon: 'linkedin.svg',
    level: 3,
  },
  {
    title: 'Facebook',
    icon: 'facebook.svg',
    level: 4,
  },
  {
    title: 'Twitter',
    icon: 'twitter.svg',
    level: 5,
  },
];

const extraActivities: IExtraActivitiesItem[] = [
  {
    title: 'Python',
    description: 'developer',
    years: '2019-2023'
  }
]

export { aboutTabChartData, aboutUser, socialMedia, extraActivities };
