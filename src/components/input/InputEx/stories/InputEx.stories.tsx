import type { Meta, StoryFn } from '@storybook/react';
import { InputEx, INPUT_DIMENSIONS_VALUES, INPUT_STATUS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { InputExBaseTemplate } from './InputExBase.template';
import { InputExPrefixSuffixSelectTemplate } from './InputExPrefixSuffixSelect.template';
import { InputExCustomTemplate } from './InputExCustom.template';

// Imports of text sources
import InputExBaseRaw from './InputExBase.template?raw';
import InputExPrefixSuffixSelectRaw from './InputExPrefixSuffixSelect.template?raw';
import InputExCustomRaw from './InputExCustom.template?raw';

export default {
  title: 'Admiral-2.1/Input/InputEx',
  component: InputEx,
  decorators: undefined,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        label: 'label',
        caption: 'caption',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=162659-147609&mode=dev',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=112553-78310&mode=dev',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=162659-149149&mode=dev',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    status: {
      control: { type: 'radio' },
      options: INPUT_STATUS_VALUES,
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    displayStatusIcon: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    prefixValue: {
      control: { type: 'text' },
    },
    suffixValue: {
      control: { type: 'text' },
    },
    onChange: {
      action: 'onChange',
    },
    icons: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    prefixValueList: {
      control: false,
    },
    suffixValueList: {
      control: false,
    },
    alignDropRef: {
      control: false,
    },
    dropContainerCssMixin: {
      control: false,
    },
    prefixDropContainerStyle: {
      control: false,
    },
    suffixDropContainerStyle: {
      control: false,
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof InputEx>;

//<editor-fold desc="Базовый InputExtended">
const InputExBaseStory: StoryFn<typeof InputEx> = (props) => <InputExBaseTemplate {...props} />;

export const InputExBase = {
  render: InputExBaseStory,

  parameters: {
    docs: {
      source: {
        code: InputExBaseRaw,
      },
    },
  },

  name: 'Базовый InputExtended',
};

//</editor-fold>

//<editor-fold desc="InputExtended с выбором префикса и суффикса">
const InputExPrefixSuffixSelectStory: StoryFn<typeof InputEx> = (props) => (
  <InputExPrefixSuffixSelectTemplate {...props} />
);

export const InputExPrefixSuffixSelect = {
  render: InputExPrefixSuffixSelectStory,

  parameters: {
    docs: {
      source: {
        code: InputExPrefixSuffixSelectRaw,
      },
    },
  },

  name: 'InputExtended с выбором префикса и суффикса',
};

//</editor-fold>

//<editor-fold desc="InputExtended. Кастомизация">
const InputExCustomStory: StoryFn<typeof InputEx> = (props) => <InputExCustomTemplate {...props} />;

export const InputExCustom = {
  render: InputExCustomStory,

  parameters: {
    docs: {
      source: {
        code: InputExCustomRaw,
      },
    },
  },

  name: 'InputExtended. Кастомизация',
};
