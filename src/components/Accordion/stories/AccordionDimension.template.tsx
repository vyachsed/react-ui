import * as React from 'react';
import styled from 'styled-components';

import { Accordion, AccordionItem, T } from '@admiral-ds/react-ui';

const Separator = styled.div`
  height: 20px;
`;

export const AccordionDimensionTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Размер l
      </T>
      <Separator />
      <Accordion>
        <AccordionItem title="Первый пункт">Контент первого пункта</AccordionItem>
        <AccordionItem title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        </AccordionItem>
        <AccordionItem title="Третий пункт">
          Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей.
        </AccordionItem>
      </Accordion>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Размер m
      </T>
      <Separator />
      <Accordion dimension="m">
        <AccordionItem title="Первый пункт">Контент первого пункта</AccordionItem>
        <AccordionItem title="Второй пункт">
          Аккордеон — это вертикальный список заголовков, которые, при нажатии, показывают контент находящийся под ними.
        </AccordionItem>
        <AccordionItem title="Третий пункт" contentMaxHeight="150px">
          Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые сервисы позволяют
          находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям. Облако создает
          огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с теми игроками,
          с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет нового
          поколения консолей. Будущее игр никогда не было таким вдохновляющим. Творчество в играх процветает. Новые
          сервисы позволяют находить больше игр, а также приближают игроков к любимым играм, стримерам и создателям.
          Облако создает огромную возможность для потоковой передачи игр консольного уровня, что позволит людям играть с
          теми игроками, с кем хочется и где захочется. И для многих из нас нет ничего более вдохновляющего, чем рассвет
          нового поколения консолей.
        </AccordionItem>
      </Accordion>
    </>
  );
};