export interface IConfirm {
  description: string;
  onCancel: () => void;
  onApprove: () => void;
}
