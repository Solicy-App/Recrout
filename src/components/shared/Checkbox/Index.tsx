'use client';

import React, { FC, useEffect, useState } from 'react';
import { ICheckbox, ICheckboxItem } from '@/core/interface/checkboxes';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, FormGroup, FormControlLabel } from '@mui/material';

const Checkboxes: FC<ICheckbox> = ({ checkboxes }): JSX.Element => {
  const [checkedItems, setCheckedItems] = useState<ICheckboxItem[]>([]);

  const handleCheckboxChange = (item: ICheckboxItem) => {
    item.isChecked = !item.isChecked;
    const foundItem = checkedItems.find(itemFromState => itemFromState.label === item.label)
    if (!item.isChecked && foundItem) {
        setCheckedItems(prev => prev.filter(items => items.label !== item.label))
    } else {
        setCheckedItems(prev => [...prev, item])
    }
  };

  useEffect(() => {
    console.log(checkedItems);
  }, [checkedItems]);

  return (
    <div className="box">
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          {Array.isArray(checkboxes) ? (
            checkboxes.map((item, index) => (
              <div key={index} className="item">
                <FormControlLabel
                  value="end"
                  control={<Checkbox />}
                  label={item.label}
                  labelPlacement="end"
                  checked={item.isChecked}
                  onChange={() => handleCheckboxChange(item)}
                />
              </div>
            ))
          ) : (
            <div className="item">
              <FormControlLabel
                value="end"
                control={<Checkbox />}
                label={checkboxes.label}
                labelPlacement="end"
                checked={checkboxes.isChecked}
                onChange={() => handleCheckboxChange(checkboxes)}
              />
            </div>
          )}
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default Checkboxes;
