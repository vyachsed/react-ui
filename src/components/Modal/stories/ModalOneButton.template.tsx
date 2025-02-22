import * as React from 'react';
import { Modal, ModalTitle, ModalContent, ModalButtonPanel, Button } from '@admiral-ds/react-ui';
import type { ModalProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const ModalOneButtonTemplate = (args: ModalProps) => {
  const [opened, setOpened] = React.useState(false);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Button onClick={() => setOpened(true)}>Open modal with 1 button</Button>
      {opened && (
        <Modal
          {...args}
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
        >
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </ModalContent>
          <ModalButtonPanel>
            <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
              Yes button
            </Button>
          </ModalButtonPanel>
        </Modal>
      )}
    </ThemeProvider>
  );
};
