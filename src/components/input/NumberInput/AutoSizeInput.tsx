import { useState, useRef, useLayoutEffect, forwardRef } from 'react';
import type { InputData } from '#src/components/common/dom/changeInputData';
import { changeInputData, isInputDataDifferent } from '#src/components/common/dom/changeInputData';
import type { ComponentDimension, ExtraProps } from '#src/components/input/types';
import type { TextInputProps } from '#src/components/input/TextInput';
import { typography } from '#src/components/Typography';
import styled, { css } from 'styled-components';
import { refSetter } from '#src/components/common/utils/refSetter';

import { fitToCurrency } from './utils';

const Prefix = styled.div<{ disabled?: boolean; align?: 'left' | 'right' }>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  user-select: none;
  color: ${({ theme, disabled }) => (disabled ? theme.color['Neutral/Neutral 30'] : theme.color['Neutral/Neutral 50'])};
  ${({ align }) => align === 'right' && 'margin-left: auto;'}
`;

const Suffix = styled(Prefix)`
  min-width: 0;
  ${({ align }) =>
    align === 'right' &&
    css`
      flex: 0 1 auto;
      margin-left: 0;
    `}
`;

const Sizer = styled.div<{ hasPrefix?: boolean; align?: 'left' | 'right' }>`
  display: flex;
  flex-shrink: 0;
  visibility: hidden;
  white-space: pre;
  box-sizing: border-box;
  ${({ hasPrefix, align }) => !hasPrefix && align === 'right' && 'margin-left: auto;'}
`;

export const BorderedDiv = styled.div<{ status?: TextInputProps['status'] }>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  pointer-events: none;
  overflow: hidden;
  min-width: 0;

  background: none;
  border: 1px solid
    ${({ theme, status }) => {
      if (status === 'error') return theme.color['Error/Error 60 Main'];
      if (status === 'success') return theme.color['Success/Success 50 Main'];
      return theme.color['Neutral/Neutral 40'];
    }};
  border-radius: inherit;

  [data-read-only] & {
    border-color: transparent;
  }
`;

const colorsBorderAndBackground = css<{ disabled?: boolean }>`
  &:focus + ${BorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Primary/Primary 60 Main']};
  }

  &:disabled + ${BorderedDiv} {
    border-color: transparent;
  }

  &[data-status='error']:focus + ${BorderedDiv}, &:invalid:focus + ${BorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  &:invalid + ${BorderedDiv} {
    border: 1px solid ${(props) => props.theme.color['Error/Error 60 Main']};
  }

  &[data-status='success']:focus + ${BorderedDiv} {
    border: 2px solid ${(props) => props.theme.color['Success/Success 50 Main']};
  }

  &:disabled {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  [data-read-only] &:focus + ${BorderedDiv} {
    border-color: transparent;
  }
`;

const ieFixes = css`
  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`;

const Input = styled.input<ExtraProps & { align?: 'left' | 'right' }>`
  outline: none;
  appearance: none;
  border: none;
  padding: 0;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex: 1 0 auto;
  max-width: 100%;

  background: transparent;
  color: ${(props) => props.theme.color['Neutral/Neutral 90']};
  text-align: ${({ align }) => (align === 'left' ? 'left' : 'right')};

  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  &::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }

  &:disabled::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }

  [data-disable-copying] & {
    user-select: none;
    pointer-events: none;
  }

  ${colorsBorderAndBackground}
  ${ieFixes}
`;

export const horizontalPaddingValue = (props: { dimension?: ComponentDimension }) => {
  switch (props.dimension) {
    case 'xl':
      return 16;
    case 's':
      return 12;
    default:
      return 16;
  }
};

export const iconSizeValue = (props: { dimension?: ComponentDimension }) => {
  switch (props.dimension) {
    case 'xl':
      return 24;
    case 's':
      return 20;
    default:
      return 24;
  }
};

const HiddenContent = styled.div<{ dimension?: ComponentDimension; iconCount?: number }>`
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  left: ${horizontalPaddingValue}px;
  right: ${(props) => horizontalPaddingValue(props) + (iconSizeValue(props) + 8) * (props.iconCount ?? 0)}px;
`;

export interface InputProps extends TextInputProps {
  /** точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа */
  precision?: number;
  /** префикс (строка, которая выводится перед числовым значением) */
  prefix?: string;
  /** суффикс (строка, которая выводится после числового значения) */
  suffix?: string;
  /** разделитель между тысячами */
  thousand?: string;
  /** разделитель между целым и десятичным */
  decimal?: string;
  /** Минимальное значение */
  minValue?: number;
  /** Количество иконок */
  iconCount?: number;
  /** Выравнивание контента. По умолчанию выравнивание происходит по левому краю */
  align?: 'left' | 'right';
}

export const AutoSizeInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      type,
      precision = 2,
      prefix = '',
      suffix,
      thousand = ' ',
      decimal = '.',
      status,
      minValue,
      iconCount,
      align,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [showPrefixSuffix, setPrefixSuffix] = useState(false);

    const sizerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const prefixRef = useRef<HTMLDivElement>(null);
    const suffixRef = useRef<HTMLDivElement>(null);

    const updateHiddenContent = (newValue: any) => {
      if (sizerRef.current) {
        sizerRef.current.innerHTML = newValue || placeholder || '';
      }
    };

    const updatePrefixSuffixState = (newValue: any) => {
      if (newValue) {
        setPrefixSuffix(true);
      } else {
        setPrefixSuffix(false);
      }
    };

    const updateInputLeftPadding = () => {
      if (inputRef.current) {
        if (!showPrefixSuffix || !prefix) {
          inputRef.current.style.paddingLeft = '0px';
        } else if (prefixRef.current && showPrefixSuffix) {
          inputRef.current.style.paddingLeft = `${prefixRef.current.getBoundingClientRect().width}px`;
        }
      }
    };

    const updateInputRightPadding = () => {
      if (inputRef.current) {
        if (!showPrefixSuffix || !suffix || align === 'left') {
          inputRef.current.style.paddingRight = '0px';
        } else if (suffixRef.current && showPrefixSuffix && align === 'right') {
          inputRef.current.style.paddingRight = `${suffixRef.current.getBoundingClientRect().width}px`;
        }
      }
    };

    const handleInput = (inputData: InputData | null): InputData => {
      const { value, selectionStart } = inputData || {};
      const cursor = selectionStart || 0;
      const init_value = value || '';
      const newValue = fitToCurrency(init_value, precision, decimal, thousand, undefined, minValue);

      updateHiddenContent(newValue);

      if (thousand && init_value.charAt(cursor - 1) === thousand && newValue.length === init_value.length) {
        // если пытаемся стереть разделитель thousand, то курсор перескакивает через него
        return {
          ...inputData,
          value: newValue,
          selectionStart: cursor - 1,
          selectionEnd: cursor - 1,
        };
      } else {
        return {
          ...inputData,
          value: newValue,
          selectionStart: newValue.length - init_value.length + cursor,
          selectionEnd: newValue.length - init_value.length + cursor,
        };
      }
    };

    useLayoutEffect(() => {
      const nullHandledValue = handleInput(null);

      function oninput(this: HTMLInputElement) {
        const { value, selectionStart, selectionEnd } = this;
        const currentInputData = { value, selectionStart, selectionEnd };

        const inputData = handleInput(currentInputData);

        if (placeholder && !isInputDataDifferent(nullHandledValue, inputData)) {
          changeInputData(this, { ...inputData, value: '' });
        } else {
          changeInputData(this, inputData);
        }
      }

      // Чтение selectionStart в Safari при type='date' вызывает ошибку
      if (type !== 'date' && inputRef.current) {
        const node = inputRef.current;
        node.addEventListener('input', oninput);

        const { value, selectionStart, selectionEnd } = node;
        const currentInputData = { value, selectionStart, selectionEnd };
        const inputData = handleInput(currentInputData);

        if (placeholder && !isInputDataDifferent(nullHandledValue, inputData)) {
          changeInputData(node, { ...inputData, value: '' });
        } else {
          changeInputData(node, inputData);
        }

        return () => {
          node.removeEventListener('input', oninput);
        };
      }
    }, [inputRef.current, placeholder, precision, decimal, thousand, minValue]);

    useLayoutEffect(() => {
      if (inputRef.current) {
        updateHiddenContent(inputRef.current.value);
        updatePrefixSuffixState(inputRef.current.value);
      }
    }, [props.value, props.defaultValue, placeholder, inputRef.current, sizerRef.current]);

    useLayoutEffect(
      () => updateInputLeftPadding(),
      [prefix, props.dimension, prefixRef.current, inputRef.current, showPrefixSuffix],
    );

    useLayoutEffect(
      () => updateInputRightPadding(),
      [suffix, props.dimension, suffixRef.current, inputRef.current, showPrefixSuffix, align],
    );

    useLayoutEffect(() => {
      if (prefixRef.current) {
        const resizeObserver = new ResizeObserver((entries) => {
          entries.forEach(() => {
            updateInputLeftPadding();
          });
        });
        resizeObserver.observe(prefixRef.current);
        return () => {
          resizeObserver.disconnect();
        };
      }
    }, [prefixRef.current, inputRef.current, showPrefixSuffix, prefix]);

    useLayoutEffect(() => {
      if (suffixRef.current) {
        const resizeObserver = new ResizeObserver((entries) => {
          entries.forEach(() => {
            updateInputRightPadding();
          });
        });
        resizeObserver.observe(suffixRef.current);
        return () => {
          resizeObserver.disconnect();
        };
      }
    }, [suffixRef.current, inputRef.current, showPrefixSuffix, suffix, align]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      updatePrefixSuffixState(e.target.value);
      onChange?.(e);
    };

    return (
      <>
        <HiddenContent iconCount={iconCount} dimension={props.dimension}>
          {prefix && showPrefixSuffix && (
            <Prefix ref={prefixRef} disabled={props.disabled} align={align}>
              {prefix}&nbsp;
            </Prefix>
          )}
          <Sizer ref={sizerRef} hasPrefix={!!prefix} align={align} />
          {suffix && showPrefixSuffix && (
            <Suffix ref={suffixRef} disabled={props.disabled} align={align}>
              &nbsp;{suffix}
            </Suffix>
          )}
        </HiddenContent>
        <Input
          {...props}
          onChange={handleChange}
          ref={refSetter(ref, inputRef)}
          placeholder={placeholder}
          type="text"
          data-status={status}
          align={align}
        />
        <BorderedDiv status={status} />
      </>
    );
  },
);
