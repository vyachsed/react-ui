import * as React from 'react';
import styled, { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import { TooltipHoc } from '#src/components/TooltipHOC';
import type { BreadcrumbsProps } from '#src/components/Breadcrumbs';

const getTypography = css<{ dimension: BreadcrumbsProps['dimension'] }>`
  ${({ dimension }) => {
    switch (dimension) {
      case 's':
        return typography['Caption/Caption 1'];
      case 'm':
        return typography['Body/Body 2 Short'];
      case 'l':
      default:
        return typography['Body/Body 1 Short'];
    }
  }}
`;

export const Crumb = styled.li<{ dimension: BreadcrumbsProps['dimension'] }>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  white-space: nowrap;
  ${getTypography}
`;

export const Content = styled.span`
  width: 100%;
  height: 100%;
  padding: 4px;
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const TextWithTooltip = TooltipHoc(TextWrapper);

const activeCrumbMixin = css`
  &:hover {
    color: ${({ theme }) => theme.color['Primary/Primary 70']};
  }
  &:active {
    color: ${({ theme }) => theme.color['Primary/Primary 80']};
  }
`;

export const CrumbAnchor = styled.a<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};

  ${({ $active }) => $active && activeCrumbMixin}

  &:focus {
    &:before {
      position: absolute;
      content: '';
      border: 2px solid ${({ theme }) => theme.color['Primary/Primary 60 Main']};
      border-radius: 4px;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  }
  &:focus,
  & > ${Content} {
    outline: none;
  }
`;

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLLIElement> {
  /** Текст хлебной крошки */
  text: string;
  /** Url хлебной крошки (href атрибут, используемый во внутреннем Anchor) */
  url?: string;
  /** Позволяет вместо внутреннего Anchor отрендерить любой другой компонент (https://styled-components.com/docs/api#as-polymorphic-prop)
   * Кроме последней неактивной вкладки, она по умолчанию рендерится как span и не является кликабельной.
   */
  linkAs?: React.ElementType;
  /** Дополнительные параметры, которые можно передать во внутренний Anchor */
  linkProps?: { [key: string]: string };
  /** Размер компонента */
  dimension?: BreadcrumbsProps['dimension'];
}

interface InternalBreadcrumbProps {
  /** Признак активности хлебной крошки */
  active?: boolean;
}

export const Breadcrumb = React.forwardRef<HTMLLIElement, BreadcrumbProps & InternalBreadcrumbProps>(
  ({ text, url = '#', linkAs, linkProps, children, tabIndex, dimension = 'l', active = true, ...props }, ref) => {
    const tooltip = text.length > 40;

    return (
      <Crumb ref={ref} dimension={dimension} {...props}>
        <CrumbAnchor
          {...(active ? { href: url } : {})}
          as={active ? linkAs : 'span'}
          tabIndex={tabIndex}
          $active={active}
          {...linkProps}
        >
          <Content tabIndex={-1} role="link">
            {tooltip ? <TextWithTooltip renderContent={() => text}>{text.slice(0, 37) + '...'}</TextWithTooltip> : text}
            {children}
          </Content>
        </CrumbAnchor>
      </Crumb>
    );
  },
);
