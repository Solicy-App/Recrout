import { IRequestDemoResponse } from "@/core/interface/requestDemo";
import ApiBase from "../base/apiBase";
import { ApiError } from "../base/types";

export class RequestDemoService {
    private static apiBase = new ApiBase<IRequestDemoResponse | FormData>();

    public static async requestDemo(form: FormData): Promise<IRequestDemoResponse | ApiError | FormData> {
        return this.apiBase.postAsync('business/demo-request', form);
    }
}
