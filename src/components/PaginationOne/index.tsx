import * as React from 'react';
import type { ChangeEvent } from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled, { css, useTheme } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { typography } from '#src/components/Typography';
import { ReactComponent as ChevronLeft } from '@admiral-ds/icons/build/system/ChevronLeftOutline.svg';
import { ReactComponent as ChevronRight } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';

import { PaginationButton } from '#src/components/PaginationOne/PaginationButton';
import { MenuButton } from '#src/components/PaginationOne/Menu';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';
import { MenuActionsPanel } from '#src/components/Menu/MenuActionsPanel';
import { TextInput } from '#src/components/input';
import { keyboardKey } from '../common/keyboardKey';
import type { DropContainerStyles } from '#src/components/DropdownContainer';

const ComplexWrapper = styled.div`
  display: flex;
  align-items: center;
  ${typography['Body/Body 2 Long']}
  white-space: nowrap;
  user-select: none;
  min-width: 696px;
  justify-content: space-between;
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
`;

const SimpleWrapper = styled(ComplexWrapper)`
  min-width: auto;
`;

const Part = styled.div`
  display: flex;
  align-items: center;
`;

const Divider = styled.div`
  width: 1px;
  height: 24px;
  background-color: ${({ theme }) => theme.color['Neutral/Neutral 20']};
`;

const PageAdditional = styled.span`
  margin: 0 4px;
  min-width: 112px;
`;
const PageSizeAdditional = styled.div`
  min-width: 172px;
  margin: 0 12px;
  [data-simple='true'] & {
    margin: 0;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  & > button {
    margin-left: 8px;
  }
  [data-simple='true'] & {
    margin-left: 20px;
  }
`;

const extendMixin = (mixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>, showPageNumberInput?: boolean) => css`
  width: auto;
  min-width: ${showPageNumberInput ? 80 : 68}px;

  ${mixin};
`;

export interface PaginationOneProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Колбек, который срабатывает при изменении номера  страницы или размера страницы */
  onChange: (result: { page: number; pageSize: number }) => void;
  /** Номер текущей страницы */
  page: number;
  /** Размер текущей страницы (сколько записей умещается в одной странице) */
  pageSize: number;
  /** Общее количество записей */
  totalItems: number;
  /** Массив с вариантами размеров страницы */
  pageSizes: Array<number>;
  /** Блокировка выбора страницы */
  pageSelectDisabled?: boolean;
  /** Блокировка выбора количества записей на странице */
  pageSizeSelectDisabled?: boolean;
  /** Отображение компонента в упрощенном варианте, применяется в мобильных версиях */
  simple?: boolean;

  /** Задает максимальную высоту выпадающих меню */
  dropMaxHeight?: string | number;
  /** @deprecated use pageSizeDropContainerStyle.dropContainerCssMixin and
   * pageNumberDropContainerStyle.dropContainerCssMixin instead.
   * Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  /** Позволяет добавлять стили и className для выпадающего меню кнопки настройки видимости колонок  */
  pageSizeDropContainerStyle?: DropContainerStyles;
  /** Позволяет добавлять стили и className для выпадающего меню кнопки настроек  */
  pageNumberDropContainerStyle?: DropContainerStyles;
  /** Позволяет задать ширину выпадающего списка */
  menuWidth?: string;

  /** Включает окно ввода номера страницы в выпадающем списке */
  showPageNumberInput?: boolean;
  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Текст, описывающий сколько записей размещено на одной странице */
    itemsPerPageText?: string;
    /** Функция, возвращающая текст, описывающий селект с выбором номера страницы */
    pageSelectLabel?: (...props: any) => string;
    /** Функция, возвращающая текст, описывающий селект с выбором размера страницы */
    pageSizeSelectLabel?: (...props: any) => string;
    /** Функция, возвращающая текст, поясняющий, какой диапазон записей сейчас отображается */
    itemRangeText?: (...props: any) => string;
    /** Функция, возвращающая текст, поясняющий, из какого количества страниц выбрана текущая */
    pageRangeText?: (...props: any) => string;
    /** Текст, описывающий кнопку переключения назад (атрибут aria-label) */
    backwardText?: string;
    /** Текст, описывающий кнопку переключения вперед (атрибут aria-label) */
    forwardText?: string;
  };
}

export const PaginationOne: React.FC<PaginationOneProps> = ({
  page,
  pageSize,
  pageSizes,
  totalItems,
  pageSelectDisabled = false,
  pageSizeSelectDisabled = false,
  onChange,
  simple = false,
  menuWidth,
  dropMaxHeight = '',
  dropContainerCssMixin,
  pageSizeDropContainerStyle,
  pageNumberDropContainerStyle,
  locale,
  showPageNumberInput = false,
  ...props
}) => {
  const theme = useTheme() || LIGHT_THEME;
  const {
    itemsPerPageText: theme_itemsPerPageText,
    itemRangeText: theme_itemRangeText,
    pageRangeText: theme_pageRangeText,
    pageSelectLabel: theme_pageSelectLabel,
    pageSizeSelectLabel: theme_pageSizeSelectLabel,
    backwardText: theme_backwardText,
    forwardText: theme_forwardText,
  } = theme.locales[theme.currentLocale].paginationOne;

  const itemsPerPageText = locale?.itemsPerPageText || theme_itemsPerPageText;
  const itemRangeText = locale?.itemRangeText || theme_itemRangeText;
  const pageRangeText = locale?.pageRangeText || theme_pageRangeText;
  const pageSelectLabel = locale?.pageSelectLabel || theme_pageSelectLabel;
  const pageSizeSelectLabel = locale?.pageSizeSelectLabel || theme_pageSizeSelectLabel;
  const backwardText = locale?.backwardText || theme_backwardText;
  const forwardText = locale?.forwardText || theme_forwardText;

  const totalPages = Math.max(Math.ceil(totalItems / pageSize), 1);
  const pages = Array.from({ length: totalPages }, (v, k) => k + 1);
  const backButtonDisabled = page === 1;
  const forwardButtonDisabled = page === totalPages;

  const [isVisible, setIsVisible] = React.useState(false);
  const [selectedPageNumber, setSelectedPageNumber] = React.useState(page.toString());
  const [activePageNumber, setActivePageNumber] = React.useState<string | undefined>(page.toString());
  const [inputPageNumber, setInputPageNumber] = React.useState(page.toString());

  const pageNumberInputRef = React.useRef<HTMLInputElement>(null);

  const parsePageNumber = (pageSelected: string) => {
    if (pageSelected === '') {
      return parseInt(selectedPageNumber);
    }
    const page = parseInt(pageSelected);
    if (isNaN(page) || page < 1) {
      return 1;
    } else if (page > totalPages) {
      return totalPages;
    }
    return page;
  };

  const handlePageInputHover = (activePage?: string) => {
    if (activePage) {
      setActivePageNumber(activePage);
      setInputPageNumber(activePage);
    }
  };

  const handleClosePageNumberDropMenu = (pageNumber: string) => {
    handlePageInputHover(pageNumber);
    setIsVisible(false);
  };

  const handleSizeChange = (pageSizeSelected: string) => {
    const pageSize = parseInt(pageSizeSelected);
    onChange({ page: 1, pageSize: pageSize });
  };

  const handlePageInputChange = (pageSelected: string) => {
    const page = parsePageNumber(pageSelected);
    setSelectedPageNumber(page.toString());
    onChange({
      page,
      pageSize,
    });
    handleClosePageNumberDropMenu(page.toString());
  };

  const pageIncrement = () => onChange({ page: page + 1, pageSize });
  const pageDecrement = () => onChange({ page: page - 1, pageSize });

  const dropMenuProps = passDropdownDataAttributes(props);

  const handleClickOutside = () => {
    handleClosePageNumberDropMenu(selectedPageNumber);
  };

  const handleMenuButtonClick = () => {
    if (isVisible) {
      handleClosePageNumberDropMenu(selectedPageNumber);
    } else {
      setIsVisible(true);
    }
  };

  React.useEffect(() => {
    if (isVisible && pageNumberInputRef) {
      pageNumberInputRef.current?.select();
      pageNumberInputRef.current?.focus();
    }
  }, [isVisible]);

  const handleInputPageNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/\D/g, '');
    setInputPageNumber(inputValue);
    setActivePageNumber(parsePageNumber(inputValue).toString());
  };

  const handleInputPageNumberKeyDown = (e: React.KeyboardEvent) => {
    const code = keyboardKey.getCode(e);

    if (code === keyboardKey.Enter) {
      handlePageInputChange(inputPageNumber);
      setIsVisible(false);
    } else if (code === keyboardKey.ArrowDown || code === keyboardKey.ArrowUp) {
      pageNumberInputRef.current?.blur();
    } else if (code === keyboardKey.Escape) {
      handleClosePageNumberDropMenu(selectedPageNumber);
    }
  };

  const handleMenuCycle = () => {
    pageNumberInputRef.current?.focus();
    return false;
  };

  const renderComplex = () => {
    return (
      <ComplexWrapper data-simple={simple} {...props}>
        <Part>
          {itemsPerPageText}
          <MenuButton
            options={pageSizes}
            selected={pageSize.toString()}
            onSelectItem={handleSizeChange}
            disabled={pageSizeSelectDisabled}
            aria-label={pageSizeSelectLabel(pageSize, totalItems)}
            dropMaxHeight={dropMaxHeight}
            dropContainerCssMixin={
              pageSizeDropContainerStyle?.dropContainerCssMixin || extendMixin(dropContainerCssMixin)
            }
            dropContainerClassName={pageSizeDropContainerStyle?.dropContainerClassName}
            dropContainerStyle={pageSizeDropContainerStyle?.dropContainerStyle}
            menuWidth={menuWidth}
            dropMenuDataAttributes={dropMenuProps}
            className="records-per-page-with-dropdown"
          >
            {pageSize}
          </MenuButton>
          <Divider />
          <PageSizeAdditional>
            {itemRangeText(
              Math.min(pageSize * (page - 1) + 1, totalItems),
              Math.min(page * pageSize, totalItems),
              totalItems,
            )}
          </PageSizeAdditional>
        </Part>
        <Part>
          <Divider />
          <MenuButton
            options={pages}
            selected={selectedPageNumber}
            onSelectItem={handlePageInputChange}
            active={activePageNumber}
            onActivateItem={handlePageInputHover}
            disabled={pageSelectDisabled}
            aria-label={pageSelectLabel(page, totalPages)}
            dropMaxHeight={dropMaxHeight}
            dropContainerCssMixin={
              pageNumberDropContainerStyle?.dropContainerCssMixin ||
              extendMixin(dropContainerCssMixin, showPageNumberInput)
            }
            dropContainerClassName={pageNumberDropContainerStyle?.dropContainerClassName}
            dropContainerStyle={pageNumberDropContainerStyle?.dropContainerStyle}
            menuWidth={menuWidth}
            dropMenuDataAttributes={dropMenuProps}
            className="current-page-number-with-dropdown"
            isVisible={isVisible}
            onVisibilityChange={setIsVisible}
            onClickOutside={handleClickOutside}
            onClick={handleMenuButtonClick}
            onForwardCycleApprove={handleMenuCycle}
            onBackwardCycleApprove={handleMenuCycle}
            renderTopPanel={
              showPageNumberInput
                ? ({ dimension = 's' }) => {
                    return (
                      <MenuActionsPanel dimension={dimension}>
                        <TextInput
                          dimension="s"
                          value={inputPageNumber}
                          onChange={handleInputPageNumberChange}
                          onKeyDown={handleInputPageNumberKeyDown}
                          ref={pageNumberInputRef}
                        />
                      </MenuActionsPanel>
                    );
                  }
                : undefined
            }
          >
            {page}
          </MenuButton>
          <PageAdditional>{pageRangeText(totalPages)}</PageAdditional>
          <ButtonsWrapper>
            <PaginationButton aria-label={backwardText} disabled={backButtonDisabled} onClick={pageDecrement}>
              <ChevronLeft width={24} height={24} />
            </PaginationButton>
            <PaginationButton aria-label={forwardText} disabled={forwardButtonDisabled} onClick={pageIncrement}>
              <ChevronRight width={24} height={24} />
            </PaginationButton>
          </ButtonsWrapper>
        </Part>
      </ComplexWrapper>
    );
  };

  const renderSimple = () => {
    return (
      <SimpleWrapper data-simple={simple} {...props}>
        <PageSizeAdditional>
          {itemRangeText(
            Math.min(pageSize * (page - 1) + 1, totalItems),
            Math.min(page * pageSize, totalItems),
            totalItems,
          )}
        </PageSizeAdditional>
        <ButtonsWrapper>
          <PaginationButton aria-label={backwardText} disabled={backButtonDisabled} onClick={pageDecrement}>
            <ChevronLeft width={24} height={24} />
          </PaginationButton>
          <PaginationButton aria-label={forwardText} disabled={forwardButtonDisabled} onClick={pageIncrement}>
            <ChevronRight width={24} height={24} />
          </PaginationButton>
        </ButtonsWrapper>
      </SimpleWrapper>
    );
  };

  return simple ? renderSimple() : renderComplex();
};

PaginationOne.displayName = 'PaginationOne';
