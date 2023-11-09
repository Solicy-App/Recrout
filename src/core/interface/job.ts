export interface JobsI {
    data: DataI;
}

interface DataI {
    data: JobsData
}

interface JobsData {
    jobs: JobI[];
}

interface JobI {
  culture_score: number;
  data: JobDataI;
  detail_url: string;
  pub_date: string;
  score: number;
  status: number;
}

interface JobDataI {
  company_name: string;
  job_id: string;
  mugshot: string;
  title: string;
}
