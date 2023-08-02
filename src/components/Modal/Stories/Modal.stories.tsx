import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';
import { Modal, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  ModalTwoButtonsTemplate,
  ModalOneButtonTemplate,
  ModalWithoutButtonsTemplate,
  ModalScrollTemplate,
  ModalCustomContentTemplate,
  ModalCustomOverlayTemplate,
  ModalStatusIconTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import ModalTwoButtonsRaw from './Templates/ModalTwoButtons?raw';
import ModalOneButtonRaw from './Templates/ModalOneButton?raw';
import ModalWithoutButtonsRaw from './Templates/ModalWithoutButtons?raw';
import ModalScrollRaw from './Templates/ModalScroll?raw';
import ModalCustomContentRaw from './Templates/ModalCustomContent?raw';
import ModalCustomOverlayRaw from './Templates/ModalCustomOverlay?raw';
import ModalStatusIconRaw from './Templates/ModalStatusIcon?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Модальное окно используется для ситуаций, когда требуется акцентировать внимание пользователя на подтверждении
    какого-либо действия. Всплывает по центру страницы и блокирует содержимое страницы, которое расположено под
    модальным окном.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Modal',
  decorators: undefined,
  component: Modal,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A49046',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A49211',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A49265',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    mobile: {
      control: { type: 'boolean' },
    },
    closeOnEscapeKeyDown: {
      control: { type: 'boolean' },
    },
    closeOnOutsideClick: {
      control: { type: 'boolean' },
    },
    displayCloseIcon: {
      control: { type: 'boolean' },
    },
    overlayClassName: {
      control: { type: 'text' },
    },
    container: {
      control: false,
    },
    overlayStyledCss: {
      control: false,
    },
    locale: {
      control: false,
    },
    overlayStyle: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Modal>;

//<editor-fold desc="Пример c двумя кнопками">
const ModalTwoButtonsStory: StoryFn<typeof Modal> = (props) => <ModalTwoButtonsTemplate {...cleanUpProps(props)} />;

export const ModalTwoButtonsExample = {
  render: ModalTwoButtonsStory,

  parameters: {
    docs: {
      source: {
        code: ModalTwoButtonsRaw,
      },
    },
  },

  name: 'Modal. Пример c двумя кнопками.',
};

//</editor-fold>

//<editor-fold desc="Пример c одной кнопкой">
const ModalOneButtonStory: StoryFn<typeof Modal> = (props) => <ModalOneButtonTemplate {...cleanUpProps(props)} />;

export const ModalOneButtonExample = {
  render: ModalOneButtonStory,

  parameters: {
    docs: {
      source: {
        code: ModalOneButtonRaw,
      },
    },
  },

  name: 'Modal. Пример c одной кнопкой.',
};

//</editor-fold>

//<editor-fold desc="Пример без кнопок">
const ModalWithoutButtonsStory: StoryFn<typeof Modal> = (props) => (
  <ModalWithoutButtonsTemplate {...cleanUpProps(props)} />
);

export const ModalWithoutButtonsExample = {
  render: ModalWithoutButtonsStory,

  parameters: {
    docs: {
      source: {
        code: ModalWithoutButtonsRaw,
      },
    },
  },

  name: 'Modal. Пример без кнопок.',
};

//</editor-fold>

//<editor-fold desc="Пример со скроллом">
const ModalScrollStory: StoryFn<typeof Modal> = (props) => <ModalScrollTemplate {...cleanUpProps(props)} />;

export const ModalScrollExample = {
  render: ModalScrollStory,

  parameters: {
    docs: {
      source: {
        code: ModalScrollRaw,
      },
    },
  },

  name: 'Modal. Пример со скроллом.',
};

//</editor-fold>

//<editor-fold desc="Свободное (кастомизированное) наполнение">
const ModalCustomContentStory: StoryFn<typeof Modal> = (props) => (
  <ModalCustomContentTemplate {...cleanUpProps(props)} />
);

export const ModalCustomContentExample = {
  render: ModalCustomContentStory,

  parameters: {
    docs: {
      source: {
        code: ModalCustomContentRaw,
      },
    },
  },

  name: 'Modal. Свободное (кастомизированное) наполнение.',
};

//</editor-fold>

//<editor-fold desc="Кастомизация подложки модального окна">
const ModalCustomOverlayStory: StoryFn<typeof Modal> = (props) => (
  <ModalCustomOverlayTemplate {...cleanUpProps(props)} />
);

export const ModalCustomOverlayExample = {
  render: ModalCustomOverlayStory,

  parameters: {
    docs: {
      source: {
        code: ModalCustomOverlayRaw,
      },
      description: {
        story: `У пользователя есть возможность кастомизировать внешний вид подложки модального окна.
        Для этого можно воспользоваться параметром overlayStyledCss, чтобы задать миксин со стилями для подложки.
        Либо можно воспользоваться параметрами overlayClassName, overlayStyle.`,
      },
    },
  },

  name: 'Modal. Кастомизация подложки модального окна.',
};

//</editor-fold>

//<editor-fold desc="Статусные иконки">
const ModalStatusIconStory: StoryFn<typeof Modal> = (props) => <ModalStatusIconTemplate {...cleanUpProps(props)} />;

export const ModalStatusIconExample = {
  render: ModalStatusIconStory,

  parameters: {
    docs: {
      source: {
        code: ModalStatusIconRaw,
      },
      description: {
        story: `Используются в простых текстовых модальных окнах для оповещений пользователя о важных 
        событиях. Статус модального окна может быть четырех типов: Success, Information, Danger, Warning.`,
      },
    },
  },

  name: 'Modal. Статусные иконки.',
};

//</editor-fold>
