import { TextInput } from '@mantine/core';
import React from 'react';

type ButtonProps={
  label?:string,
  size?: string,
  placeholder?: string
}
const InputBox: React.FC<ButtonProps> = (props)=>{
  return (
    <TextInput
      withAsterisk
      {...props}
    />
  );
}

export default InputBox;