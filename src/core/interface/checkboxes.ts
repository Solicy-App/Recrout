export interface ICheckbox {
  checkboxes: ICheckboxItem | ICheckboxItem[];
}

export interface ICheckboxItem {
  label: string;
  isChecked?: boolean;
}
