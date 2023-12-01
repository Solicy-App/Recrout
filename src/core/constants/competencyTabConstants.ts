import { ICompetencyScoresItems } from '../interface/competencyScores';
import { IPreferencesItem } from '../interface/preferences';

const chartData = {
  labels: [
    [['Proactive'], ['Communication']],
    [['Developing'], ['Relationships']],
    'Networking',
    'Negotiation',
    [['Influencing'], ['Others']],
    'Impact',
    'Teamwork',
    [['Interpersonal'], ['Sensitivity']],
    [['Oral'], ['communication']],
    [['Written'], ['Communication']],
  ],
  datasets: [
    {
      label: '',
      data: [10, 20, 30],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const preferences: IPreferencesItem[] = [
  {
    title: 'Availability',
    value: '1-3 month',
  },
  {
    title: 'Im willing to relocate',
    value: 'No',
  },
  {
    title: 'Career level',
    value: '0-1 Year',
  },
  {
    title: 'My salary expectation',
    value: '0-2000',
  },
  {
    title: 'Management experience',
    value: '0-1 Year',
  },
  {
    title: 'My preferred location',
    value: 'Amsterdam',
  },
  {
    title: 'Interested in',
    value: 'Groot & Detailhandel',
  },
  {
    title: 'My preferred contract',
    value: 'Permanent',
  },
];

const competencyScores: ICompetencyScoresItems[] = [
  {
    title: 'Thinking',
    isActive: true,
  },
  {
    title: 'Interaction',
    isActive: false,
  },
  {
    title: 'Leadership',
    isActive: false,
  },
  {
    title: 'Personal Effectiveness',
    isActive: false,
  },
  {
    title: 'Achieving',
    isActive: false,
  },
];

const competencyYears: ICompetencyScoresItems[] = [
  {
    title: '2019',
    isActive: true,
  },
  {
    title: '2023',
    isActive: false,
  },
];

export { chartData, preferences, competencyScores, competencyYears };
