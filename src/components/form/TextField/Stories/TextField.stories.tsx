import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { TextField, INPUT_DIMENSIONS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { DataAttributesDescription } from '#src/components/form/common';
import { TextFieldInputTemplate } from '#src/components/form/TextField/Stories/Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import TextFieldInputRaw from './Templates/TextFieldInput?raw';

export default {
  title: 'Admiral-2.1/Form Field/TextField',
  component: TextField,
  decorators: undefined,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <DataAttributesDescription />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61323',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=23873%3A69875',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=23873%3A70116',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },

    rows: {
      control: { type: { name: 'number', required: false } },
    },

    maxRows: {
      control: { type: { name: 'number', required: false } },
    },

    maxLength: {
      control: { type: { name: 'number', required: false } },
    },

    extraText: {
      control: { type: 'text' },
    },

    label: {
      control: { type: 'text' },
    },

    displayClearIcon: {
      control: { type: 'boolean' },
    },

    disableCopying: {
      control: { type: 'boolean' },
    },

    displayCharacterCounter: {
      control: { type: 'boolean' },
    },

    displayInline: {
      control: { type: 'boolean' },
    },

    icons: {
      control: false,
    },

    handleInput: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    autoHeight: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof TextField>;

//<editor-fold desc="Text field example">
const TextFieldInputStory: StoryFn<typeof TextField> = (props) => <TextFieldInputTemplate {...cleanUpProps(props)} />;

export const TextFieldInput = {
  render: TextFieldInputStory,

  parameters: {
    docs: {
      source: {
        code: TextFieldInputRaw,
      },
    },
  },

  args: {},
  name: 'Text field example',
};
