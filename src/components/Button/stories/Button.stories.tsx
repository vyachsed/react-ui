import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { Button, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { ButtonLoaderTemplate } from './ButtonLoader.template';
import { ButtonWithIconTemplate } from './ButtonWithIcon.template';
import { ButtonStylesTemplate } from './ButtonStyles.template';
import { ButtonPlaygroundTemplate } from './ButtonPlayground.template';

// Imports of text sources
import ButtonLoaderRaw from './ButtonLoader.template?raw';
import ButtonWithIconRaw from './ButtonWithIcon.template?raw';
import ButtonStylesRaw from './ButtonStyles.template?raw';
import ButtonPlaygroundRaw from './ButtonPlayground.template?raw';

export default {
  title: 'Admiral-2.1/Button',
  component: Button,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19734',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A16209',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    skeleton: {
      control: 'boolean',
    },
    appearance: {
      options: ['primary', 'secondary', 'danger', 'success', 'ghost', 'white'],
      control: { type: 'select' },
    },
    onClick: { action: 'clicked' },

    type: {
      options: ['button', 'submit', 'reset'],
      control: { type: 'radio' },
    },

    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },

    disabled: {
      control: { type: 'boolean' },
    },

    displayAsSquare: {
      control: { type: 'boolean' },
    },

    displayAsDisabled: {
      control: { type: 'boolean' },
    },

    loading: {
      control: { type: 'boolean' },
    },

    icon: {
      control: false,
    },

    iconStart: {
      control: false,
    },

    iconEnd: {
      control: false,
    },

    buttonCssMixin: {
      control: false,
    },
  },
} as Meta<typeof Button>;

//<editor-fold desc="Button. Playground">
const ButtonPlaygroundStory: StoryFn<typeof Button> = (props) => {
  return <ButtonPlaygroundTemplate {...props} />;
};

export const ButtonPlayground = {
  render: ButtonPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: ButtonPlaygroundRaw,
      },
    },
  },

  name: 'Button. Playground',
};

//</editor-fold>

//<editor-fold desc="Button. Стили">
const ButtonStylesStory: StoryFn<typeof Button> = (props) => {
  return <ButtonStylesTemplate {...props} />;
};

export const ButtonStyles = {
  render: ButtonStylesStory,

  parameters: {
    docs: {
      source: {
        code: ButtonStylesRaw,
      },
    },
  },

  name: 'Button. Стили',
};

//</editor-fold>

//<editor-fold desc="Button с иконкой">
const ButtonWithIconStory: StoryFn<typeof Button> = (props) => {
  return <ButtonWithIconTemplate {...props} />;
};

export const ButtonWithIcon = {
  render: ButtonWithIconStory,

  parameters: {
    docs: {
      source: {
        code: ButtonWithIconRaw,
      },
    },
  },

  name: 'Button с иконкой',
};

//</editor-fold>

//<editor-fold desc="Button. Загрузка">
const ButtonLoaderStory: StoryFn<typeof Button> = (props) => {
  return <ButtonLoaderTemplate {...props} />;
};

export const ButtonLoader = {
  render: ButtonLoaderStory,

  parameters: {
    docs: {
      source: {
        code: ButtonLoaderRaw,
      },
    },
  },

  name: 'Button. Загрузка',
};
