import { IMessage } from '@/core/interface/message';
import ApiBase from '../base/apiBase';
import { ApiError } from '../base/types';

export class MessageService {
  private static apiBase = new ApiBase<IMessage>();

  public static async getAllMessages(
    all: boolean = true,
    fromId: number = 0,
  ): Promise<IMessage | ApiError> {
    return await this.apiBase.getAsync(
      `/en/accounts/messages/?all=${all}&from_id=${fromId}`,
    );
  }
  public static async markAsRead(
    messageId: number,
  ): Promise<IMessage | ApiError> {
    return await this.apiBase.getAsync(
      `/en/accounts/messages/mark_read/${messageId}`,
    );
  }
  public static async openMessage(
    messageId: number,
  ): Promise<IMessage | ApiError> {
    return await this.apiBase.getAsync(`/en/vacatures/opening/${messageId}`);
  }
}
