import * as React from 'react';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { T } from '@admiral-ds/react-ui';

import { FontsDemoTemplate, TextStatusTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import TextStatusRaw from '!!raw-loader!./Templates/TextStatus';
import FontsDemoRaw from '!!raw-loader!./Templates/FontsDemo';

const Desc = styled.div`
  font-family: 'VTB Group UI', serif;
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Text — компонент для работы с Typography. Компонент отображает текст в соответствии с заданными HTML-тегом и стилем
    шрифта.
  </Desc>
);

export default {
  title: 'Admiral-2.1/T',
  decorators: [withDesign],
  component: T,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=9%3A24',
    },
  },
  argTypes: {
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof T>;

//<editor-fold desc="Text">
const TextStatusStory: ComponentStory<typeof T> = (props) => (
  <TextStatusTemplate font={'Main/XXL'} {...cleanUpProps(props)} />
);

export const TextStatus = TextStatusStory.bind({});
TextStatus.parameters = {
  docs: {
    source: {
      code: TextStatusRaw,
    },
  },
};
TextStatus.storyName = 'Text';
//</editor-fold>

//<editor-fold desc="Список стилей">
const FontsDemoStory: ComponentStory<typeof T> = () => <FontsDemoTemplate />;

export const FontsDemo = FontsDemoStory.bind({});
FontsDemo.storyName = 'Список стилей';
FontsDemo.parameters = {
  docs: {
    source: {
      code: FontsDemoRaw,
    },
    description: {
      story: `Ниже представлены таблицы стилей типографики, старая и обновленная версия, на которую постепенно будет произведен перевод библиотеки.
      Каждый из этих стилей можно передавать в компонент T в виде параметра font и в качестве результата получать StyledComponent с
      необходимыми стилями. \n\nТакже возможен случай, когда пользователю нужен css миксин (ThemedCssFunction) с определенными
      стилями типографики для последующего использования этого миксина в своих styled-компонентах.
      В таком случае можно воспользоваться объектом typography, экспортируемым из нашей библиотеки. Ключами
      этого объекта служат названия стилей типографики, а значениями css миксины.\n\nРядом с названием стиля типографики
      находится иконка копирования, по нажатию на которую можно будет скопировать
      пример кода для каждого стиля в отдельности.`,
    },
  },
};
//</editor-fold>