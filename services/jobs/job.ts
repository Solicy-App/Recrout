import environments from "@/utils/environment";
import ApiBase from "../base/apiBase";
import { JobsI } from "@/core/interface/job";
import { ApiError } from "../base/types";

export class JobService {
    private static apiBase = new ApiBase<JobsI>();

    public static async getJobs(): Promise<JobsI | ApiError> {
      return await this.apiBase.postAsync(`${environments.API_URL}/en/jobs/find/results/`)
    }
}
