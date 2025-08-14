import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface InputProps {
  autoComplete: 'email' | 'username' | 'password' | 'off';
  label: string;
  accessibilityLabel: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
}

const Input = ({ value, onChangeText, autoComplete, label, accessibilityLabel, secureTextEntry }: InputProps) => {

  return (
  <View>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={value}
      autoComplete={autoComplete ?? 'off'}
      accessibilityLabel={accessibilityLabel}
      secureTextEntry={secureTextEntry}
    />
  </View>
  );
}

  const styles = StyleSheet.create({
    input: {
      padding: 5,
      borderRadius: 5,
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: "grey",
      marginBottom: 10,
    },
    label: {
      marginTop: 8,
      marginBottom: 8,
    }
  });

export default Input;