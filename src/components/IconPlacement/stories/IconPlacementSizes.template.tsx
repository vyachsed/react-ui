import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { IconPlacement, T } from '@admiral-ds/react-ui';
import type { IconPlacementProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`;

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const handleClick = () => console.log('IconPlacement clicked');

export const IconPlacementSizesTemplate = (props: IconPlacementProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    console.log(`Current border ${theme.shape.borderRadiusKind}`);
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <WrapperVertical>
        <Wrapper>
          <WrapperVertical>
            <T font="Body/Body 1 Long" as="div">
              Dimension - L Small
            </T>
            <IconPlacement dimension="lSmall" onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
            <IconPlacement dimension="lSmall" onClick={handleClick} disabled={true}>
              <CloseOutline />
            </IconPlacement>
            <T font="Body/Body 1 Long" as="div">
              Dimension - L Big
            </T>
            <IconPlacement dimension="lBig" onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
            <IconPlacement dimension="lBig" disabled={true} onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
          </WrapperVertical>
          <WrapperVertical>
            <T font="Body/Body 1 Long" as="div">
              Dimension - M Small
            </T>
            <IconPlacement dimension="mSmall" onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
            <IconPlacement dimension="mSmall" onClick={handleClick} disabled={true}>
              <CloseOutline />
            </IconPlacement>
            <T font="Body/Body 1 Long" as="div">
              Dimension - M Big
            </T>
            <IconPlacement dimension="mBig" onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
            <IconPlacement dimension="mBig" disabled={true} onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
          </WrapperVertical>
          <WrapperVertical>
            <T font="Body/Body 1 Long" as="div">
              Dimension - S
            </T>
            <IconPlacement dimension="s" onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
            <IconPlacement dimension="s" disabled={true} onClick={handleClick}>
              <CloseOutline />
            </IconPlacement>
          </WrapperVertical>
        </Wrapper>
      </WrapperVertical>
    </ThemeProvider>
  );
};
