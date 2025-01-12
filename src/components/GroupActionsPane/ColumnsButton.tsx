import type { CSSProperties, HTMLAttributes } from 'react';
import * as React from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled from 'styled-components';
import { useMemo, useRef, useState, useLayoutEffect } from 'react';
import { Checkbox } from '#src/components/Checkbox';
import { IconButton } from '#src/components/IconButton';
import { StyledDropdownContainer } from '#src/components/DropdownContainer';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';
import { Menu } from '#src/components/Menu';
import { MenuItem } from '#src/components/Menu/MenuItem';
import { Tooltip } from '#src/components/Tooltip';
import { refSetter } from '#src/components/common/utils/refSetter';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';
import type { PaneColumn } from '#src/components/GroupActionsPane';

export type MenuDimension = 's' | 'm' | 'l';

export interface RenderOptionProps {
  /** Активная секция MenuItems */
  selected?: boolean;
  /** Акцентная секция MenuItems */
  hovered?: boolean;
  /** Отключение секции */
  disabled?: boolean;
  /** Обработчик клика по item */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  /** Обработчик наведения мыши на item */
  onHover?: () => void;
}

export interface ItemProps {
  id: string;
  render: (options: RenderOptionProps) => React.ReactNode;
  disabled?: boolean;
}

export interface ColumnsButtonProps extends HTMLAttributes<HTMLButtonElement>, RenderOptionProps {
  columns?: Array<PaneColumn>;
  onColumnsChange?: (columns: Array<PaneColumn>) => void;
  buttonDimension?: 's' | 'l';
  menuDimension?: MenuDimension;
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  /** Позволяет добавлять класс на контейнер выпадающего меню  */
  dropContainerClassName?: string;
  /** Позволяет добавлять стили на контейнер выпадающего меню  */
  dropContainerStyle?: CSSProperties;
}

const ColumnsMenu = styled(Menu)`
  width: 320px;
`;

const ColumnsMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: flex-start;
  flex-flow: nowrap;
`;

const StyledCheckbox = styled(Checkbox)`
  flex-shrink: 0;
  margin-right: 10px;
`;

const TextWrapper = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ColumnMenuItem = ({ visible, title, ...props }: any) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  const [overflow, setOverflow] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useLayoutEffect(() => {
    if (textRef.current && checkOverflow(textRef.current) !== overflow) {
      setOverflow(checkOverflow(textRef.current));
    }
  }, [tooltipVisible, overflow]);

  useLayoutEffect(() => {
    function show() {
      setTooltipVisible(true);
    }
    function hide() {
      setTooltipVisible(false);
    }
    const text = textRef.current;
    if (text) {
      text.addEventListener('mouseenter', show);
      text.addEventListener('mouseleave', hide);
      return () => {
        text.removeEventListener('mouseenter', show);
        text.removeEventListener('mouseleave', hide);
      };
    }
  }, []);

  return (
    <ColumnsMenuItem {...props} ref={itemRef}>
      <StyledCheckbox
        checked={visible}
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      />
      <TextWrapper ref={textRef}>{title}</TextWrapper>
      {tooltipVisible && overflow && <Tooltip targetElement={itemRef.current} renderContent={() => title} />}
    </ColumnsMenuItem>
  );
};

export const ColumnsButton = React.forwardRef<HTMLButtonElement, ColumnsButtonProps>(
  (
    {
      columns = [],
      menuDimension = 'l',
      buttonDimension = 'l',
      onColumnsChange,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      ...props
    },
    ref,
  ) => {
    const [opened, setOpened] = useState<boolean>(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

    const handleBtnClick = () => {
      setOpened((prevOpened) => !prevOpened);
    };

    const handleChangeColumn = ({ id, visible }: PaneColumn) => {
      if (onColumnsChange && columns.length > 0) {
        const newValue = [...columns];
        const item = newValue.find((column) => (column.name ? column.name === id : column.id === id));
        if (item) item.visible = visible;
        onColumnsChange(newValue);
      }
    };

    const renderColumns = useMemo<Array<ItemProps>>(() => {
      return columns.map(
        (column, index): ItemProps => ({
          id: index.toString(),
          render: (options: RenderOptionProps) => {
            const title = column.name ?? column.title;
            const id = column.name ?? column.id;
            return (
              <ColumnMenuItem
                {...options}
                title={title}
                visible={column.visible}
                dimension={menuDimension}
                onClick={() => {
                  handleChangeColumn({ id, visible: !column.visible });
                }}
                key={index}
              />
            );
          },
        }),
      );
    }, [columns, menuDimension]);

    const handleClickOutside = (e: Event) => {
      if (e.target && buttonRef.current?.contains(e.target as Node)) {
        return;
      }
      setOpened(false);
    };

    return (
      <>
        <IconButton
          ref={refSetter(ref, buttonRef)}
          dimension={buttonDimension}
          onClick={handleBtnClick}
          {...props}
          disabled={columns.length === 0}
        >
          <PlusOutline />
        </IconButton>
        {opened && (
          <StyledDropdownContainer
            targetElement={buttonRef.current}
            alignSelf={'flex-end'}
            onClickOutside={handleClickOutside}
            dropContainerCssMixin={dropContainerCssMixin}
            className={dropContainerClassName}
            style={dropContainerStyle}
          >
            <ColumnsMenu model={renderColumns} selected={''} />
          </StyledDropdownContainer>
        )}
      </>
    );
  },
);
