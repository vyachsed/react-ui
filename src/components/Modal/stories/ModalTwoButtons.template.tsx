import * as React from 'react';
import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalButtonPanel,
  Button,
  SelectField,
  InputField,
  Option,
} from '@admiral-ds/react-ui';
import type { ModalProps, Theme } from '@admiral-ds/react-ui';
import styled, { ThemeProvider } from 'styled-components';

const Separator = styled.div`
  height: 20px;
`;

const OPTIONS_SIMPLE = [
  'teeext 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'texttt 6',
];

type Props = {
  onYesClick: (p: { selected: number | string | null; inputValue: string }) => void;
  onNoClick: () => void;
};

const ModalForm = ({ onYesClick, onNoClick }: Props) => {
  const [selected, setSelected] = React.useState('');
  const [inputValue, setInputValue] = React.useState('');
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <ModalContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate ducimus nisi nulla numquam obcaecati
        quam quasi quod ut veritatis?
        <Separator />
        <SelectField
          label="label"
          className="Search"
          value={selected}
          onChange={handleSelectChange}
          placeholder="Placeholder"
        >
          {OPTIONS_SIMPLE.map((option, ind) => (
            <Option key={option} value={option} disabled={ind === 4}>
              {option}
            </Option>
          ))}
        </SelectField>
        <Separator />
        <InputField
          label="введите значение"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
      </ModalContent>
      <ModalButtonPanel>
        <Button appearance="primary" dimension="m" onClick={() => onYesClick({ selected, inputValue })}>
          Yes button
        </Button>
        <Button appearance="secondary" dimension="m" onClick={onNoClick}>
          No button
        </Button>
      </ModalButtonPanel>
    </>
  );
};

export const ModalTwoButtonsTemplate = (args: ModalProps) => {
  const [opened, setOpened] = React.useState(false);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Button onClick={() => setOpened(true)}>Open modal with 2 buttons</Button>
      {opened && (
        <Modal
          {...args}
          onClose={() => {
            setOpened(false);
          }}
          aria-labelledby="modal-title"
        >
          <ModalTitle id="modal-title">Modal title</ModalTitle>
          <ModalForm
            onYesClick={(p) => {
              console.log(`value ${p.inputValue}`);
              setOpened(false);
            }}
            onNoClick={() => setOpened(false)}
          />
        </Modal>
      )}
    </ThemeProvider>
  );
};
