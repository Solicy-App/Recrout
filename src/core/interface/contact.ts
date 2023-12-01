export interface IMessage {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export interface IMessageData {
  data?: string;
}

export interface ICandidateInvite {
  email_address: string;
}
