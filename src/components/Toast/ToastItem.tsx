import * as React from 'react';
import styled from 'styled-components';
import { mediumGroupBorderRadius } from '#src/components/themes';
import { typography } from '#src/components/Typography';
import { Link } from '#src/components/Link';
import type { NotificationProps, NotificationStatus } from '#src/components/Notification';
import type { NotificationItemStatus } from '#src/components/NotificationItem';
import {
  StyledNotificationItem,
  NotificationItemButtonPanel,
  NotificationItemContent,
  NotificationItemTitle,
} from '#src/components/NotificationItem';

const StyledLink = styled(Link)`
  ${typography['Button/Button 2']}
`;

/** Данный шаблон предназначен для перехода на новую модель c Notification на
 * NotificationItem в ToastProvider.
 * Рекомендуется в дальнейшем использовать новый вариант NotificationItem
 * с полностью кастомным наполнением согласно дизайну
 * (пример можно посмотреть в разделе NotificationItem) */
export const DefaultToastItem = ({
  title,
  linkText = '',
  href = '',
  onClose,
  children,
  ...props
}: React.PropsWithChildren<NotificationProps>) => {
  return (
    <StyledNotificationItem {...props} onClose={onClose}>
      {title && <NotificationItemTitle>{title}</NotificationItemTitle>}
      <NotificationItemContent>{children}</NotificationItemContent>
      {linkText && (
        <NotificationItemButtonPanel>
          <StyledLink href={href}>{linkText || href}</StyledLink>
        </NotificationItemButtonPanel>
      )}
    </StyledNotificationItem>
  );
};

export interface ToastItemWithAutoDeleteProps {
  /** Колбек для удаления уведомления */
  onRemoveNotification: () => void;
  /** Время, после которого уведомление автоматически удалится */
  autoDeleteTime?: number;
}

/** Шаблон для отображения кастомного уведомления с автоматическим удалением
 * через заданное время */
export const ToastItemWithAutoDelete = ({
  children,
  onRemoveNotification,
  autoDeleteTime,
}: React.PropsWithChildren<ToastItemWithAutoDeleteProps>) => {
  React.useEffect(() => {
    if (!autoDeleteTime) return;

    const timerId = setTimeout(() => onRemoveNotification(), autoDeleteTime);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return <>{children}</>;
};

const Progress = styled.div.attrs((props: { percent: number }) => ({
  style: { width: `${props.percent}%` },
}))<{ percent: number; status?: NotificationStatus; duration: number }>`
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${({ theme, status }) => {
    if (status === 'warning') return theme.color['Warning/Warning 50 Main'];
    if (status === 'error') return theme.color['Error/Error 60 Main'];
    if (status === 'success') return theme.color['Success/Success 50 Main'];
    return theme.color['Primary/Primary 60 Main'];
  }};
  height: 4px;
  transition: ${({ duration }) => `all ${duration}ms linear`};
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
`;

/** Шаблон для отображения кастомного уведомления со шкалой отсчета времени,
 * через которое оно закроется */
export interface ToastItemWithProgressProps {
  /** Колбек для удаления уведомления */
  onRemoveNotification: () => void;
  /** Время, после которого уведомление автоматически удалится */
  autoDeleteTime?: number;
  /** Статус уведомления */
  status?: NotificationItemStatus;
  /** Шаг шкалы отсчета времени */
  progressStep?: number;
}

export const ToastItemWithProgress = ({
  children,
  status,
  onRemoveNotification,
  autoDeleteTime,
  progressStep = 1,
}: React.PropsWithChildren<ToastItemWithProgressProps>) => {
  const [progress, setProgress] = React.useState(100);

  const delta = (autoDeleteTime || 0) / (100 * progressStep);

  React.useEffect(() => {
    if (!autoDeleteTime) return;

    if (progress === 0) {
      onRemoveNotification();
      return;
    }
    const timerId = setTimeout(() => setProgress((prev) => prev - 1), delta);

    return () => {
      clearTimeout(timerId);
    };
  }, [progress, progressStep]);

  return (
    <Wrapper>
      {children}
      {progress > 0 && <Progress percent={progress} status={status} duration={delta} />}
    </Wrapper>
  );
};

DefaultToastItem.displayName = 'DefaultToastItem';

ToastItemWithAutoDelete.displayName = 'ToastItemWithAutoDelete';

ToastItemWithProgress.displayName = 'ToastItemWithProgress';
