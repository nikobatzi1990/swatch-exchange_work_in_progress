import React, { useState } from 'react';
import { Text, View } from "react-native";
import Dropdown from "@/components/Dropdown";
import { brands } from '@/constants/brands';

export default function AddSwatch() {  
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Dropdown items={brands} placeholder={"Select a brand"}/>
    </View>
  );
}
