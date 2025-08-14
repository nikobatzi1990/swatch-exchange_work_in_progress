import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface DropdownProps {
  items: { label: string; value: string; }[];
  placeholder: string;
}

export default function Dropdown({ items, placeholder }: DropdownProps) {
   const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

    return (
      <View>
        <View
          style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 15,
          }}>
          <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              placeholder={placeholder}
          />
        </View>
        {/* <Text>Selected Brand: {value === null ? 'none' : value}</Text> */}
      </View>
    );
}