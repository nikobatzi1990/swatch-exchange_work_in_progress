import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface InputProps {
  autoComplete: 'email' | 'username' | 'password' | 'off';
}

const Input = ({ autoComplete }: InputProps) => {
  const [text, onChangeText] = React.useState('');

  return (
  <View>
    <Text>Email Address</Text>
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      value={text}
      autoComplete={autoComplete ?? 'off'}
      accessibilityLabel="email address input field"
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
    }
  });

export default Input;