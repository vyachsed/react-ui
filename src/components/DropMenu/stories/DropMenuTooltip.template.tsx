import * as React from 'react';
import styled from 'styled-components';
import type { DropMenuProps, RenderOptionProps } from '@admiral-ds/react-ui';
import { Button, DropMenu, MenuItem, TooltipHoc } from '@admiral-ds/react-ui';

const STORY_ITEMS = [
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

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const Desc = styled.div`
  font-family: 'VTB Group UI';
  color: ${(p) => p.theme.color['Neutral/Neutral 90']};
  font-size: 16px;
  line-height: 24px;
`;

const handleVisibilityChangeControlledState = (isVisible: boolean) => {
  console.log('onVisibilityChange with controlled state');
  if (isVisible) {
    console.log('Menu opened');
  } else {
    console.log('Menu closed');
  }
};

const MenuItemWithTooltip = TooltipHoc(MenuItem);

export const DropMenuTooltipTemplate = (props: DropMenuProps) => {
  const [selected, setSelected] = React.useState<string | undefined>(undefined);
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  const model = React.useMemo(() => {
    return STORY_ITEMS.map((item) => {
      const tooltip = item.label.length > 20;

      return {
        id: item.id,
        render: (options: RenderOptionProps) =>
          tooltip ? (
            <MenuItemWithTooltip
              renderContent={() => item.label}
              dimension={props.dimension}
              {...options}
              key={item.id}
            >
              {item.label.slice(0, 17) + '...'}
            </MenuItemWithTooltip>
          ) : (
            <MenuItem dimension={props.dimension} {...options} key={item.id}>
              {item.label}
            </MenuItem>
          ),
      };
    });
  }, [props.dimension]);

  const handleVisibilityChange = (isVisible: boolean) => {
    handleVisibilityChangeControlledState(isVisible);
    setIsVisible(isVisible);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    handleVisibilityChange(!isVisible);
    props.onClick?.(e);
  };

  const handleSelectItem = (id: string) => {
    console.log(`Option ${id} clicked`);
    setSelected(id);
    handleVisibilityChange(false);
  };

  const handleClickOutside = () => {
    console.log('handleClickOutside from stories');
    handleVisibilityChange(false);
  };

  return (
    <WrapperVertical>
      <Desc>
        Состояние видимости меню полностью контроллируется вне DropMenu:
        <br />
        - используется кастомный обработчик клика по кнопке (handleButtonClick) для открытия/закрытия выпадающего
        списка;
        <br />- после выбора опции из выпадающего списка (handleSelectItem) происходит закрытие меню;
        <br />- используется кастомный обработчик при клике вне области выпадающего списка (handleClickOutside).
      </Desc>
      <DropMenu
        {...props}
        items={model}
        isVisible={isVisible}
        onVisibilityChange={handleVisibilityChange}
        onSelectItem={handleSelectItem}
        onClickOutside={handleClickOutside}
        selected={selected}
        renderContentProp={({ buttonRef, handleKeyDown, statusIcon, disabled }) => {
          return (
            <Button
              ref={buttonRef as React.Ref<HTMLButtonElement>}
              loading={props.loading}
              disabled={disabled}
              onKeyDown={handleKeyDown}
              onClick={handleButtonClick}
              dimension={props.dimension}
            >
              Нажми
              {statusIcon}
            </Button>
          );
        }}
      />
    </WrapperVertical>
  );
};
