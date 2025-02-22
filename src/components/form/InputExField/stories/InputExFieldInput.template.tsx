import { useState } from 'react';
import type { ChangeEvent, ReactNode } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { InputExField, Spinner } from '@admiral-ds/react-ui';
import type { InputExFieldProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

const PREFIX_OPTIONS = ['prefix One', 'prefix Two', 'prefix Three'];
const SUFFIX_OPTIONS = ['suffix One', 'suffix Two', 'suffix Three'];

export const InputExFieldInputTemplate = ({
  value = 'Привет',
  label = 'Label',
  ...props
}: InputExFieldProps & { themeBorderKind?: BorderRadiusType }) => {
  const [localValue, setValue] = useState<string>(String(value) ?? '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [prefixValue, setPrefixValue] = useState<ReactNode>('prefix One');
  const [suffixValue, setSuffixValue] = useState<ReactNode>('suffix One');
  return (
    <ThemeProvider theme={swapBorder}>
      <DisplayContainer>
        <InputExField
          data-container-id="InputExFieldIdOne"
          {...props}
          value={localValue}
          onChange={handleChange}
          suffixValue={suffixValue}
          suffixValueList={SUFFIX_OPTIONS}
          onSuffixValueChange={setSuffixValue}
          suffixDropContainerStyle={{ dropContainerClassName: 'suffixDropContainerClass' }}
          label={label}
        />
        <InputExField
          data-container-id="InputExFieldIdTwo"
          required
          label="Поле необходимо заполнить"
          prefixValue={prefixValue}
          prefixValueList={PREFIX_OPTIONS}
          onPrefixValueChange={setPrefixValue}
          prefixDropContainerStyle={{ dropContainerClassName: 'prefixDropContainerClass' }}
        />
        <InputExField
          data-container-id="InputExFieldIdThree"
          suffixValue={'suffix'}
          prefixValue={'prefix'}
          readOnly
          aria-readonly
          label="Поле с атрибутом readOnly"
          defaultValue="Этот текст не редактируемый"
        />
        <InputExField
          data-container-id="InputExFieldIdFour"
          suffixValue={'suffix'}
          prefixValue={'prefix'}
          disabled
          aria-disabled
          label="Поле с атрибутом disabled"
          placeholder="Placeholder"
        />
        <InputExField
          data-container-id="InputExFieldIdFive"
          prefixValue={'prefix'}
          status="error"
          label="Поле с ошибкой"
          extraText="Поле не прошло валидацию, необходимо ввести корректное значение"
        />
        <InputExField
          data-container-id="InputExFieldIdWSix"
          suffixValue={'suffix'}
          status="success"
          label="Поле с индикацией успеха"
          extraText="Поле успешно прошло валидацию"
        />
        <InputExField
          data-container-id="InputExFieldIdSeven"
          prefixValue={'prefix'}
          placeholder="идет поиск ..."
          label="Поле с иконкой загрузки"
          suffixValue={'suffix'}
          icons={<Spinner dimension="m" />}
        />
        <InputExField
          displayClearIcon
          data-container-id="InputExFieldIdEight"
          prefixValue={'prefix'}
          label="Поле иконкой очистки"
        />
      </DisplayContainer>
    </ThemeProvider>
  );
};
