import ApiBase from '../base/apiBase';

export class AuthService {
  private static apiBase = new ApiBase();

  public static async signIn(creedentials: FormData): Promise<void> {
    try {
      const res = await this.apiBase.postAsync(
        `/en/auth/signin/`,
        creedentials,
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  public static async signUp(creedentials: FormData): Promise<void> {
    try {
      const res = await this.apiBase.postAsync(
        `/en/candidate/signup/?r=${Math.random()}`,
        creedentials,
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}
