export interface ILevel {
  icon?: string;
  title?: string;
  level: number;
  isReadonly?: boolean;
  onClick?: (event: number) => void;
}
