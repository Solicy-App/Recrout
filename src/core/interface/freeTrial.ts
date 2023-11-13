export interface IFreeTrial {
  data: IFreeTrialData;
}

export interface IFreeTrialBody {
  company_name: string;
  website: string;
  full_name: string;
  email: string;
  voucher?: string;
}

export interface IFreeTrialData {
  date_joined: string;
  email: string;
  first_name: string;
  groups: any[];
  id: number;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  last_login: string;
  last_name: string;
  password: string;
  status: number;
  user_permissions: any[];
  username: string;
  uuid: string;
}
