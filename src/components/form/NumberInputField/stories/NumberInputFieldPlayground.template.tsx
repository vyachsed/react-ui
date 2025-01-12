import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { NumberInputField, clearValue } from '@admiral-ds/react-ui';
import type { NumberInputFieldProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';

export const NumberInputFieldPlaygroundTemplate = ({
  defaultValue = '2 000',
  label = 'Введите сумму',
  precision = 0,
  maxValue = 10000,
  decimal,
  ...props
}: NumberInputFieldProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [status, setStatus] = React.useState<NumberInputFieldProps['status'] | undefined>(undefined);
  const [extraText, setExtraText] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numValue = Number(clearValue(event.target.value, precision, decimal));
    if (event.target.value && numValue > maxValue) {
      setStatus('error');
      setExtraText('Достигнуто максимальное значение');
    } else {
      setStatus(undefined);
      setExtraText('');
    }
  };

  return (
    <ThemeProvider theme={swapBorder}>
      <NumberInputField
        data-container-id="numberInputFieldIdOne"
        {...props}
        maxValue={maxValue}
        defaultValue={defaultValue}
        onChange={handleChange}
        label={label}
        precision={precision}
        decimal={decimal}
        status={status}
        extraText={extraText}
      />
    </ThemeProvider>
  );
};
