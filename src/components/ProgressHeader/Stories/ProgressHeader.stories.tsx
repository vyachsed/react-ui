import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { ProgressHeader } from '@admiral-ds/react-ui';

import { ProgressHeaderBaseTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import ProgressHeaderBaseRaw from './Templates/ProgressHeaderBase?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Показывает визуальный прогресс загрузки страницы. Компонент отображается наверху страницы, непосредственно под
    шапкой браузера на самом верху рабочей области сайта. Ширина равняется ширине окна браузера.
  </Desc>
);

export default {
  title: 'Admiral-2.1/ProgressHeader/Base',
  decorators: undefined,
  component: ProgressHeader,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A24985',
    },
  },
  argTypes: {
    appearance: {
      options: ['primary', 'error'],
      control: { type: 'radio' },
    },
    percent: {
      control: { type: 'number' },
    },
  },
} as Meta<typeof ProgressHeader>;

const ProgressHeaderBaseStory: StoryFn<typeof ProgressHeader> = (props) => (
  <ProgressHeaderBaseTemplate {...cleanUpProps(props)} />
);

export const ProgressHeaderBase = {
  render: ProgressHeaderBaseStory,

  parameters: {
    docs: {
      source: {
        code: ProgressHeaderBaseRaw,
      },
    },
  },

  name: 'Базовый пример',
};
