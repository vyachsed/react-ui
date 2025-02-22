import * as React from 'react';
import { TagMenu, MenuItem, TagCircle } from '@admiral-ds/react-ui';
import type { TagMenuProps, TagOptionProps, TagKind, RenderOptionProps, Theme } from '@admiral-ds/react-ui';
import { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';
import styled, { ThemeProvider } from 'styled-components';

const StyledMenuItem = styled(MenuItem)`
  flex-wrap: nowrap;
  justify-content: flex-start;
`;
const Separator = styled.div`
  width: 4px;
`;

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

const itemsDemoSizes: Array<TagOptionProps> = [
  {
    id: '1',
    tagText: 'Option one',
    icon: <CheckOutline />,
    kind: 'danger',
  },
  {
    id: '2',
    tagText: 'Option two',
    kind: 'primary',
  },
  {
    id: '3',
    tagText: 'Option three',
    kind: 'success',
  },
  {
    id: '4',
    tagText: 'Option four',
    icon: <CheckOutline />,
    kind: 'warning',
  },
  {
    id: '5',
    tagText: 'Option five',
    kind: 'neutral',
  },
  {
    id: '6',
    tagText: 'Option six',
  },
  {
    id: '7',
    tagText: 'Option seven',
  },
];

export const TagMenuSizesTemplate = (args: TagMenuProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [selectedM, setSelectedM] = React.useState<TagOptionProps | undefined>(itemsDemoSizes[0]);
  const [selectedS, setSelectedS] = React.useState<TagOptionProps | undefined>(itemsDemoSizes[0]);

  const modelM = React.useMemo(() => {
    return itemsDemoSizes.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <StyledMenuItem dimension="m" {...options} key={item.id}>
          {item.kind && item.kind !== 'neutral' && !item.statusViaBackground && (
            <TagCircle background={item.kind as TagKind} />
          )}
          {item.tagText}
        </StyledMenuItem>
      ),
    }));
  }, [itemsDemoSizes]);

  const modelS = React.useMemo(() => {
    return itemsDemoSizes.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <StyledMenuItem dimension="s" {...options} key={item.id}>
          {item.kind && item.kind !== 'neutral' && !item.statusViaBackground && (
            <TagCircle background={item.kind as TagKind} />
          )}
          {item.tagText}
        </StyledMenuItem>
      ),
    }));
  }, [itemsDemoSizes]);

  return (
    <ThemeProvider theme={swapBorder}>
      <TagMenu
        dimension="m"
        items={modelM}
        selected={selectedM}
        as="div"
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelectedM(itemsDemoSizes.find((item) => item.id === id));
        }}
        onVisibilityChange={handleVisibilityChange}
        {...args}
      />
      <Separator />
      <TagMenu
        style={{ marginTop: 24 }}
        dimension="s"
        items={modelS}
        selected={selectedS}
        as="span"
        onSelectItem={(id) => {
          logSelectedId(id);
          setSelectedS(itemsDemoSizes.find((item) => item.id === id));
        }}
        onVisibilityChange={handleVisibilityChange}
        {...args}
      />
    </ThemeProvider>
  );
};
