export interface IMessage {
  created: string;
  id: number;
  is_persistent: boolean;
  level: number;
  message: string;
  read: boolean;
  tags: string;
}
