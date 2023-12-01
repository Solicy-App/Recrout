export interface IContentBlock {
  className?: string;
  title: string;
  onActionClick?: () => void;
  buttonIcon?: string;
  children: JSX.Element;
  showButton?: boolean;
  secondButton?: JSX.Element;
}
