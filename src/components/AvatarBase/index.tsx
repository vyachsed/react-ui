import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import { typography } from '#src/components/Typography';
import { TooltipHoc } from '#src/components/TooltipHOC';
import { DefaultFontColorName } from '#src/components/themes/common';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

import { useLoaded } from './useLoaded';
import { AvatarSVG } from './Avatar_SVG';

const Wrapper = styled.button<{ size: string }>`
  position: relative;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin: 0;
  padding: 0;
  border: none;
  appearance: none;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};

  &:focus-visible {
    outline-offset: 2px;
    outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid 2px;
  }
`;

const WrapperWithTooltip = TooltipHoc(Wrapper);

const getTextColor = css<{ appearance: AvatarAppearance | { background?: string; text?: string; icon?: string } }>`
  ${({ theme, appearance }) => {
    switch (appearance) {
      case 'neutral1':
      case 'white':
      case 'neutral2':
      case 'light':
        return theme.color[DefaultFontColorName];
      case 'neutral3':
      case 'grey':
        return theme.color['Special/Static White'];
      case 'neutral4':
      case 'dark':
        return theme.color['Neutral/Neutral 00'];
      default:
        return appearance?.text || theme.color[DefaultFontColorName];
    }
  }}
`;

const getTypography = css<{ dimension: Dimension }>`
  ${({ dimension }) => {
    switch (dimension) {
      case 'xs':
      case 's':
        return typography['Caption/Caption 1'];
      case 'm':
      case 'l':
        return typography['Body/Body 1 Short'];
      case 'xl':
      default:
        return typography['Subtitle/Subtitle 1'];
    }
  }}
`;

const Text = styled.span<{
  appearance: AvatarAppearance | { background?: string; text?: string; icon?: string };
  dimension: Dimension;
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  color: ${getTextColor};
  ${getTypography}
`;

const getIconSize = css<{ dimension: Dimension }>`
  ${({ dimension }) => {
    switch (dimension) {
      case 'xs':
        return '16px';
      case 's':
        return '16px';
      case 'm':
        return '24px';
      case 'l':
        return '28px';
      case 'xl':
      default:
        return '32px';
    }
  }}
`;

const getIconColor = css<{ appearance: AvatarAppearance | { background?: string; text?: string; icon?: string } }>`
  ${({ theme, appearance }) => {
    switch (appearance) {
      case 'neutral1':
      case 'white':
      case 'neutral2':
      case 'light':
        return theme.color['Neutral/Neutral 50'];
      case 'neutral3':
      case 'grey':
        return theme.color['Special/Static White'];
      case 'neutral4':
      case 'dark':
        return theme.color['Neutral/Neutral 00'];
      default:
        return appearance?.icon || theme.color['Neutral/Neutral 50'];
    }
  }}
`;

const IconWrapper = styled.div<{
  dimension: Dimension;
  appearance: AvatarAppearance | { background?: string; text?: string; icon?: string };
}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${getIconSize};
  height: ${getIconSize};

  & svg {
    & *[fill^='#'] {
      fill: ${getIconColor};
    }
    width: 100%;
    height: 100%;
  }
`;

type Dimension = 'xs' | 's' | 'm' | 'l' | 'xl';
/**
 * @deprecated Use alternative values 'neutral1' | 'neutral2' | 'neutral3' | 'neutral4'
 */
type Appearance = 'white' | 'light' | 'grey' | 'dark';
export type AvatarAppearance = 'neutral1' | 'neutral2' | 'neutral3' | 'neutral4' | Appearance;
type Status = 'success' | 'danger' | 'warn' | 'inactive';

export interface AvatarBaseProps extends React.HTMLAttributes<HTMLButtonElement> {
  /** Имя пользователя, будет использовано внутри тултипа и для генерации инициалов (в случае если не задан параметр userInitials) */
  userName: string;
  /** Инициалы пользователя. По умолчанию вычисляются на основании userName - берутся первые буквы первых
   *  двух слов (одного слова для dimension='s'), входящих в userName
   */
  userInitials?: string;
  /** URL аватарки пользователя */
  href?: string;
  /** Статус пользователя */
  status?: Status | string;
  /** Иконка для отображения */
  icon?: React.ReactNode;
  /** Внешний вид компонента (цвет заливки, текста, иконки) -
   * можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов.
   * Параметры background, text и icon являются опциональными, если какие-то из них не заданы,
   * то по умолчанию будут применены те же цвета, что и при appearance='neutral2'
   * */
  appearance?: AvatarAppearance | { background?: string; text?: string; icon?: string };
  /** Размер компонента */
  dimension?: Dimension;
  /** Уникальный идентификатор svg маски */
  svgMaskId?: string;
  /** Отображение тултипа */
  showTooltip?: boolean;
  /** Аватар с опцией activity ring */
  withActivityRing?: boolean;
  /** Отображение activity ring */
  showActivityRing?: boolean;
}

export interface AvatarBaseInternalProps {
  /** Для внутреннего использования! Отображение аватара в составе группы (когда правый край аватара усечен) */
  group?: boolean;
  /** Для внутреннего использования! Используется ли аватар в качестве меню. Если да - то userName выводится без изменений */
  isMenuAvatar?: boolean;
}

export const AvatarBase = forwardRef<HTMLButtonElement, AvatarBaseProps & AvatarBaseInternalProps>(
  (
    {
      userName,
      userInitials,
      href,
      status,
      dimension = 'xl',
      icon: Icon,
      appearance = 'neutral2',
      group = false,
      showTooltip = true,
      isMenuAvatar = false,
      svgMaskId,
      withActivityRing = false,
      showActivityRing = false,
      ...props
    }: AvatarBaseProps & AvatarBaseInternalProps,
    ref,
  ) => {
    const loaded = useLoaded(href);
    const hasImage = Boolean(href && loaded === 'loaded');
    const hasIcon = Boolean(Icon && !hasImage);
    const hasAbbr = (!hasImage && !hasIcon) || isMenuAvatar;

    const maxAbbrLength = dimension === 'xs' ? 1 : 2;
    const defaultUserInitials = userName
      ?.split(' ')
      .map((word) => word.toUpperCase()[0])
      .join('')
      .slice(0, maxAbbrLength);
    const initials = userInitials ? userInitials : defaultUserInitials;
    const abbr = isMenuAvatar ? userName : initials;

    const getSize = (withActivityRing: boolean) => {
      let additionalPadding = 0;
      if (withActivityRing) {
        additionalPadding = 4;
      }
      switch (dimension) {
        case 'xs':
          return `${24 + additionalPadding * 2}px`;
        case 's':
          return `${32 + additionalPadding * 2}px`;
        case 'm':
          return `${40 + additionalPadding * 2}px`;
        case 'l':
          return `${48 + additionalPadding * 2}px`;
        case 'xl':
        default:
          return `${56 + additionalPadding * 2}px`;
      }
    };
    const renderAvatarContent = () => (
      <>
        <AvatarSVG
          dimension={dimension}
          size={getSize(withActivityRing)}
          hasImage={hasImage}
          href={href}
          status={status}
          appearance={appearance}
          group={group}
          svgMaskId={svgMaskId}
          withActivityRing={withActivityRing}
          showActivityRing={showActivityRing}
        />
        {hasAbbr && (
          <Text dimension={dimension} appearance={appearance}>
            {abbr}
          </Text>
        )}
        {hasIcon && (
          <IconWrapper dimension={dimension} appearance={appearance}>
            {Icon}
          </IconWrapper>
        )}
      </>
    );
    return showTooltip ? (
      <WrapperWithTooltip ref={ref} size={getSize(withActivityRing)} renderContent={() => userName} {...props}>
        {renderAvatarContent()}
      </WrapperWithTooltip>
    ) : (
      <Wrapper ref={ref} size={getSize(withActivityRing)} {...props}>
        {renderAvatarContent()}
      </Wrapper>
    );
  },
);

AvatarBase.displayName = 'AvatarBase';
