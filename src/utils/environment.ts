import { IEnvironment } from '@/core/interface/environment';

const environments: IEnvironment = {
  API_URL: String(process.env.NEXT_PUBLIC_API_URL),
};

export default environments;
