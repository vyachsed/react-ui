import * as React from 'react';
import type { CSSProperties } from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled, { useTheme } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { OpenStatusButton } from '#src/components/OpenStatusButton';
import { keyboardKey } from '../../common/keyboardKey';
import { refSetter } from '#src/components/common/utils/refSetter';
import { InputIconButton } from '#src/components/InputIconButton';
import { ReactComponent as CloseOutlineSvg } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import type { ComponentDimension, InputStatus } from '#src/components/input/types';
import { ConstantSelectProvider } from './useSelectContext';
import { MultipleSelectChips } from './MultipleSelectChips';
import {
  BorderedDiv,
  IconPanel,
  Input,
  OptionWrapper,
  SelectWrapper,
  ValueWrapper,
  StyledMenu,
  EmptyMessageWrapper,
} from './styled';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { useClickOutside } from '#src/components/common/hooks/useClickOutside';
import { Spinner } from '#src/components/Spinner';
import { DisplayValue } from './DisplayValue';
import { DropdownContainer } from '#src/components/DropdownContainer';
import type { RenderPanelProps } from '#src/components/Menu';
import { NativeControl } from '#src/components/input/Select/NativeControl';
import { DropDownProvider } from '#src/components/input/Select/DropDownContext';
import type { MenuModelItemProps } from '#src/components/Menu/MenuItem';
import type { SearchFormat, SelectItemProps, IConstantOption } from '#src/components/input/Select/types';
import { defaultFilterItem } from '#src/components/input/Select/utils';

export type { SearchFormat } from './types';

/**
 * Осталось сделать:
 * Активное состояние у крестика на чипсах по стрелкам
 * Проверить Перфоманс
 * Тултип и длинного текста в selectValue
 * Возможность, если используется renderValue, задать значение, которое будет появляться при вводе поиска и для опций
 * Разбить компонент на хуки для большей читаемости и императивности (useHeight, useInput, ...)
 * Разбить тесты по пропсам и функционалу. Например, тесты проверящие placeholder И т.д.
 */

export const DropDownText = styled(OptionWrapper)`
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
`;

type PartialOption = { value: string; disabled: boolean } & IConstantOption;
const findAbledOptionValue = (options: PartialOption[]) => options.find(({ disabled }) => !disabled)?.value;

const stopPropagation = (evt: React.BaseSyntheticEvent) => evt.stopPropagation();

export interface SelectProps extends Omit<React.InputHTMLAttributes<HTMLSelectElement>, 'onFocus' | 'onBlur'> {
  value?: string | string[];

  /** Позволяет использовать Select как select */
  mode?: 'select' | 'searchSelect';

  /** Отображать статус загрузки данных */
  isLoading?: boolean;

  /** Добавить селекту возможность множественного выбора */
  multiple?: boolean;

  /** По умолчанию, если multiple = true, в опции присутствует checkbox. Данный флаг позволяет убрать его */
  showCheckbox?: boolean;

  /** Значение по умолчанию для некотролируемого селекта */
  defaultValue?: string | string[];

  displayClearIcon?: boolean;

  /** Позволяет определить действия при нажатии на иконку очистки. По умолчанию произойдет очистка выбранных значений */
  onClearIconClick?: () => void;

  /** @deprecated используйте maxRowCount **/
  idleHeight?: 'full' | 'fixed';

  /** Минимальное количество строк поля в режиме multiple */
  minRowCount?: number | 'none';

  /** Максимальное количество строк поля в режиме multiple */
  maxRowCount?: number | 'none';

  // TODO: провести рефактор параметра в рамках задачи https://github.com/AdmiralDS/react-ui/issues/1083
  /** Референс на контейнер для правильного позиционирования выпадающего списка */
  portalTargetRef?: React.RefObject<HTMLElement>;

  /** Ref внутреннего input компонента */
  inputTargetRef?: React.RefObject<HTMLInputElement>;

  /** Делает высоту компонента больше или меньше обычной */
  dimension?: ComponentDimension;

  /** Иконки для отображения в правом углу поля */
  icons?: React.ReactNode;

  /** Статус поля */
  status?: InputStatus;

  renderSelectValue?: (value: string | string[] | undefined, searchText: string) => React.ReactNode;

  /**  Значение введенное пользователем для поиска */
  inputValue?: string;

  /** первоначальное значение в строке поиска без переведения строки в контролируемый компонент */
  defaultInputValue?: string;

  onInputChange?: React.ChangeEventHandler<HTMLInputElement>;

  onFocus?: (evt: React.FocusEvent<HTMLDivElement>) => void;

  onBlur?: (evt: React.FocusEvent<HTMLDivElement>) => void;

  /** Принудительно выравнивает контейнер с опциями относительно компонента, значение по умолчанию 'stretch' */
  alignDropdown?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  /** Позволяет добавлять класс на контейнер выпадающего меню  */
  dropContainerClassName?: string;
  /** Позволяет добавлять стили на контейнер выпадающего меню  */
  dropContainerStyle?: CSSProperties;

  /** Состояние skeleton */
  skeleton?: boolean;

  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Сообщение, отображаемое при пустом наборе опций */
    emptyMessage?: React.ReactNode;
  };

  /** Позволяет добавить панель внизу под выпадающим списком */
  renderDropDownBottomPanel?: (props: RenderPanelProps) => React.ReactNode;

  /** Позволяет добавить панель сверху над выпадающим списком */
  renderDropDownTopPanel?: (props: RenderPanelProps) => React.ReactNode;

  /** Состояние принудительного открытия выпадающего списка опций */
  forcedOpen?: boolean;

  /** Событие закрытия выпадающего списка опций */
  onChangeDropDownState?: (opened: boolean) => void;

  /** Inner input keyboard event handler */
  onInputKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;

  /** Inner input keyboard event handler */
  onInputKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;

  /** Inner input keyboard event handler */
  onInputKeyUpCapture?: React.KeyboardEventHandler<HTMLInputElement>;

  /** Inner input keyboard event handler */
  onInputKeyDownCapture?: React.KeyboardEventHandler<HTMLInputElement>;

  /** Данная опция позволяет при фильтрации искать по строке целиком или по отдельным словам */
  searchFormat?: SearchFormat;

  /** Позволяет фильтровать отображаемые опции */
  onFilterItem?: (value: string, searchValue: string, searchFormat: SearchFormat) => boolean;

  /** Включение виртуального скролла для меню.
   * Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
   * высота согласно dimension
   */
  virtualScroll?: {
    /** Фиксированная высота 1 пункта меню, для правильного функционирования виртуального скролла
     * все строки должны быть одной фиксированной высоты
     */
    itemHeight: 'auto' | number;
  };
  /** Признак принудительного скрытия тултипа, показываемого при переполнении */
  forceHideOverflowTooltip?: boolean;
  /** Событие, которое вызывается при изменении выбранных опций/опции */
  onSelectedChange?: (value: string | Array<string>) => void;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      value,
      isLoading,
      className,
      style,
      status,
      icons,
      portalTargetRef,
      inputTargetRef,
      disabled,
      readOnly,
      placeholder,
      defaultValue,
      dimension = 'm',
      idleHeight = 'fixed',
      minRowCount = 'none',
      maxRowCount = 'none',
      mode = 'select',
      multiple = false,
      showCheckbox = true,
      displayClearIcon = false,
      onClearIconClick,
      onInputChange,
      inputValue,
      defaultInputValue,
      renderSelectValue,
      onFocus: onFocusFromProps,
      onBlur: onBlurFromProps,
      children,
      alignDropdown = 'stretch',
      skeleton = false,
      locale,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      renderDropDownTopPanel,
      renderDropDownBottomPanel,
      forcedOpen = false,
      onChangeDropDownState,
      onInputKeyDown,
      onInputKeyUp,
      onInputKeyUpCapture,
      onInputKeyDownCapture,
      searchFormat = 'wholly',
      onFilterItem = defaultFilterItem,
      virtualScroll,
      title,
      forceHideOverflowTooltip = false,
      onSelectedChange,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme() || LIGHT_THEME;
    const emptyMessage = locale?.emptyMessage || (
      <DropDownText>{theme.locales[theme.currentLocale].select.emptyMessage}</DropDownText>
    );
    const [selectedValue, setSelectedValue] = React.useState(value ?? defaultValue);
    const [internalSearchValue, setSearchValue] = React.useState('');
    const searchValue = inputValue === undefined ? internalSearchValue : inputValue;
    const [shouldRenderSelectValue, setShouldRenderSelectValue] = React.useState(false);

    const [activeItem, setActiveItem] = React.useState<string>();

    const [constantOptions, setConstantOptions] = React.useState<IConstantOption[]>([]);
    const [dropDownItems, setDropItems] = React.useState<Array<SelectItemProps>>([]);

    const [isSearchPanelOpen, setIsSearchPanelOpen] = React.useState(forcedOpen);
    const [isFocused, setIsFocused] = React.useState(false);

    const selectIsUncontrolled = value === undefined;
    const modeIsSelect = mode === 'select';

    const calcRowCount = React.useMemo<number | 'none'>(() => {
      if (maxRowCount !== 'none' && maxRowCount > 0) return maxRowCount;

      return idleHeight === 'fixed' ? 1 : 'none';
    }, [maxRowCount, idleHeight]);

    const fixedHeight = calcRowCount !== 'none';

    const externalValue = value ?? defaultValue;
    const selectedArray = React.useRef<Array<string>>(Array.isArray(externalValue) ? externalValue : []);

    const unmountedSelectedOptions = React.useRef<Array<string>>([]);

    React.useEffect(() => {
      if (Array.isArray(value)) selectedArray.current = value;
    }, [value]);

    const selectedOption = React.useMemo(
      () => (multiple ? null : constantOptions.find((option) => option.value === selectedValue)),
      [multiple, constantOptions, selectedValue],
    );

    const selectedOptions = React.useMemo(() => {
      if (multiple && Array.isArray(selectedValue)) {
        return selectedValue.reduce((acc: Array<IConstantOption>, item: string) => {
          const option = constantOptions.find((option) => option.value === item);
          if (option) acc.push(option);
          return acc;
        }, []);
      } else {
        return [];
      }
    }, [constantOptions, selectedValue, multiple]);

    const dropDownModel = React.useMemo<Array<MenuModelItemProps>>(() => {
      const filteredItems = dropDownItems.filter((item) => {
        return onFilterItem(item.value, searchValue, searchFormat);
      });

      return filteredItems.length
        ? filteredItems
        : [
            {
              id: 'emptyMessage',
              render: () => <EmptyMessageWrapper key={'empty'}>{emptyMessage}</EmptyMessageWrapper>,
              disabled: true,
            },
          ];
    }, [isLoading, dropDownItems, dimension, searchValue]);

    const inputRef = inputTargetRef ?? React.useRef<HTMLInputElement | null>(null);
    const selectRef = React.useRef<HTMLSelectElement | null>(null);
    const containerRef = React.useRef<HTMLDivElement | null>(null);
    const valueWrapperRef = React.useRef<HTMLDivElement>(null);
    const dropDownRef = React.useRef<HTMLDivElement | null>(null);
    const mutableState = React.useRef<{ shouldExtendInputValue: boolean }>({
      shouldExtendInputValue: false,
    });

    const onConstantOptionMount = (option: IConstantOption) => {
      setConstantOptions((prev) => [...prev, option]);
      if (unmountedSelectedOptions.current.includes(option.value)) {
        unmountedSelectedOptions.current = unmountedSelectedOptions.current.filter(
          (unmountedOption) => unmountedOption !== option.value,
        );
      }
    };

    const onConstantOptionUnMount = (option: IConstantOption) => {
      if (selectedArray.current.includes(option.value)) {
        unmountedSelectedOptions.current = [...unmountedSelectedOptions.current, option.value];
      }
      setConstantOptions((prev) => prev.filter((prevOption) => prevOption.value !== option.value));
    };

    const handleDropDownOptionMount = React.useCallback((option: SelectItemProps) => {
      setDropItems((prev) => [...prev, option]);
    }, []);

    const handleDropDownOptionUnMount = React.useCallback((option: MenuModelItemProps) => {
      setDropItems((prev) => prev.filter((prevOption) => prevOption.id !== option.id));
    }, []);

    const onCloseSelect = React.useCallback(() => {
      setIsSearchPanelOpen(false);
      if (inputRef.current) changeInputData(inputRef.current, { value: '' });

      setShouldRenderSelectValue(true);
    }, [selectedValue]);

    const handleOptionSelect = React.useCallback(
      (optionValue: string) => {
        const selectElem = selectRef.current;

        if (!selectElem) return;

        const optionElems = Array.from(selectElem.options);
        const targetOptionElem = optionElems.find((option) => option.value === optionValue);

        if (!targetOptionElem) return;

        if (!multiple) optionElems.forEach((option) => (option.selected = false));

        targetOptionElem.selected = multiple ? !targetOptionElem.selected : true;
        selectElem.dispatchEvent(new Event('change', { bubbles: true }));

        if (!multiple) onCloseSelect();
      },
      [onCloseSelect, multiple],
    );

    const resetOptions = React.useCallback(() => {
      const selectElem = selectRef.current;

      if (!selectElem) return;

      selectElem.selectedIndex = -1;
      selectElem.dispatchEvent(new Event('change', { bubbles: true }));
    }, []);

    React.useEffect(() => {
      if (forcedOpen !== isSearchPanelOpen) {
        setIsSearchPanelOpen(forcedOpen);
      }
    }, [forcedOpen]);

    React.useEffect(() => {
      onChangeDropDownState?.(isSearchPanelOpen);

      if (!isSearchPanelOpen && isFocused && document.activeElement !== containerRef.current) {
        selectRef.current?.focus();
      }
    }, [isSearchPanelOpen]);

    const handleOnClear = onClearIconClick || resetOptions;

    const shouldFixMultiSelectHeight = fixedHeight && !isSearchPanelOpen;

    const renderMultipleSelectValue = React.useCallback(
      () => (
        <MultipleSelectChips
          containerRef={valueWrapperRef}
          options={selectedOptions}
          shouldShowCount={shouldFixMultiSelectHeight}
          disabled={disabled}
          readOnly={readOnly}
          onChipRemove={handleOptionSelect}
          onChipClick={stopPropagation}
        />
      ),
      [selectedOptions, shouldFixMultiSelectHeight, disabled, readOnly, handleOptionSelect],
    );

    const isEmptyValue = multiple ? !selectedValue?.length : !selectedValue;
    const isEmpty = isEmptyValue && !!placeholder && !searchValue;

    const renderedSelectValue = renderSelectValue?.(selectedValue, searchValue);

    const renderedSelectedOption = selectedOption?.children;
    const renderedDefaultSelectValue = multiple ? renderMultipleSelectValue() : renderedSelectedOption;
    const visibleValue = renderedSelectValue || renderedDefaultSelectValue || selectedValue || null;

    const visibleValueIsString = typeof visibleValue === 'string';

    const wrappedVisibleValue = visibleValueIsString ? (
      <DisplayValue
        visibleValue={visibleValue}
        isSearchPanelOpen={isSearchPanelOpen}
        targetRef={containerRef}
        forceHideOverflowTooltip={forceHideOverflowTooltip}
      />
    ) : (
      visibleValue
    );

    const handleSearchPanelToggle = () => {
      setIsSearchPanelOpen((prev) => !prev);
    };

    const mutateAndExtendTargetInputValue = (evt: React.ChangeEvent<HTMLInputElement>) => {
      if (!mutableState.current.shouldExtendInputValue || !visibleValueIsString) return;
      evt.target.value = `${visibleValue}${evt.target.value}`;
      mutableState.current.shouldExtendInputValue = false;
    };

    const onLocalInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
      if (!multiple) setShouldRenderSelectValue(false);
      mutateAndExtendTargetInputValue(evt);
      if (inputValue === undefined) setSearchValue(evt.target.value);
      onInputChange?.(evt);
    };

    const onMultipleSelectBackSpace = () => {
      const lastAbledSelectedOptionValue = findAbledOptionValue([...selectedOptions].reverse());
      if (!lastAbledSelectedOptionValue) return;
      handleOptionSelect(lastAbledSelectedOptionValue);
    };

    const deleteOrHideSelectValueOnBackspace = () => {
      if (searchValue || !selectedValue) return;
      if (!multiple) return setShouldRenderSelectValue(false);
      onMultipleSelectBackSpace();
    };

    const extendSelectValueToInputValue = () => {
      if (!visibleValueIsString || searchValue || !shouldRenderSelectValue) return;

      mutableState.current.shouldExtendInputValue = true;
    };

    const narrowSelectValueToInputValue = (evt: KeyboardEvent) => {
      if (!visibleValueIsString || !inputRef.current || searchValue || !shouldRenderSelectValue || !selectedValue)
        return;

      // Предотвратить удаление выделенного с помощью selection символа
      evt.preventDefault();
      const newInputValue = visibleValue.slice(0, -1);
      changeInputData(inputRef.current, {
        value: newInputValue,
        selectionEnd: newInputValue.length,
        selectionStart: newInputValue.length,
      });
    };

    React.useEffect(() => {
      function handleKeyDown(evt: KeyboardEvent) {
        const code = keyboardKey.getCode(evt);

        if (code === keyboardKey[' ']) {
          if (!modeIsSelect && !!searchValue) evt.stopPropagation();
          else if (!isSearchPanelOpen) {
            evt.preventDefault();
            setIsSearchPanelOpen(true);
            evt.stopPropagation();
          }
        }

        if (code === keyboardKey.Enter && !isSearchPanelOpen) {
          evt.preventDefault();
          setIsSearchPanelOpen(true);
          evt.stopPropagation();
        }

        if ((code === keyboardKey.ArrowDown || code === keyboardKey.ArrowUp) && !isSearchPanelOpen) {
          setIsSearchPanelOpen(true);
          evt.stopPropagation();
        }

        const modifyKeyPressed = evt.ctrlKey || evt.metaKey || evt.altKey;

        if (evt.key.length === 1 && !modifyKeyPressed) extendSelectValueToInputValue();
        if (code === keyboardKey.Backspace && !evt.repeat) deleteOrHideSelectValueOnBackspace();
        if (code === keyboardKey.Backspace) {
          narrowSelectValueToInputValue(evt);
          setIsSearchPanelOpen(true);
        }
        if (code === keyboardKey.Escape && isSearchPanelOpen) {
          setIsSearchPanelOpen(false);
          // prevent browser-specific escape key behavior (Safari exits fullscreen)
          evt.preventDefault();
          // prevent other overlays from closing (Modal for example)
          evt.stopPropagation();
        }
      }

      containerRef.current?.addEventListener('keydown', handleKeyDown);
      return () => {
        containerRef.current?.removeEventListener('keydown', handleKeyDown);
      };
    }, [modeIsSelect, searchValue, isSearchPanelOpen, selectedOptions]);

    const onFocus = (evt: React.FocusEvent<HTMLDivElement>) => {
      setIsFocused(true);
      onFocusFromProps?.(evt);
    };

    const handleWrapperBlur = (evt: React.FocusEvent<HTMLDivElement>) => {
      // если фокус переходит не на инпут, содержащийся внутри компонента
      if (!evt.currentTarget.contains(evt.relatedTarget) && !dropDownRef.current?.contains(evt.relatedTarget)) {
        setIsFocused(false);
        setIsSearchPanelOpen(false);
        selectRef.current?.blur();
        onBlurFromProps?.(evt);
      }
    };

    const handleNativeControlChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
      const value = multiple ? Array.from(evt.target.selectedOptions).map((option) => option.value) : evt.target.value;

      let newSelectedArray: Array<string> = [];
      if (multiple && Array.isArray(value)) {
        const addedValues = value.filter(
          (item) => !selectedArray.current.includes(item) && !unmountedSelectedOptions.current.includes(item),
        );

        const deletedVales = selectedArray.current.filter(
          (item) => !value.includes(item) && !unmountedSelectedOptions.current.includes(item),
        );

        newSelectedArray = [...selectedArray.current, ...addedValues];
        const newUnmounted = [...unmountedSelectedOptions.current];

        deletedVales.forEach((deletedItem) => {
          const selectedIndex = newSelectedArray.findIndex((item) => deletedItem === item);
          if (selectedIndex > -1) {
            newSelectedArray.splice(selectedIndex, 1);
          }

          const unmountedIndex = newUnmounted.findIndex((item) => deletedItem === item);
          if (unmountedIndex > -1) {
            newUnmounted.splice(unmountedIndex, 1);
          }
        });

        selectedArray.current = newSelectedArray;
        unmountedSelectedOptions.current = newUnmounted;
      }

      if (selectIsUncontrolled) {
        setSelectedValue(multiple ? newSelectedArray : value);
      }
      props.onChange?.(evt);
      onSelectedChange?.(multiple ? newSelectedArray : value);
    };

    React.useEffect(() => {
      if ((!isFocused && !multiple) || multiple) {
        if (inputRef.current) changeInputData(inputRef.current, { value: '' });
        setShouldRenderSelectValue(true);
      }
    }, [multiple, isFocused]);

    React.useEffect(() => {
      if (isSearchPanelOpen) {
        modeIsSelect ? selectRef.current?.focus() : inputRef.current?.focus();
      }
    }, [isSearchPanelOpen, modeIsSelect]);

    React.useEffect(() => {
      if (isSearchPanelOpen) {
        const activeValue = selectedValue && !Array.isArray(selectedValue) ? selectedValue : undefined;
        setActiveItem(activeValue);
      }
    }, [isSearchPanelOpen]);

    React.useEffect(() => {
      if (!selectIsUncontrolled) setSelectedValue(value);
    }, [value, selectIsUncontrolled]);

    useClickOutside([containerRef, dropDownRef], onCloseSelect);

    const handleWrapperClick = (e: React.MouseEvent) => {
      if (e.target && dropDownRef.current?.contains(e.target as Node)) return;

      const passClick = !modeIsSelect && isSearchPanelOpen;
      if (!passClick) handleSearchPanelToggle();
    };

    const handleClickOutside = (e: Event) => {
      if (e.target && containerRef.current?.contains(e.target as Node)) {
        return;
      }
      onCloseSelect();
    };

    const needShowClearIcon = shouldRenderSelectValue && (multiple ? !!selectedValue?.length : !!selectedValue);

    const memorisedDropDownOptions = React.useMemo(
      () => (
        <DropDownProvider
          onDropDownOptionMount={handleDropDownOptionMount}
          onDropDownOptionUnMount={handleDropDownOptionUnMount}
          dimension={dimension}
          multiple={multiple}
          showCheckbox={showCheckbox}
        >
          {children}
        </DropDownProvider>
      ),
      [children, dimension, showCheckbox],
    );

    const memorisedConstantOptions = React.useMemo(
      () => (
        <ConstantSelectProvider
          onConstantOptionMount={onConstantOptionMount}
          onConstantOptionUnMount={onConstantOptionUnMount}
        >
          {children}
        </ConstantSelectProvider>
      ),
      [children],
    );

    return (
      <SelectWrapper
        className={className}
        style={style}
        focused={isFocused}
        multiple={multiple}
        disabled={disabled}
        data-disabled={disabled}
        readonly={readOnly}
        dimension={dimension}
        ref={containerRef}
        data-status={status}
        onClick={handleWrapperClick}
        onFocus={onFocus}
        skeleton={skeleton}
        onBlur={handleWrapperBlur}
        title={title}
      >
        {memorisedConstantOptions}
        {memorisedDropDownOptions}
        <NativeControl
          ref={refSetter(ref, selectRef)}
          value={selectedValue}
          multiple={multiple}
          disabled={disabled}
          options={constantOptions}
          {...props}
          onChange={handleNativeControlChange}
        />
        <BorderedDiv />
        <ValueWrapper
          tabIndex={-1}
          ref={valueWrapperRef}
          id="selectValueWrapper"
          dimension={dimension}
          multiple={multiple}
          minRowCount={minRowCount !== 'none' ? minRowCount : undefined}
          maxRowCount={calcRowCount !== 'none' ? calcRowCount : undefined}
          opened={isSearchPanelOpen}
          isEmpty={isEmpty}
        >
          {shouldRenderSelectValue && wrappedVisibleValue}
          {((placeholder && isEmpty) || !modeIsSelect) && (
            <Input
              data-id={props.id}
              placeholder={isEmpty ? placeholder : ''}
              tabIndex={-1}
              ref={inputRef}
              disabled={disabled}
              readOnly={readOnly || modeIsSelect}
              value={searchValue}
              defaultValue={defaultInputValue}
              isMultiple={multiple}
              dimension={dimension}
              onChange={onLocalInputChange}
              onKeyDown={onInputKeyDown}
              onKeyUp={onInputKeyUp}
              onKeyUpCapture={onInputKeyUpCapture}
              onKeyDownCapture={onInputKeyDownCapture}
            />
          )}
        </ValueWrapper>
        {isSearchPanelOpen && !skeleton && (
          <DropdownContainer
            ref={dropDownRef}
            tabIndex={-1}
            targetElement={portalTargetRef?.current || containerRef.current}
            data-dimension={dimension}
            onClickOutside={handleClickOutside}
            alignSelf={alignDropdown}
            dropContainerCssMixin={dropContainerCssMixin}
            className={dropContainerClassName}
            style={dropContainerStyle}
          >
            <StyledMenu
              dimension={dimension === 'xl' ? 'l' : dimension}
              active={activeItem}
              selected={selectedValue}
              onActivateItem={setActiveItem}
              onSelectItem={handleOptionSelect}
              onDeselectItem={handleOptionSelect}
              multiSelection={multiple}
              model={dropDownModel}
              renderTopPanel={renderDropDownTopPanel}
              renderBottomPanel={renderDropDownBottomPanel}
              containerRef={dropDownRef}
              virtualScroll={virtualScroll}
              preventFocusSteal
            />
          </DropdownContainer>
        )}
        <IconPanel
          multiple={multiple}
          dimension={dimension}
          onClick={stopPropagation}
          onMouseDown={(e) => e.preventDefault()}
        >
          {isLoading && <Spinner dimension={dimension === 's' ? 'ms' : 'm'} />}
          {displayClearIcon && !readOnly && needShowClearIcon && (
            <InputIconButton icon={CloseOutlineSvg} id="searchSelectClearIcon" onClick={handleOnClear} aria-hidden />
          )}
          {icons}
          {!readOnly && (
            <OpenStatusButton
              $isOpen={isSearchPanelOpen}
              data-disabled={disabled ? true : undefined}
              onClick={handleSearchPanelToggle}
              aria-hidden
            />
          )}
        </IconPanel>
      </SelectWrapper>
    );
  },
);

export { Option } from './Option';
export { OptionGroup } from './OptionGroup';
export { defaultFilterItem } from './utils';
export { ValueWrapper as SelectValueWrapper } from './styled';

Select.displayName = 'Select';
