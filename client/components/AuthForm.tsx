import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Input from './Input';

interface AuthFormData {
  email: string,
  password: string,
};

export default function AuthForm() {
  const { 
    control, 
    handleSubmit, 
    formState: { errors }
  } = useForm<AuthFormData>({
    defaultValues: {
      email: "",
      password: ""
    }
});

  const onSubmit = (data: any) => console.log(data);

  return (
  <View>
    <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <Input 
            autoComplete="email" 
            label="Email Address" 
            accessibilityLabel="email address input" 
            value={value}
            onChangeText={onChange}
          />  
        )}
        name="email"
      />
      {errors.email && <Text style={styles.error}>This field is required.</Text>}

      <Controller
        control={control} 
        rules={{ required: true, maxLength: 100, }}
        render={({ field: { onChange, value } }) => (
          <Input 
            autoComplete="password" 
            label="Password" 
            accessibilityLabel="password input"
            secureTextEntry={true}
            value={value}
            onChangeText={onChange}
          />  
        )}
        name="password"
      />
      {errors.password && <Text style={styles.error}>This field is required.</Text>}
    <View style={styles.button}>
      <Button 
        title="Submit" 
        onPress={handleSubmit(onSubmit)}
        accessibilityLabel="submit button" 
      />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center"
  },
  error: {
    color: "red",
    marginBottom: 10,
  }
});