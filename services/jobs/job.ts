import ApiBase from "../base/apiBase";
import { IJob } from "@/core/interface/job";
import { ApiError } from "../base/types";

export class JobService {
    private static apiBase = new ApiBase<IJob>();

    public static async getJobs(): Promise<IJob | ApiError> {
      return await this.apiBase.postAsync(`/en/jobs/find/results/`)
    }
}
