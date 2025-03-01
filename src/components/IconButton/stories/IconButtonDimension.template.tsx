import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { IconButton, T } from '@admiral-ds/react-ui';
import type { IconButtonProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';
import { ReactComponent as StarSolid } from '@admiral-ds/icons/build/system/StarSolid.svg';

const WrapperIconButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin: 8px;
  }
  justify-content: space-between;
  align-items: center;
`;

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const IconButtonDimensionTemplate = (props: IconButtonProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <WrapperIconButton>
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Dimension - xl
          </T>
          <IconButton {...props} dimension="xl">
            <StarSolid />
          </IconButton>
        </WrapperVertical>
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Dimension - l
          </T>
          <IconButton {...props} dimension="l">
            <StarSolid />
          </IconButton>
        </WrapperVertical>
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Dimension - m
          </T>
          <IconButton {...props} dimension="m">
            <StarSolid />
          </IconButton>
        </WrapperVertical>
        <WrapperVertical>
          <T font="Body/Body 1 Long" as="div">
            Dimension - s
          </T>
          <IconButton {...props} dimension="s">
            <StarSolid />
          </IconButton>
        </WrapperVertical>
      </WrapperIconButton>
    </ThemeProvider>
  );
};
