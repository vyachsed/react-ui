import { useState } from 'react';
import type { ChangeEvent } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { InputEx } from '@admiral-ds/react-ui';
import type { Theme, InputExProps, BorderRadiusType } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
`;

export const InputExBaseTemplate = ({
  placeholder = 'Placeholder',
  ...props
}: InputExProps & { themeBorderKind?: BorderRadiusType }) => {
  const [localValueOne, setValueOne] = useState<string>(props.value ? String(props.value) : 'Вариант с префиксом');
  const [localValueTwo, setValueTwo] = useState<string>(props.value ? String(props.value) : 'Вариант с суффиксом');
  const [localValueThree, setValueThree] = useState<string>(
    props.value ? String(props.value) : 'Вариант с префиксом и суффиксом',
  );

  const handleChangeOne = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValueOne(inputValue);
    props.onChange?.(e);
  };

  const handleChangeTwo = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValueTwo(inputValue);
    props.onChange?.(e);
  };

  const handleChangeThree = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValueThree(inputValue);
    props.onChange?.(e);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <InputEx
        {...props}
        value={localValueOne}
        onChange={handleChangeOne}
        prefixValue="Prefix"
        placeholder={placeholder}
      />
      <Separator />
      <InputEx
        {...props}
        value={localValueTwo}
        onChange={handleChangeTwo}
        suffixValue="Suffix"
        placeholder={placeholder}
      />
      <Separator />
      <InputEx
        {...props}
        value={localValueThree}
        onChange={handleChangeThree}
        prefixValue="Prefix"
        suffixValue="Suffix"
        placeholder={placeholder}
      />
    </ThemeProvider>
  );
};
