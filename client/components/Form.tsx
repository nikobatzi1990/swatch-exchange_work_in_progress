import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

interface FormProps {
  children: React.ReactNode,
  name: string,
  onSubmit: (data: any) => void;
}

const Form = ({ children, name, onSubmit }: FormProps) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  return (
  <View>
    <Controller
        control={control}
        name={name}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={{ borderWidth: 1, marginBottom: 10 }}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      { children }
      {errors.username && <Text>This field is required.</Text>}

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
  </View>
  );
}

export default Form;