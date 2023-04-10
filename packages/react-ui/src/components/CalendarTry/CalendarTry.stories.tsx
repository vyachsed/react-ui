import * as React from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes';
import { CalendarTry } from '#src/components/CalendarTry/index';
import { DayWrapper } from '#src/components/CalendarTry/Day';

export default {
  title: 'Admiral-2.1/CalendarTry',
  decorators: [withDesign],
  component: CalendarTry,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407',
    },
  },
  argTypes: {
    range: {
      control: { type: 'boolean' },
    },
    currentActiveViewImportant: {
      control: { type: 'boolean' },
    },
    currentActiveView: {
      options: ['YEAR', 'MONTH', 'DAY'],
      control: { type: 'radio' },
    },
    validator: {
      control: false,
    },
    tooltipContainer: {
      control: false,
    },
    startDate: {
      control: false,
    },
    selected: {
      control: false,
    },
    endDate: {
      control: false,
    },
    minDate: {
      control: false,
    },
    maxDate: {
      control: false,
    },
    highlightWeekend: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof CalendarTry>;

const Separator = styled.div`
  height: 20px;
  width: 20px;
`;

const StyledDay = styled(DayWrapper)`
  color: ${({ theme }) => theme.color['Error/Error 60 Main']};
`;

const Template1: ComponentStory<typeof CalendarTry> = (args) => {
  const [selected, setSelected] = React.useState<Dayjs>(dayjs());
  const [viewDate, setViewDate] = React.useState<Dayjs>(dayjs());

  const handleDayClick = (date: Dayjs) => {
    console.log(`click on ${date.format('DD MMM')}`);
    setSelected(date);
  };

  const customRenderDay = (date: Dayjs) => {
    return (
      <StyledDay
        key={date.valueOf()}
        today={date.isSame(dayjs(), 'date')}
        selected={date.isSame(selected, 'date')}
        outsideMonth={!date.isSame(viewDate, 'month')}
        onClick={() => handleDayClick(date)}
      >
        {date.date()}
      </StyledDay>
    );
  };
  return (
    <div style={{ display: 'flex' }}>
      <CalendarTry viewDate={viewDate} selected={selected} renderDay={customRenderDay} />
      <Separator />
      <CalendarTry viewDate={viewDate} selected={selected} userLocale="en" onClickHandler={handleDayClick} />
    </div>
  );
};

export const CalendarWidgetSimple = Template1.bind({});
CalendarWidgetSimple.args = {};
CalendarWidgetSimple.storyName = 'Simple.';
