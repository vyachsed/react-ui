import * as React from 'react';
import type { ChangeEvent } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SuggestField } from '@admiral-ds/react-ui';
import type { SuggestFieldProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;

const OPTIONS = [
  'text 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'text 6',
];

export const SuggestFieldExampleTemplate = ({
  placeholder = 'Наберите несколько символов...',
  label = 'Поле ввода с вариантами подстановки значений',
  ...props
}: SuggestFieldProps & { themeBorderKind?: BorderRadiusType }) => {
  const cleanProps = (Object.keys(props) as Array<keyof typeof props>).reduce(
    (acc, key) => {
      if (props[key] !== undefined) acc[key] = props[key];

      return acc;
    },
    {} as Record<any, any>,
  );

  const [localValue, setValue] = React.useState<string>(props.value ? String(props.value) : '');
  const [isLoading, setIsLoading] = React.useState(false);
  const [options, setOptions] = React.useState<string[] | undefined>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Если в инпуте больше 3х символов производим запрос на поиск совпадений
    if (localValue?.length < 3 && inputValue?.length > 2) {
      setIsLoading(true);
      setOptions([]);
    }

    console.log(`>>> onChange: ${inputValue}`);
    setValue(inputValue);
  };

  const handleOptionSelect = (value: string) => {
    console.log(`>>> onOptionSelect: ${value}`);
  };

  // Имитация запросов на бакэнд
  React.useEffect(() => {
    if (isLoading) {
      const timeout = window.setTimeout(() => {
        setIsLoading(false);
        setOptions([...OPTIONS]);
      }, 3000);
      return () => {
        window.clearTimeout(timeout);
      };
    }
  }, [isLoading]);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <DisplayContainer>
        <SuggestField
          data-container-id="suggestFieldIdOne"
          {...cleanProps}
          defaultValue="text"
          onChange={handleChange}
          onOptionSelect={handleOptionSelect}
          options={options}
          isLoading={isLoading}
          placeholder={placeholder}
          label={label}
        />
      </DisplayContainer>
    </ThemeProvider>
  );
};
