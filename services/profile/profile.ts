import { ICandidateInvite } from '@/core/interface/contact';
import ApiBase from '../base/apiBase';

export class ProfileService {
  public static apiBase = new ApiBase<FormData | ICandidateInvite>();

  public static async inviteCandidate(
    userId: number,
    body: ICandidateInvite,
  ): Promise<any> {
    return await this.apiBase.postAsync(
      `/en/invitations/candidate-invite/user/${userId}`,
      body,
    );
  }

  public static async setWhoAmI(id: string, body: FormData): Promise<any> {
    return this.apiBase.postAsync(
      `/en/accounts/panels/${id}/whoami/?r=${Math.random()}`,
      body,
    );
  }
  public static async getWhoAmI(id: string): Promise<any> {
    return this.apiBase.getAsync(
      `/en/accounts/panels/${id}/whoami-profile/?r=${Math.random()}`,
    );
  }

  public static async setPitch(id: string, body: FormData): Promise<any> {
    return this.apiBase.postAsync(
      `/en/accounts/panels/${id}/pitch/?r=${Math.random()}`,
      body,
    );
  }
  public static async getPitch(id: string): Promise<any> {
    return this.apiBase.getAsync(
      `/en/accounts/panels/${id}/pitch-profile/?r=${Math.random()}`,
    );
  }
  public static async setContact(id: string, body: FormData): Promise<any> {
    return this.apiBase.postAsync(
      `/en/accounts/panels/${id}/contact_infos/?r=${Math.random()}`,
      body,
    );
  }
  public static async getContact(id: string): Promise<any> {
    return this.apiBase.getAsync(
      `/en/accounts/panels/${id}/contact_infos/?r=${Math.random()}`,
    );
  }
  public static async setWorkExperience(
    id: string,
    body: FormData,
  ): Promise<any> {
    return this.apiBase.postAsync(
      `/en/accounts/panels/${id}/contact_infos/?r=${Math.random()}`,
      body,
    );
  }
  public static async getWorkExperience(id: string): Promise<any> {
    return this.apiBase.getAsync(
      `/en/accounts/panels/${id}/contact_infos/?r=${Math.random()}`,
    );
  }
  public static async setEducation(id: string, body: FormData): Promise<any> {
    return this.apiBase.postAsync(
      `/en/accounts/panels/${id}/education/?r=${Math.random()}`,
      body,
    );
  }
  public static async getEducation(id: string): Promise<any> {
    return this.apiBase.getAsync(
      `/en/accounts/panels/${id}/ducations-profile/?r=${Math.random()}`,
    );
  }

  public static async setLanguage(id: string, body: FormData): Promise<any> {
    return this.apiBase.postAsync(
      `/en/accounts/panels/${id}/languages/?r=${Math.random()}`,
      body,
    );
  }

  public static async getLanguage(id: string): Promise<any> {
    return this.apiBase.getAsync(
      `en/accounts/panels/${id}/languages-profile/?r=${Math.random()}`,
    );
  }

  public static async setExtraActivity(
    id: string,
    body: FormData,
  ): Promise<any> {
    return this.apiBase.postAsync(
      `en/accounts/panels/${id}/activities/?r=${Math.random()}`,
      body,
    );
  }
  public static async getExtraActivity(id: string): Promise<any> {
    return this.apiBase.getAsync(
      `en/accounts/panels/${id}/activities-profile/?r=${Math.random()}`,
    );
  }

  public static async setCertification(
    id: string,
    body: FormData,
  ): Promise<any> {
    return this.apiBase.postAsync(
      `en/accounts/panels/${id}/certificates/?r=${Math.random()}`,
      body,
    );
  }

  public static async getCertification(id: string): Promise<any> {
    return this.apiBase.getAsync(
      `en/accounts/panels/${id}/certificates-profile/?r=${Math.random()}`,
    );
  }

  public static async setItSkills(id: string, body: FormData): Promise<any> {
    return this.apiBase.postAsync(
      `en/accounts/panels/${id}/certificates-profile/?r=${Math.random()}`,
      body,
    );
  }

  public static async getItSkills(id: string): Promise<any> {
    return this.apiBase.getAsync(
      `en/accounts/panels/${id}/computer-skills-profile/?r=${Math.random()}`,
    );
  }

  public static async setSocialNetwork(
    id: string,
    body: FormData,
  ): Promise<any> {
    return this.apiBase.postAsync(
      `en/accounts/panels/${id}/social-network-experiences/?r=${Math.random()}`,
      body,
    );
  }
  public static async getSocialNetwork(id: string): Promise<any> {
    return this.apiBase.getAsync(
      `en/accounts/panels/${id}/social-network-experiences-profile/?r=${Math.random()}`,
    );
  }
  public static async setSharedImages(
    id: string,
    body: FormData,
  ): Promise<any> {
    return this.apiBase.postAsync(
      `en/accounts/panels/${id}/images/?r=${Math.random()}`,
      body,
    );
  }
  public static async getSharedImages(id: string): Promise<any> {
    return this.apiBase.getAsync(
      `en/accounts/panels/${id}/images-profile/?r=${Math.random()}`,
    );
  }
  public static async setBlogRss(id: string, body: FormData): Promise<any> {
    return this.apiBase.postAsync(
      `en/accounts/panels/${id}/blog-feeds/?r=${Math.random()}`,
      body,
    );
  }
  public static async getBlogRss(id: string): Promise<any> {
    return this.apiBase.getAsync(
      `en/accounts/panels/${id}/blog-feeds-profile/?r=${Math.random()}`,
    );
  }

  public static async setVideo(id: string, body: FormData): Promise<any> {
    return this.apiBase.postAsync(
      `en/accounts/panels/${id}/blog-feeds/?r=${Math.random()}`,
      body,
    );
  }
  public static async getVideo(id: string): Promise<any> {
    return this.apiBase.getAsync(
      `en/accounts/panels/${id}/videos-profile/?r=${Math.random()}`,
    );
  }
  public static async search(body: FormData): Promise<any> {
    return await this.apiBase.postAsync('en/accounts/youtube/search/', body);
  }
}
