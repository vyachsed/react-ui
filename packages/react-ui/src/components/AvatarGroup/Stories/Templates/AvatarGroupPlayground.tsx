import * as React from 'react';

import { AvatarGroup } from '@admiral-ds/react-ui';
import type { AvatarGroupProps } from '@admiral-ds/react-ui';
import { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';

const imageURL = 'https://github.com/DrUNE.png?size=100';

const onSelectAvatar = (id: string) => {
  // eslint-disable-next-line no-console
  console.log('Select item with id: ', id);
};

const items: AvatarGroupProps['items'] = [
  { userName: 'Lena Ivanova', icon: <PersonSolid />, id: '1' },
  { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2' },
  { userName: 'Agata Petrova', icon: <PersonSolid />, id: '3' },
  { userName: 'Arina Leskova', appearance: 'grey', id: '4' },
  { userName: 'Rita', appearance: 'dark', id: '5' },
  { userName: 'Drune', icon: <PersonSolid />, href: imageURL, id: '6' },
  { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7' },
  { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8' },
  { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9' },
  { userName: 'Tom Hidlton', appearance: { background: '#3F7DFE', text: '#001157' }, id: '10' },
];

export const AvatarGroupPlaygroundTemplate = ({ onAvatarSelect, ...props }: AvatarGroupProps) => {
  return (
    <AvatarGroup
      {...props}
      items={items}
      onAvatarSelect={onAvatarSelect || onSelectAvatar}
      data-dropdown-container-id="avatar-group-with-dropdown"
      className="avatar-group-class"
    />
  );
};