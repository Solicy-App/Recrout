import { ChartData } from 'chart.js';

export interface ICompetencyScores {
  chartData: ChartData;
  competencyScores: ICompetencyScoresItems[];
  competencyYears: ICompetencyScoresItems[];
  width?: number;
  height?: number;
}

export interface ICompetencyScoresItems {
  title: string;
  isActive: boolean;
}
