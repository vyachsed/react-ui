import * as React from 'react';
import styled from 'styled-components';

import { Avatar, DefaultFontColorName } from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';

const imageURL = 'https://github.com/DrUNE.png?size=100';

const Text = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color[DefaultFontColorName]};
`;

const Container = styled.div`
  position: relative;
  display: flex;
  & > * {
    margin-right: 20px;
  }
  margin-bottom: 40px;
`;

export const SingleAvatarTemplate = () => (
  <>
    <Text>Размеры компонента</Text>
    <Container>
      <Avatar dimension="xs" userName="Dimension xs" />
      <Avatar dimension="s" userName="Dimension s" />
      <Avatar dimension="m" userName="Dimension m" />
      <Avatar dimension="l" userName="Dimension l" />
      <Avatar userName="Dimension xl" />
    </Container>
    <Text>
      Внешний вид компонента (цвет фона, текста и иконки). Возможен выбор из четырех вариантов: light, white, grey, dark
      или самостоятельная настройка цвета фона, текста, иконки
    </Text>
    <Container style={{ background: '#F1F2F4' }}>
      <Avatar userName="Light Appearance" />
      <Avatar userName="White Appearance" appearance="white" />
      <Avatar userName="Grey Appearance" appearance="grey" />
      <Avatar userName="Dark Appearance" appearance="dark" />
      <Avatar userName="Custom Appearance" appearance={{ background: '#3F7DFE', text: '#001157' }} />
      <Avatar
        userName="Custom Appearance"
        icon={<PersonSolid />}
        appearance={{ background: '#8A3FFC', icon: '#FFFFFF' }}
      />
    </Container>
    <Text>Варианты контента (инициалы, иконка, фото)</Text>
    <Container>
      <Avatar userName="Name" userInitials="Na" />
      <Avatar userName="Name Surname" />
      <Avatar userName="Icon Avatar" icon={<PersonSolid />} />
      <Avatar userName="Image Avatar" href={imageURL} />
    </Container>
    <Text>Статусы компонента</Text>
    <Container>
      <Avatar userName="Status Danger" icon={<PersonSolid />} status="danger" />
      <Avatar userName="Status Warning" icon={<PersonSolid />} status="warn" />
      <Avatar userName="Status Success" icon={<PersonSolid />} status="success" />
      <Avatar userName="Status Inactive" icon={<PersonSolid />} status="inactive" />
      <Avatar userName="Example Name" href={imageURL} status="#3F7DFE" />
    </Container>
  </>
);