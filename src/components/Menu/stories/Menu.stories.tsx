import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { Menu, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { MenuLargeNumberOfItemsTemplate } from './MenuLargeNumberOfItems.template';
import { MenuWithLockCycleScrollTemplate } from './MenuWithLockCycleScroll.template';
import { MenuVirtualScrollTemplate } from './MenuVirtualScroll.template';
import { MenuCardGroupsTemplate } from './MenuCardGroups.template';
import { MenuSimpleTemplate } from './MenuSimple.template';
import { MenuMultiLevelTemplate } from './MenuMultiLevel.template';
import { MenuIconsAndAdditionalTextTemplate } from './MenuIconsAndAdditionalText.template';
import { MenuCheckboxTemplate } from './MenuCheckbox.template';
import { MenuRadioButtonTemplate } from './MenuRadioButton.template';
import { MenuWithCustomItemsTemplate } from './MenuWithCustomItems.template';
import { MenuTooltipTemplate } from './MenuTooltip.template';
import { MenuMultiLineTemplate } from './MenuMultiLine.template';
import { MenuActionsTwoButtonsTemplate } from './MenuActionsTwoButtons.template';
import { MenuActionsAddUserValueTemplate } from './MenuActionsAddUserValue.template';
import { MenuCheckboxGroupTemplate } from './MenuCheckboxGroup.template';

// Imports of text sources
import MenuLargeNumberOfItemsRaw from './MenuLargeNumberOfItems.template?raw';
import MenuWithLockCycleScrollRaw from './MenuWithLockCycleScroll.template?raw';
import MenuVirtualScrollRaw from './MenuVirtualScroll.template?raw';
import MenuCardGroupsRaw from './MenuCardGroups.template?raw';
import MenuSimpleRaw from './MenuSimple.template?raw';
import MenuMultiLevelRaw from './MenuMultiLevel.template?raw';
import MenuIconsAndAdditionalTextRaw from './MenuIconsAndAdditionalText.template?raw';
import MenuCheckboxRaw from './MenuCheckbox.template?raw';
import MenuRadioButtonRaw from './MenuRadioButton.template?raw';
import MenuWithCustomItemsRaw from './MenuWithCustomItems.template?raw';
import MenuTooltipRaw from './MenuTooltip.template?raw';
import MenuMultiLineRaw from './MenuMultiLine.template?raw';
import MenuActionsTwoButtonsRaw from './MenuActionsTwoButtons.template?raw';
import MenuActionsAddUserValueRaw from './MenuActionsAddUserValue.template?raw';
import MenuCheckboxGroupRaw from './MenuCheckboxGroup.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Компонент Menu имеет три размера и может быть с иконкой или без. Высота строки : l - 48px, m - 40px, s - 32px
  </Desc>
);
export default {
  title: 'Admiral-2.1/Menu',
  component: Menu,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A68931',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A68967',
      },
    ],
  },
  args: {
    dimension: 'l',
  },
  argTypes: {
    dimension: {
      options: ['l', 'm', 's'],
      control: { type: 'radio' },
    },
    active: {
      control: { type: 'text' },
    },
    selected: {
      control: { type: 'text' },
    },
    defaultSelected: {
      control: { type: 'text' },
    },
    maxHeight: {
      control: { type: 'text' },
    },
    multiSelection: {
      control: { type: 'boolean' },
    },
    disableSelectedOptionHighlight: {
      control: { type: 'boolean' },
    },
    rowCount: {
      control: { type: 'number' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Menu>;

//<editor-fold desc="Базовый пример">
const SimpleStory: StoryFn<typeof Menu> = (props) => <MenuSimpleTemplate {...props} />;

export const SimpleExample = {
  render: SimpleStory,
  parameters: {
    docs: {
      source: {
        code: MenuSimpleRaw,
      },
      description: {
        story: 'Базовый пример построения Menu.',
      },
    },
  },
  name: 'Базовый пример',
};
//</editor-fold>

//<editor-fold desc="Пример с иконками и дополнительным текстом">
const IconsStory: StoryFn<typeof Menu> = (props) => <MenuIconsAndAdditionalTextTemplate {...props} />;

export const IconsExample = {
  render: IconsStory,
  parameters: {
    docs: {
      source: {
        code: MenuIconsAndAdditionalTextRaw,
      },
      description: {
        story: 'Пример меню с иконками и дополнительным текстом',
      },
    },
  },
  name: 'Пример с иконками и дополнительным текстом',
};
//</editor-fold>

//<editor-fold desc="Пример с группами карт">
const CardGroupsStory: StoryFn<typeof Menu> = (props) => <MenuCardGroupsTemplate {...props} />;
export const CardGroupsExample = {
  render: CardGroupsStory,
  parameters: {
    docs: {
      source: {
        code: MenuCardGroupsRaw,
      },
      description: {
        story: 'Пример построения меню с группированием пунктов',
      },
    },
  },
  name: 'Пример с группами карт',
};
//</editor-fold>

//<editor-fold desc="Пример с кастомными пунктами меню">
const MenuWithCustomItemsStory: StoryFn<typeof Menu> = (props) => <MenuWithCustomItemsTemplate {...props} />;
export const MenuWithCustomItemsExample = {
  render: MenuWithCustomItemsStory,
  parameters: {
    docs: {
      source: {
        code: MenuWithCustomItemsRaw,
      },
      description: {
        story: 'Пример меню с использованием собственных пунктов',
      },
    },
  },
  name: 'Пример с кастомными пунктами меню',
};
//</editor-fold>

//<editor-fold desc="Меню с checkbox">
const CheckboxMenuStory: StoryFn<typeof Menu> = (props) => <MenuCheckboxTemplate {...props} />;
export const CheckboxMenuExample = {
  render: CheckboxMenuStory,
  parameters: {
    docs: {
      source: {
        code: MenuCheckboxRaw,
      },
      description: {
        story: 'Пример меню с пунктами, содержащими Checkbox.',
      },
    },
  },
  name: 'Меню с checkbox',
};
//</editor-fold>

//<editor-fold desc="Меню с radioButton">
const RadioButtonMenuStory: StoryFn<typeof Menu> = (props) => <MenuRadioButtonTemplate {...props} />;
export const RadioButtonMenuExample = {
  render: RadioButtonMenuStory,
  parameters: {
    docs: {
      source: {
        code: MenuRadioButtonRaw,
      },
      description: {
        story: 'Пример меню с пунктами, содержащими RadioButton.',
      },
    },
  },
  name: 'Меню с RadioButton',
};
//</editor-fold>

//<editor-fold desc="Пример с Tooltip">
const TooltipMenuStory: StoryFn<typeof Menu> = (props) => <MenuTooltipTemplate {...props} />;
export const TooltipMenuExample = {
  render: TooltipMenuStory,
  parameters: {
    docs: {
      source: {
        code: MenuTooltipRaw,
      },
      description: {
        story: 'Пример меню с пунктами, имеющими tooltip',
      },
    },
  },
  name: 'Пример с Tooltip',
};
//</editor-fold>

//<editor-fold desc="Пример с многострочными пунктами">
const MultiLineMenuStory: StoryFn<typeof Menu> = (props) => <MenuMultiLineTemplate {...props} />;
export const MultiLineMenuExample = {
  render: MultiLineMenuStory,
  parameters: {
    docs: {
      source: {
        code: MenuMultiLineRaw,
      },
      description: {
        story: 'Пример с многострочными пунктами',
      },
    },
  },
  name: 'Пример с многострочными пунктами',
};
//</editor-fold>

//<editor-fold desc="Пример с Actions с двумя кнопками">
const MenuActionsTwoButtonsStory: StoryFn<typeof Menu> = (props) => <MenuActionsTwoButtonsTemplate {...props} />;
export const MenuActionsTwoButtonsExample = {
  render: MenuActionsTwoButtonsStory,
  parameters: {
    docs: {
      source: {
        code: MenuActionsTwoButtonsRaw,
      },
      description: {
        story: 'Пример с Actions с двумя кнопками',
      },
    },
  },
  name: 'Пример с Actions с двумя кнопками',
};
//</editor-fold>

//<editor-fold desc="Пример с Actions и Search">
const MenuActionsAddUserValueStory: StoryFn<typeof Menu> = (props) => <MenuActionsAddUserValueTemplate {...props} />;
export const MenuActionsAddUserValueExample = {
  render: MenuActionsAddUserValueStory,
  parameters: {
    docs: {
      source: {
        code: MenuActionsAddUserValueRaw,
      },
      description: {
        story: 'Пример с Actions и Search',
      },
    },
  },
  name: 'Пример с Actions и Search',
};
//</editor-fold>

//<editor-fold desc="Пример с CheckboxGroup">
const MenuCheckboxGroupStory: StoryFn<typeof Menu> = (props) => <MenuCheckboxGroupTemplate {...props} />;
export const MenuCheckboxGroupExample = {
  render: MenuCheckboxGroupStory,
  parameters: {
    docs: {
      source: {
        code: MenuCheckboxGroupRaw,
      },
      description: {
        story: 'Пример с CheckboxGroup',
      },
    },
  },
  name: 'Пример с CheckboxGroup',
};
//</editor-fold>

//<editor-fold desc="Пример с большим количеством item">
const LargeNumberOfItemsStory: StoryFn<typeof Menu> = (props) => <MenuLargeNumberOfItemsTemplate {...props} />;
export const LargeNumberOfItemsExample = {
  render: LargeNumberOfItemsStory,
  parameters: {
    docs: {
      source: {
        code: MenuLargeNumberOfItemsRaw,
      },
      description: {
        story: 'Пример с большим количеством item. Для проверки прокрутки меню при быстрой смене активного элемента.',
      },
    },
  },
  name: 'Пример с большим количеством item',
};
//</editor-fold>

//<editor-fold desc="Пример без цикла обхода пунктов">
const MenuWithLockCycleScrollStory: StoryFn<typeof Menu> = (props) => <MenuWithLockCycleScrollTemplate {...props} />;

export const MenuWithLockCycleScrollExample = {
  render: MenuWithLockCycleScrollStory,
  parameters: {
    docs: {
      source: {
        code: MenuWithLockCycleScrollRaw,
      },
      description: {
        story:
          'Для блокировки цикличного обхода пунктов меню можно использовать onForwardCycleApprove и onBackwardCycleApprove.',
      },
    },
  },
  name: 'Пример без цикла обхода пунктов',
};
//</editor-fold>

//<editor-fold desc="Виртуальный скролл">
const VirtualScrollStory: StoryFn<typeof Menu> = (props) => <MenuVirtualScrollTemplate {...props} />;
export const VirtualScrollExample = {
  render: VirtualScrollStory,
  parameters: {
    docs: {
      source: {
        code: MenuVirtualScrollRaw,
      },
      description: {
        story:
          'Для включения виртуального скролла, необходимо передать в параметр virtualScroll объект, ' +
          'содержаний размер 1 элемента меню, для расчета максимальной высоты контейнера меню. ' +
          'Или установить значение "auto". В этом случае максимальная высота будет рассчитана исходя из свойства "dimension"',
      },
    },
  },
  name: 'Виртуальный скролл',
};
//</editor-fold>

//<editor-fold desc="Многоуровневое меню">
const MultiLevelStory: StoryFn<typeof Menu> = (props) => <MenuMultiLevelTemplate {...props} />;
export const MultiLevelExample = {
  render: MultiLevelStory,
  parameters: {
    docs: {
      source: {
        code: MenuMultiLevelRaw,
      },
      description: {
        story:
          'Многоуровневая структура меню задается в модели данных, через указание дочерних элементов в свойстве subItems. ' +
          'Ограничения по количеству уровней вложенности нет, но не следует забывать о комфорте пользователей.',
      },
    },
  },
  name: 'Многоуровневое меню',
};
//</editor-fold>
