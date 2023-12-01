export interface IDropDown {
  items: IDropDownItem[];
  className?: string;
  defaultValue?: string;
  selectedValue: (event: string) => void;
}
export interface IDropDownItem {
  value: string | number;
  to_show: string | number;
}
