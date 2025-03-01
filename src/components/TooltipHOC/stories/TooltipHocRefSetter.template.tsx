import * as React from 'react';
import { TooltipHoc, InputField, Button, refSetter } from '@admiral-ds/react-ui';
import type { TooltipHocProps, Theme, InputFieldProps } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';

const Separator = styled.div<{ height?: number }>`
  height: ${({ height }) => (height ? height : 20)}px;
`;

const Component = React.forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const handleBtnClick = () => {
    inputRef.current?.focus();
  };
  return (
    <>
      <InputField ref={refSetter(ref, inputRef)} {...props} />
      <Separator />
      <Button onClick={handleBtnClick}>Click me and focus input</Button>
    </>
  );
});
const TooltipedComponent = TooltipHoc(Component);

export const TooltipHocRefSetterTemplate = (args: TooltipHocProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <TooltipedComponent
        {...args}
        renderContent={() => `Contrary to popular belief, Lorem Ipsum is not simply random text.`}
        label={'Использование утилиты refSetter'}
      />
    </ThemeProvider>
  );
};
