import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { TextButton, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';
import {
  TextButtonDimensionTemplate,
  TextButtonPlaygroundTemplate,
  TextButtonStatusTemplate,
} from '#src/components/TextButton/Stories/Templates';

// Imports of text sources
import TextButtonPlaygroundRaw from './Templates/TextButtonPlayground?raw';
import TextButtonDimensionRaw from './Templates/TextButtonDimension?raw';
import TextButtonStatusRaw from './Templates/TextButtonStatus?raw';

export default {
  title: 'Admiral-2.1/Text Button',
  decorators: undefined,
  component: TextButton,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A17830',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18134',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18216',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18175',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18257',
      },
    ],
  },
  argTypes: {
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    text: {
      control: { type: 'text' },
    },
    displayRight: {
      control: false,
    },
    iconStart: {
      control: false,
    },
    iconEnd: {
      control: false,
    },
    icon: {
      control: false,
    },
  },
} as Meta<typeof TextButton>;

//<editor-fold desc="TextButton. Playground">
const TextButtonPlaygroundStory: StoryFn<typeof TextButton> = (props) => (
  <TextButtonPlaygroundTemplate {...cleanUpProps(props)} />
);

export const TextButtonPlayground = {
  render: TextButtonPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: TextButtonPlaygroundRaw,
      },
    },
  },

  name: 'TextButton. Playground',
};

//</editor-fold>

//<editor-fold desc="TextButton. Размеры'">
const TextButtonDimensionStory: StoryFn<typeof TextButton> = (props) => (
  <TextButtonDimensionTemplate {...cleanUpProps(props)} />
);

export const TextButtonDimension = {
  render: TextButtonDimensionStory,

  parameters: {
    docs: {
      source: {
        code: TextButtonDimensionRaw,
      },
    },
  },

  name: 'TextButton. Размеры',
};

//</editor-fold>

//<editor-fold desc="TextButton. Скелетон, загрузка">
const TextButtonStatusStory: StoryFn<typeof TextButton> = (props) => (
  <TextButtonStatusTemplate {...cleanUpProps(props)} />
);

export const TextButtonStatus = {
  render: TextButtonStatusStory,

  parameters: {
    docs: {
      source: {
        code: TextButtonStatusRaw,
      },
    },
  },

  name: 'TextButton. Скелетон, загрузка',
};