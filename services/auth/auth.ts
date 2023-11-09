import environments from '@/utils/environment';
import ApiBase from '../base/apiBase';

export class AuthService {
  private static contentType: object = {
    'Content-Type': 'multipart/form-data',
  };
  private static apiBase = new ApiBase();

  public static async signIn(creedentials: FormData): Promise<void> {
    try {
      const res = await this.apiBase.postAsync(
        `${environments.API_URL}/en/auth/signin/`,
        creedentials,
        this.contentType,
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  public static async signUp(creedentials: FormData): Promise<void> {
    try {
      const res = await this.apiBase.postAsync(
        `${environments.API_URL}/en/candidate/signup/?r=${Math.random()}`,
        creedentials,
        this.contentType,
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}
