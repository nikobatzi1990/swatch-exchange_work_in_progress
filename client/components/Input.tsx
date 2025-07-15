import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface InputProps {
  autoComplete: 'email' | 'username' | 'password' | 'off';
  label: string;
  accessibilityLabel: string;
  secureTextEntry?: boolean
}

const Input = ({ autoComplete, label, accessibilityLabel, secureTextEntry }: InputProps) => {
  const [text, onChangeText] = React.useState('');

  return (
  <View>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
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
    },
    label: {
      marginTop: 8,
      marginBottom: 8,
    }
  });

export default Input;