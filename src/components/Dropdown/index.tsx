import React, { FC, useState } from 'react';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { IDropDown } from '@/core/interface/dropDown';

const DropDown: FC<IDropDown> = ({
  items,
  className,
  selectedValue,
  defaultValue
}): JSX.Element => {
  const [value, setValue] = useState<string>('Company');

  const handleChange = (event: SelectChangeEvent<string>): void => {
    setValue(event.target.value);
    selectedValue(event.target.value);
  };

  return (
    <Select
      className={className}
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={defaultValue ?? value}
      onChange={handleChange}
    >
      {items &&
        items.length > 0 &&
        items.map((elem, index) => (
          <MenuItem key={index} value={elem.value}>
            {elem.to_show}
          </MenuItem>
        ))}
    </Select>
  );
};

export default DropDown;
