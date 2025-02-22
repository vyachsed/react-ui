import * as React from 'react';
import styled, { css } from 'styled-components';

import { DropMenu, MenuItem, Pill, Pills, refSetter, smallGroupBorderRadius } from '@admiral-ds/react-ui';
import type { Shape, Color, RenderOptionProps } from '@admiral-ds/react-ui';
import { ReactComponent as HeartOutline } from '@admiral-ds/icons/build/category/HeartOutline.svg';
import { ReactComponent as BurnSolid } from '@admiral-ds/icons/build/category/BurnSolid.svg';

type Status = 'Error' | 'Success' | 'Special' | 'Warning' | 'Attention';

type PillOptionProps = {
  id: string;
  label: string;
  status?: Status;
  icon?: React.ReactNode;
};

const getBackgroundColorByStatus = (status?: Status): keyof Color => {
  switch (status) {
    case 'Error':
      return 'Error/Error 60 Main';
    case 'Success':
      return 'Success/Success 50 Main';
    case 'Special':
      return 'Purple/Purple 60 Main';
    case 'Warning':
      return 'Warning/Warning 50 Main';
    case 'Attention':
      return 'Attention/Attention 50 Main';
    default:
      return 'Neutral/Neutral 10';
  }
};

const getFontColorByStatus = (status?: Status): keyof Color => {
  switch (status) {
    case 'Attention':
      return 'Special/Dark Static Neutral 00';
    case 'Error':
    case 'Success':
    case 'Special':
    case 'Warning':
      return 'Special/Static White';
    default:
      return 'Neutral/Neutral 90';
  }
};

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const WrapperVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const HeartOutlinePillIcon = styled(HeartOutline)`
  display: inline;
  width: 16px;
  height: 16px;
`;

const stylesByStatusCssMixin = css<{ status?: Status }>`
  background-color: ${(p) => p.theme.color[getBackgroundColorByStatus(p.status)]};
  color: ${(p) => p.theme.color[getFontColorByStatus(p.status)]};
`;

const StatusPill = styled(Pill).attrs<{ status?: Status }>((p) => ({
  'data-status': p.status,
}))<{ status?: Status }>`
  ${stylesByStatusCssMixin}

  > ${HeartOutlinePillIcon} *[fill^='#'] {
    fill: ${(p) => p.theme.color[getFontColorByStatus(p.status)]};
  }
`;

function firstNestedPillBorderRadius(shape: Shape): string {
  const radius = smallGroupBorderRadius(shape);
  return `${radius} 0 0 ${radius}`;
}

function lastNestedPillBorderRadius(shape: Shape): string {
  const radius = smallGroupBorderRadius(shape);
  return `0 ${radius} ${radius} 0`;
}

const NestedPill = styled.div`
  display: flex;

  > ${StatusPill}:first-of-type {
    border-radius: ${(p) => firstNestedPillBorderRadius(p.theme.shape)};
  }
  > ${StatusPill}:last-of-type {
    border-radius: ${(p) => lastNestedPillBorderRadius(p.theme.shape)};
  }
`;

const StyledPillIcon = styled.div<{ status?: Status }>`
  display: inline;
  width: 16px;
  height: 16px;

  *[fill^='#'] {
    fill: ${(p) => p.theme.color[getFontColorByStatus(p.status)]};
  }

  &:hover {
    & *[fill^='#'] {
      fill: ${(p) => p.theme.color[getFontColorByStatus(p.status)]};
    }
  }
`;

const leftPillClicked = () => console.log('Left nested pill clicked');
const rightPillClicked = () => console.log('Right nested pill clicked');
const itemsLeft: Array<PillOptionProps> = [
  {
    id: '1',
    label: 'Option one',
    status: 'Special',
  },
  {
    id: '2',
    label: 'Option two',
    status: 'Success',
  },
  {
    id: '3',
    label: 'Option three',
    status: 'Error',
  },
  {
    id: '4',
    label: 'Option four',
    status: 'Warning',
  },
  {
    id: '5',
    label: 'Option five',
  },
];
const itemsRight: Array<PillOptionProps> = [
  {
    id: '1',
    label: 'Option one',
    status: 'Warning',
  },
  {
    id: '2',
    label: 'Option two',
    status: 'Success',
  },
  {
    id: '3',
    label: 'Option three',
    status: 'Error',
  },
  {
    id: '4',
    label: 'Option four',
    status: 'Special',
  },
  {
    id: '5',
    label: 'Option five',
  },
];

interface PillMenuProps {
  options: Array<PillOptionProps>;
}

const PillMenu = React.forwardRef<HTMLDivElement, PillMenuProps>(({ options, ...props }, ref) => {
  const [selectedPill, setSelectedPill] = React.useState<PillOptionProps | undefined>(options[0]);

  const model = React.useMemo(() => {
    return options.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension="s" {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [options]);

  return (
    <DropMenu
      items={model}
      dropContainerClassName="dropContainerClass"
      selected={selectedPill?.id}
      onSelectItem={(id) => setSelectedPill(options.find((item) => item.id === id))}
      renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon }) => {
        return (
          <StatusPill
            {...props}
            ref={refSetter(ref, buttonRef as React.Ref<HTMLDivElement>)}
            status={selectedPill?.status}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
          >
            {selectedPill?.icon && <StyledPillIcon status={selectedPill?.status}>{selectedPill?.icon}</StyledPillIcon>}
            {selectedPill?.label}
            <StyledPillIcon status={selectedPill?.status}>{statusIcon}</StyledPillIcon>
          </StatusPill>
        );
      }}
    />
  );
});

export const PillNestedTemplate = () => {
  return (
    <WrapperVertical>
      <Desc>
        Компонент позволяет объединять два элемента в один, у каждого из которых есть все функции одиночного компонента.
        Используя иконки, следите, что бы иконки были во всех компонентах группы. Фукцию выпадающего меню, напротив,
        можно назначать избирательно.
      </Desc>
      <Desc>
        Для объединения двух StatusPill используется NestedPill, который стилизует правый и левый края StatusPill так,
        чтобы они "слились" в единую форму.
      </Desc>
      <Pills>
        <NestedPill>
          <StatusPill status="Special" onClick={leftPillClicked}>
            LeftNested
          </StatusPill>
          <StatusPill status="Warning" onClick={rightPillClicked}>
            RightNested
          </StatusPill>
        </NestedPill>
        <NestedPill>
          <StatusPill status="Special" onClick={leftPillClicked}>
            <StyledPillIcon status="Special">
              <HeartOutline />
            </StyledPillIcon>
            LeftNested
          </StatusPill>
          <StatusPill status="Warning" onClick={rightPillClicked}>
            <StyledPillIcon status="Warning">
              <BurnSolid />
            </StyledPillIcon>
            RightNested
          </StatusPill>
        </NestedPill>
        <NestedPill>
          <PillMenu options={itemsLeft} />
          <PillMenu options={itemsRight} />
        </NestedPill>
        <NestedPill>
          <StatusPill status="Special" onClick={leftPillClicked}>
            LeftNested
          </StatusPill>
          <PillMenu options={itemsRight} />
        </NestedPill>
      </Pills>
    </WrapperVertical>
  );
};
