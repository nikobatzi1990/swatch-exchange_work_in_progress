import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Dropdown() {
   const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Holbein', value: 'holbein'},
      {label: 'Schmincke', value: 'schmincke'},
      {label: 'Sennelier', value: 'sennelier'},
      {label: 'Winsor & Newton', value: 'winsor & newton'},
    ]);

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
              setItems={setItems}
              placeholder={'Select a pigment brand'}
          />
        </View>
        {/* <Text>Selected Brand: {value === null ? 'none' : value}</Text> */}
      </View>
    );
}