import * as React from 'react';
import { TabMenu } from '@admiral-ds/react-ui';
import type { TabMenuProps, Theme } from '@admiral-ds/react-ui';
import { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';
import { ThemeProvider } from 'styled-components';

const tabs = [
  {
    id: '1',
    content: 'Option 1',
    icon: <MinusCircleOutline />,
  },
  {
    id: '2',
    content: 'Option 22',
  },
  {
    id: '3',
    content: 'Option 333',
    badge: 5,
  },
  {
    id: '4',
    content: 'Option 4444',
  },
  {
    id: '5',
    content: 'Option 55555',
    badge: 4,
    icon: <MinusCircleOutline />,
  },
  {
    id: '6',
    content: 'Option 666666',
  },
  {
    id: '7',
    content: 'Option 7777777',
  },
  {
    id: '8',
    content: 'Option 88888888',
  },
  {
    id: '9',
    content: 'Option 999999999',
  },
];

export const TabMenuUnderlineTemplate = (args: TabMenuProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }
  const [selected, setSelected] = React.useState<string>('3');
  return (
    <ThemeProvider theme={swapBorder}>
      <TabMenu
        {...args}
        activeTab={selected}
        onChange={(id) => {
          setSelected(id);
        }}
        tabs={tabs}
        underline
      />
    </ThemeProvider>
  );
};
