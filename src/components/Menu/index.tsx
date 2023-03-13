import type { HTMLAttributes } from 'react';
import * as React from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled, { css } from 'styled-components';
import type { ItemProps } from '#src/components/Menu/MenuItem';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { VirtualBody } from '#src/components/Menu/VirtualBody';

export type MenuDimensions = 'l' | 'm' | 's';

const ITEMS_COUNT = 6;

const getItemHeight = (dimension?: MenuDimensions) => {
  switch (dimension) {
    case 'l':
      return 48;
    case 'm':
      return 40;
    case 's':
      return 32;
    default:
      return 48;
  }
};

const getHeight = (dimension?: MenuDimensions) => {
  return getItemHeight(dimension) * ITEMS_COUNT + 16;
};

const menuListHeights = css<{ dimension?: MenuDimensions; maxHeight?: string | number }>`
  max-height: ${({ dimension, maxHeight }) => {
    if (maxHeight) return maxHeight;
    return `${getHeight(dimension)}px`;
  }};
`;

const Wrapper = styled.div<{ dimension?: MenuDimensions; hasTopPanel: boolean; hasBottomPanel: boolean }>`
  padding: 0;
  ${(p) => (p.hasTopPanel ? 'padding-top: 8px' : '')};
  ${(p) => (p.hasBottomPanel ? 'padding-bottom: 8px' : '')};
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: stretch;
  pointer-events: initial;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  max-width: calc(100vw - 32px);
  border-color: transparent;
  ${menuListHeights};
`;

const StyledDiv = styled.div<{ hasTopPanel: boolean; hasBottomPanel: boolean }>`
  ${(p) => (!p.hasTopPanel ? 'padding-top: 8px' : '')};
  ${(p) => (!p.hasBottomPanel ? 'padding-bottom: 8px' : '')};
  margin: 0;
  appearance: none;
  flex: 1 1 auto;
  border: none;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

export interface RenderPanelProps {
  /** Размер компонента */
  dimension: MenuDimensions;
  /** Позволяет добавлять миксин для панели, созданный с помощью styled css  */
  menuActionsPanelCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер Меню */
  dimension?: MenuDimensions;
  /** Активная секция Menu */
  active?: string;
  /** выбранная секция Menu */
  selected?: string;
  /** выбранная по умолчаниию секция Menu */
  defaultSelected?: string;
  /** Обработчик активации (hover) item в меню */
  onActivateItem?: (id?: string) => void;
  /** Обработчик выбора item в меню */
  onSelectItem?: (id: string) => void;
  /** Модель данных, с рендер-пропсами*/
  model: Array<ItemProps>;
  /** Задает максимальную высоту меню */
  maxHeight?: string | number;
  /** Позволяет добавить панель сверху над выпадающим списком */
  renderTopPanel?: (props: RenderPanelProps) => React.ReactNode;
  /** Позволяет добавить панель внизу под выпадающим списком */
  renderBottomPanel?: (props: RenderPanelProps) => React.ReactNode;
  /** @deprecated use disableSelectedOptionHighlight instead
   * Возможность множественного выбора (опции с Checkbox) */
  multiSelection?: boolean;
  /** Возможность отключить подсветку выбранной опции
   * (например, при множественном выборе, когда у каждой опции есть Checkbox */
  disableSelectedOptionHighlight?: boolean;
  onForwardCycleApprove?: () => boolean;
  onBackwardCycleApprove?: () => boolean;
  /** ссылка на контейнер, в котором находится Menu*/
  containerRef?: React.RefObject<HTMLElement>;
  /** Включение виртуального скролла для меню.
   * У таблицы обязательно должна быть задана высота, тогда тело таблицы растянется по высоте и подстроится под высоту таблицы.
   */
  virtualScroll?: {
    /** Фиксированная высота строки, для правильного функционирования виртуального скролла
     * все строки должны быть одной фиксированной высоты
     */
    itemHeight: 'auto' | number;
  };
}

export const Menu = React.forwardRef<HTMLDivElement | null, MenuProps>(
  (
    {
      model,
      defaultSelected,
      selected,
      active,
      onSelectItem,
      onActivateItem,
      renderTopPanel,
      renderBottomPanel,
      dimension = 'l',
      multiSelection = false,
      disableSelectedOptionHighlight = false,
      onForwardCycleApprove,
      onBackwardCycleApprove,
      containerRef,
      virtualScroll,
      ...props
    },
    ref,
  ) => {
    const findNextId = (currentId?: string) => {
      const currentIndex = currentId ? model.findIndex((item) => item.id === currentId) : -1;
      let nextIndex = currentIndex < model.length - 1 ? currentIndex + 1 : 0;
      let finishCycle = false;

      while ((model[nextIndex].disabled || model[nextIndex].readOnly) && !finishCycle) {
        nextIndex = nextIndex < model.length - 1 ? nextIndex + 1 : 0;
        finishCycle = currentIndex === -1 ? nextIndex === 0 : nextIndex === currentIndex;
      }

      const isCycle = currentIndex > -1 && nextIndex < currentIndex;
      const approve = isCycle && onForwardCycleApprove ? onForwardCycleApprove() : true;

      nextIndex = approve ? nextIndex : currentIndex;

      const disabled = model[nextIndex].disabled || model[nextIndex].readOnly;
      return disabled ? undefined : model[nextIndex].id;
    };

    const findPreviousId = (currentId?: string) => {
      const currentIndex = currentId ? model.findIndex((item) => item.id === currentId) : -1;
      let prevIndex = currentIndex > 0 ? currentIndex - 1 : model.length - 1;
      let finishCycle = false;

      while ((model[prevIndex].disabled || model[prevIndex].readOnly) && !finishCycle) {
        prevIndex = prevIndex > 0 ? prevIndex - 1 : model.length - 1;
        finishCycle = currentIndex === -1 ? prevIndex === 0 : prevIndex === currentIndex;
      }

      const isCycle = currentIndex > -1 && prevIndex > currentIndex;
      const approve = isCycle && onBackwardCycleApprove ? onBackwardCycleApprove() : true;

      prevIndex = approve ? prevIndex : currentIndex;

      const disabled = model[prevIndex].disabled || model[prevIndex].readOnly;
      return disabled ? undefined : model[prevIndex].id;
    };

    const uncontrolledActiveValue = model.length > 0 ? findNextId() : undefined;
    const [selectedState, setSelectedState] = React.useState<string | undefined>(defaultSelected);
    const [activeState, setActiveState] = React.useState<string | undefined>(uncontrolledActiveValue);

    const selectedId =
      multiSelection || disableSelectedOptionHighlight ? undefined : selected === undefined ? selectedState : selected;
    const activeId = active === undefined ? activeState : active;

    const menuRef = React.useRef<HTMLDivElement | null>(null);

    const hasTopPanel = !!renderTopPanel;
    const hasBottomPanel = !!renderBottomPanel;

    const activateItem = (id?: string) => {
      if (activeId !== id) setActiveState(id);
      onActivateItem?.(id);
    };

    const selectItem = (id: string) => {
      if (selectedId !== id && !multiSelection && !disableSelectedOptionHighlight) setSelectedState(id);

      const item = model.find((item) => item.id === id);
      if (item && !item.disabled) onSelectItem?.(id);
    };

    React.useEffect(() => {
      function handleKeyDown(e: KeyboardEvent) {
        const code = keyboardKey.getCode(e);
        switch (code) {
          case keyboardKey[' ']:
          case keyboardKey.Enter: {
            if (activeId) selectItem(activeId);
            e.preventDefault();
            break;
          }
          case keyboardKey.ArrowDown: {
            const nextId = findNextId(activeId);
            activateItem(nextId);
            e.preventDefault();
            break;
          }
          case keyboardKey.ArrowUp: {
            const previousId = findPreviousId(activeId);
            activateItem(previousId);
            e.preventDefault();
            break;
          }
        }
      }

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [active, activeState]);

    const renderChildren = () => {
      return model.map((item) =>
        item.render({
          hovered: activeId === item.id,
          selected: selectedId === item.id,
          onHover: () => {
            activateItem(item.disabled ? undefined : item.id);
          },
          onClickItem: () => selectItem(item.id),
          disabled: item.disabled,
          containerRef,
        }),
      );
    };

    const renderVirtualChildren = () => {
      if (!virtualScroll) return null;

      const itemHeight = virtualScroll.itemHeight === 'auto' ? getItemHeight(dimension) : virtualScroll.itemHeight;

      return (
        <VirtualBody
          scrollContainerRef={menuRef}
          itemHeight={itemHeight}
          model={model}
          activeId={activeId}
          selectedId={selectedId}
          activateItem={activateItem}
          selectItem={selectItem}
        />
      );
    };

    React.useLayoutEffect(() => {
      setTimeout(() => {
        const hoveredItem = menuRef.current?.querySelector('[data-hovered="true"]');

        hoveredItem?.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest',
        });
      }, 0);
    }, [active, activeState, model]);

    return (
      <Wrapper ref={ref} dimension={dimension} hasTopPanel={hasTopPanel} hasBottomPanel={hasBottomPanel} {...props}>
        {hasTopPanel && renderTopPanel({ dimension })}
        <StyledDiv ref={menuRef} hasTopPanel={hasTopPanel} hasBottomPanel={hasBottomPanel}>
          {virtualScroll ? renderVirtualChildren() : renderChildren()}
        </StyledDiv>
        {hasBottomPanel && renderBottomPanel({ dimension })}
      </Wrapper>
    );
  },
);

Menu.displayName = 'Menu';
