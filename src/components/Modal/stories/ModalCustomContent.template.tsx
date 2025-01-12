import * as React from 'react';
import { Modal, Button } from '@admiral-ds/react-ui';
import type { ModalProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

export const ModalCustomContentTemplate = (args: ModalProps) => {
  const [opened, setOpened] = React.useState(false);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Button onClick={() => setOpened(true)}>Open modal with custom content</Button>
      {opened && (
        <Modal
          {...args}
          dimension="l"
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
        >
          <h1 id="modal-title" style={{ paddingLeft: '24px' }}>
            <strong>Modal title</strong>
          </h1>
          <i style={{ paddingLeft: '24px' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
            quam quasi quod ut veritatis?
          </i>
          <div
            style={{
              marginTop: '40px',
              width: '80%',
              display: 'flex',
              justifyContent: 'space-between',
              paddingLeft: '24px',
            }}
          >
            <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
              First button
            </Button>
            <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
              Second button
            </Button>
            <Button appearance="primary" dimension="m" onClick={() => setOpened(false)}>
              Third button
            </Button>
          </div>
        </Modal>
      )}
    </ThemeProvider>
  );
};
