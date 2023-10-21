import React from 'react';

import { UseControllerProps, FieldValues, Controller } from 'react-hook-form';
import { InputCard, InputCardProps } from 'src/components/InputCard';

export function FormInputCard<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...textInputProps
}: InputCardProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <InputCard
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...textInputProps}
        />
      )}
    />
  );
}
