export interface IRadioButton {
  buttons: IRadioButtonItem[];
  onChange: (value: string) => void;
  isRow?: boolean;
}

export interface IRadioButtonItem {
  label: string;
  value: string;
}
