import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { MultiButton } from '@admiral-ds/react-ui';
import type { MultiButtonProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';

const Separator = styled.div`
  width: 20px;
  height: 20px;
`;

const handleMainButtonClick = () => {
  console.log('Main button clicked');
};

const handleVisibilityChange = (isVisible: boolean) => {
  if (isVisible) {
    console.log('Menu opened');
  } else {
    console.log('Menu closed');
  }
};

const logSelectedId = (id: string) => {
  console.log(`selected: ${id}`);
};

const itemsDemo = [
  {
    id: '1',
    render: 'Option one',
  },
  {
    id: '2',
    render: 'Option two',
  },
  {
    id: '3',
    render: 'Option three',
  },
  {
    id: '4',
    render: 'Option four',
  },
  {
    id: '5',
    render: 'Option five',
  },
  {
    id: '6',
    render: 'Option six',
  },
  {
    id: '7',
    render: 'Option seven',
  },
];

export const MultiButtonAppearanceTemplate = (props: MultiButtonProps & { themeBorderKind?: BorderRadiusType }) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const [selected2, setSelected2] = React.useState<string | undefined>(undefined);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const model = React.useMemo(() => {
    return itemsDemo.slice(1, itemsDemo.length);
  }, [props.dimension, itemsDemo]);

  return (
    <ThemeProvider theme={swapBorder}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <MultiButton
          {...props}
          appearance="primary"
          selected={selected}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected(id);
          }}
          items={itemsDemo.slice(1, itemsDemo.length)}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="first-multi-button-with-dropdown"
          className="multi-button-class"
          onMainButtonClick={handleMainButtonClick}
          dropContainerClassName="dropContainerClass"
          dropContainerStyle={{ width: '250px' }}
        >
          {itemsDemo[0].render}
        </MultiButton>
        <Separator />
        <MultiButton
          {...props}
          appearance="secondary"
          selected={selected2}
          onSelectItem={(id) => {
            logSelectedId(id);
            setSelected2(id);
          }}
          items={model}
          onVisibilityChange={handleVisibilityChange}
          data-dropdown-container-id="second-multi-button-with-dropdown"
          onMainButtonClick={handleMainButtonClick}
          dropContainerClassName="dropContainerClass"
          dropContainerStyle={{ width: '250px' }}
        >
          {itemsDemo[0].render}
        </MultiButton>
      </div>
    </ThemeProvider>
  );
};
