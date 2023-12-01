import React, { FC, SyntheticEvent } from 'react';
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { IRadioButton } from '@/core/interface/radioButton';

const RadioButton: FC<IRadioButton> = ({
  buttons,
  onChange,
  isRow = true,
}): JSX.Element => {
  const handleRadioChange = (e: SyntheticEvent) => {
    onChange((e.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <RadioGroup
        row={isRow}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        {buttons.map((item, index) => (
          <FormControlLabel
            onClick={handleRadioChange}
            key={index}
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButton;
