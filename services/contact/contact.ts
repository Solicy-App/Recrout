import { IMessageData } from '@/core/interface/contact';
import ApiBase from '../base/apiBase';
import { ApiError } from '../base/types';

export class ContactService {
  private static apiBase = new ApiBase<IMessageData | FormData>();

  public static sendMessage = async (
    body: FormData,
  ): Promise<IMessageData | FormData | ApiError> => {
    return await this.apiBase.postAsync('/en/contact/send-message-new', body);
  };
}
