import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Input = () => {
   const [text, onChangeText] = React.useState('');

   return (
    <SafeAreaProvider>
      <SafeAreaView>
         <TextInput
          // style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </SafeAreaView>
     </SafeAreaProvider>
   );
}

export default Input;