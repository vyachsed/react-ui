import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Menu, MenuItem, mediumGroupBorderRadius } from '@admiral-ds/react-ui';
import type { Theme, MenuProps, RenderOptionProps, BorderRadiusType } from '@admiral-ds/react-ui';

type StoryItem = {
  id: string;
  label: string;
  value: number;
  disabled?: boolean;
  readOnly?: boolean;
};

const STORY_ITEMS: Array<StoryItem> = [
  {
    id: '1',
    label: 'Option one',
    value: 1,
  },
  {
    id: '2',
    label: 'Option two',
    value: 2,
  },
  {
    id: '3',
    label: 'Привет, пупсик! Хотел тебе сказать, что ты андроид.',
    value: 3,
  },
  {
    id: '4',
    label: 'Option four',
    value: 4,
  },
  {
    id: '5',
    label: 'Option five',
    value: 5,
  },
  {
    id: '6',
    label: 'Option six',
    value: 7,
  },
  {
    id: '7',
    label: 'Option seven',
    value: 6,
  },
];

const Wrapper = styled.div`
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  overflow: hidden;
  border-color: transparent;
  ${(p) => p.theme.shadow['Shadow 08']}
`;

const MultiLineMenuItem = styled(MenuItem)`
  white-space: pre-wrap;
`;

export const MenuMultiLineTemplate = (props: MenuProps & { themeBorderKind?: BorderRadiusType }) => {
  const model = React.useMemo(() => {
    return STORY_ITEMS.map((item) => {
      return {
        id: item.id,
        render: (options: RenderOptionProps) => (
          <MultiLineMenuItem dimension={props.dimension} {...options} key={item.id}>
            {item.label}
          </MultiLineMenuItem>
        ),
      };
    });
  }, [props.dimension]);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Wrapper style={{ maxWidth: '200px' }}>
        <Menu {...props} defaultIsActive={false} model={model} />
      </Wrapper>
    </ThemeProvider>
  );
};
