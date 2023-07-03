import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import {
  SuggestField,
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';

import { SuggestFieldExampleTemplate } from './Templates';
import { DataAttributesDescription } from '#src/components/form/common';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import SuggestFieldExampleRaw from '!!raw-loader!./Templates/SuggestFieldExample';

export default {
  title: 'Admiral-2.1/Form Field/SuggestField',
  component: SuggestField,
  decorators: [withDesign],
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
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60520',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60826',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A60855',
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
    isLoading: {
      control: { type: 'boolean' },
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
    showTooltip: {
      control: { type: 'boolean' },
    },
    extraText: {
      control: { type: 'text' },
    },
    value: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    handleInput: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    options: {
      control: false,
    },
    portalTargetRef: {
      control: false,
    },
    onSearchButtonClick: {
      control: false,
    },
    dropMaxHeight: {
      control: { type: 'text' },
    },
    icon: {
      control: false,
    },
    icons: {
      control: false,
    },
    locale: {
      control: false,
    },
    dropContainerCssMixin: {
      control: false,
    },
    dropContainerClassName: {
      control: false,
    },
    dropContainerStyle: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof SuggestField>;

//<editor-fold desc="SuggestField example">
const SuggestFieldExampleStory: ComponentStory<typeof SuggestField> = (props) => (
  <SuggestFieldExampleTemplate {...cleanUpProps(props)} />
);

export const SuggestFieldExample = SuggestFieldExampleStory.bind({});
SuggestFieldExample.parameters = {
  docs: {
    source: {
      code: SuggestFieldExampleRaw,
    },
  },
};
SuggestFieldExample.storyName = 'SuggestField example';
//</editor-fold>