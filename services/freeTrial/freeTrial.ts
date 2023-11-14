import {
  IFreeTrialBody,
  IFreeTrial,
  IFreeTrialData,
} from '@/core/interface/freeTrial';
import ApiBase from '../base/apiBase';
import { ApiError } from '../base/types';

export class FreeTrialService {
  private static apiBase = new ApiBase<
    IFreeTrialBody | IFreeTrialData | IFreeTrial | FormData
  >();

  public static async startFreeTrial(
    body: FormData,
  ): Promise<
    IFreeTrialBody | IFreeTrialData | IFreeTrial | FormData | ApiError
  > {
    return await this.apiBase.postAsync(
      `en/business/pre-register/?r=${Math.random()}`,
      body,
    );
  }
}
