import React from 'react';
import {TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

interface InputProps {
  autoComplete: 'email' | 'username' | 'password' | 'off';
}

const Input = ({ autoComplete }: InputProps) => {
  const [text, onChangeText] = React.useState('');

  return (
  <SafeAreaProvider>
    <SafeAreaView>
        <TextInput
        // style={styles.input}
        onChangeText={onChangeText}
        value={text}
        autoComplete={autoComplete ?? 'off'}
      />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Input;