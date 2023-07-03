import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Button,
  DefaultToastItem,
  Toast,
  ToastItemWithAutoDelete,
  ToastProvider,
  useToast,
} from '@admiral-ds/react-ui';
import type { ID, IdentifyToast, Theme, ToastItemProps, ToastProps } from '@admiral-ds/react-ui';

import { uid } from '#src/components/common/uid';

const random = (min: number, max: number) => min + Number(Math.round(Math.random() * (max - min)));

const items: IdentifyToast[] = [
  {
    status: 'error',
    children: `Запрос завершился ошибкой`,
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'warning',
    children: 'Слишком много попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'info',
    children: 'Осталось 7 попыток',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
  {
    status: 'success',
    children: 'Запрос выполнен успешно',
    title: 'Заголовок',
    isClosable: true,
    linkText: 'Link',
    displayStatusIcon: true,
  },
];

const NotificationEmitter = () => {
  const [toastStack, setToastStack] = React.useState<Array<ToastItemProps>>([]);

  const { addToastItem, removeToastItem, autoDeleteTime } = useToast();

  const onClickHandlerAdd = () => {
    const customItem = random(0, 3);
    const toast = items[customItem];
    const id = uid();
    const renderToast = (id: ID) => {
      const handleOnClose = () => {
        removeToastItem({ id, renderToast });
        console.log('Toast is closed');
        setToastStack((prevToastIdStack) => prevToastIdStack.filter((toast) => toast.renderToast !== renderToast));
      };

      return (
        <>
          {autoDeleteTime ? (
            <ToastItemWithAutoDelete onRemoveNotification={handleOnClose} autoDeleteTime={autoDeleteTime}>
              <DefaultToastItem {...toast} onClose={toast.onClose || handleOnClose} />
            </ToastItemWithAutoDelete>
          ) : (
            <DefaultToastItem {...toast} onClose={toast.onClose || handleOnClose} />
          )}
        </>
      );
    };
    addToastItem({ id, renderToast });
    setToastStack((prev) => [...prev, { id, renderToast }]);
  };
  const onClickHandlerRemove = () => {
    const newToastIdStack = [...toastStack];
    const toastToRemove = newToastIdStack.shift();
    setToastStack(newToastIdStack);
    if (toastToRemove) {
      removeToastItem(toastToRemove);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <Button onClick={onClickHandlerAdd}>Добавить сообщение</Button>
      <div style={{ width: 20 }} />
      <Button disabled={toastStack.length === 0} onClick={onClickHandlerRemove}>
        Удалить первое сообщение
      </Button>
    </div>
  );
};

export const ToastNotificationTemplate = (props: ToastProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <ToastProvider autoDeleteTime={props.autoDeleteTime}>
        <NotificationEmitter />
        <Toast style={{ top: 128, left: 64 }} />
      </ToastProvider>
    </ThemeProvider>
  );
};