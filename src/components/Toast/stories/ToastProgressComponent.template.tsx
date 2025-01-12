import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import {
  Button,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemTitle,
  StyledNotificationItem,
  TextButton,
  TextInput,
  Toast,
  ToastItemWithProgress,
  ToastProvider,
  useToast,
} from '@admiral-ds/react-ui';
import type {
  ID,
  Theme,
  ToastItemProps,
  ToastProps,
  NotificationItemStatus,
  BorderRadiusType,
} from '@admiral-ds/react-ui';

import { uid } from '#src/components/common/uid';

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  > * {
    flex: 1 1 auto;
  }
`;

const Separator = styled.div`
  height: 20px;
`;

const toastStatuses: NotificationItemStatus[] = ['info', 'error', 'success', 'warning'];

const handleTextButtonClick = () => {
  console.log('TextButton click');
};

const MessageForm = () => {
  const [toastIdStack, setToastIdStack] = React.useState<Array<ToastItemProps>>([]);
  const [titleValue, setTitleValue] = React.useState('Toast title');
  const [contentValue, setContentValue] = React.useState('Toast content');
  const [textButton1Value, setTextButton1Value] = React.useState('TextButton1');
  const [textButton2Value, setTextButton2Value] = React.useState('TextButton2');
  const [toastStatus, setToastStatus] = React.useState(0);

  const { addToastItem, removeToastItem, autoDeleteTime } = useToast();

  const onClickHandlerAdd = () => {
    const id = uid();
    const renderFunction = (id: ID) => {
      const handleCloseToast = () => {
        removeToastItem({ id, renderToast: renderFunction });
        console.log('Toast is closed');
        setToastIdStack((prevToastIdStack) => prevToastIdStack.filter((toast) => toast.renderToast !== renderFunction));
      };

      return (
        <ToastItemWithProgress
          status={toastStatuses[toastStatus]}
          autoDeleteTime={autoDeleteTime}
          onRemoveNotification={handleCloseToast}
        >
          <StyledNotificationItem
            status={toastStatuses[toastStatus]}
            isClosable={true}
            displayStatusIcon={true}
            onClose={handleCloseToast}
          >
            <NotificationItemTitle>{titleValue}</NotificationItemTitle>
            <NotificationItemContent>{contentValue}</NotificationItemContent>
            <NotificationItemButtonPanel>
              <TextButton dimension="s" text={textButton1Value} onClick={handleTextButtonClick} />
              <TextButton dimension="s" text={textButton2Value} onClick={handleTextButtonClick} />
            </NotificationItemButtonPanel>
          </StyledNotificationItem>
        </ToastItemWithProgress>
      );
    };
    addToastItem({ id, renderToast: renderFunction });
    setToastIdStack((prev) => [...prev, { id, renderToast: renderFunction }]);
    setToastStatus((prevStatus) => (prevStatus + 1) % 4);
  };
  const onClickHandlerRemove = () => {
    const newToastIdStack = [...toastIdStack];
    const removeToast = newToastIdStack.shift();
    setToastIdStack(newToastIdStack);
    if (removeToast) {
      removeToastItem(removeToast);
    }
  };

  return (
    <div style={{ width: '550px' }}>
      <TextInput value={titleValue} onChange={(e) => setTitleValue(e.target.value)} />
      <Separator />
      <TextInput value={contentValue} onChange={(e) => setContentValue(e.target.value)} />
      <Separator />
      <Wrapper>
        <TextInput value={textButton1Value} onChange={(e) => setTextButton1Value(e.target.value)} />
        <TextInput value={textButton2Value} onChange={(e) => setTextButton2Value(e.target.value)} />
      </Wrapper>
      <Separator />
      <Wrapper>
        <Button onClick={onClickHandlerAdd}>Добавить сообщение</Button>
        <Button disabled={toastIdStack.length === 0} onClick={onClickHandlerRemove}>
          Удалить первое сообщение
        </Button>
      </Wrapper>
    </div>
  );
};

export const ToastProgressComponentTemplate = (props: ToastProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <ToastProvider autoDeleteTime={5000}>
        <MessageForm />
        <Toast position={props.position} />
      </ToastProvider>
    </ThemeProvider>
  );
};
