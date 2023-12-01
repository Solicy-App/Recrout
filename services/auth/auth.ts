import ApiBase from '../base/apiBase';

export class AuthService {
  private static apiBase = new ApiBase();

  public static async signIn(email: string, password: string): Promise<void> {
    try {
      const res = await this.apiBase.postAsync(`/account/auth/login/`, {
        email,
        password,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  public static async signUp(creedentials: FormData | any): Promise<void> {
    try {
      const res = await this.apiBase.postAsync(
        `/account/auth/register/`,
        creedentials,
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  public static async resetPassword(creedentials: FormData): Promise<void> {
    try {
      const res = await this.apiBase.postAsync(
        `account/auth/password/reset/`,
        creedentials,
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  public static async getAccount(): Promise<void> {
    try {
      const res = await this.apiBase.getAsync(`/account/me`);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}
