export interface Children {
  title: string;
  className?: string;
  description?: string;
  children: JSX.Element;
  onClose: () => void;
}
