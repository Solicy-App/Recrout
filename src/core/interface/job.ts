export interface IJob {
    data: IJobData;
}

interface IJobData {
    data: IJobs
}

interface IJobs {
    jobs: IJobInfo[];
}

interface IJobInfo {
  culture_score: number;
  data: IJobInfoData;
  detail_url: string;
  pub_date: string;
  score: number;
  status: number;
}

interface IJobInfoData {
  company_name: string;
  job_id: string;
  mugshot: string;
  title: string;
}
