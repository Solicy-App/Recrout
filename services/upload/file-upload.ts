import ApiBase from '../base/apiBase';

export class FileUploadService {
  private static apiBase = new ApiBase();

  public static async uploadCV(body: FormData): Promise<any> {
    return await this.apiBase.postAsync('/en/candidate/upload-cv', body);
  }

  public static async seeRecroutResume(resumeId: string): Promise<any> {
    return await this.apiBase.getAsync(`/en/candidate/pdf-resume/${resumeId}`);
  }
}
