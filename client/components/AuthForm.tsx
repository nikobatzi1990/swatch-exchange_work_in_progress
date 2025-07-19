import React from 'react';
import { View, Button, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Input from './Input';

interface AuthFormData {
  email: string,
  password: string,
};

const AuthForm = () => {
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
      {errors.email && <Text>This field is required.</Text>}

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
      {errors.password && <Text>This field is required.</Text>}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
  </View>
  );
}

export default AuthForm;