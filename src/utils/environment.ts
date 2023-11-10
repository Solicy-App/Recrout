import { EnvironmentType } from '@/core/types/environment';

const environments: EnvironmentType = {
  API_URL: String(process.env.NEXT_PUBLIC_API_URL),
};

export default environments;
