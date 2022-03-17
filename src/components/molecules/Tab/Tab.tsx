import React, { FC } from 'react';
import { Button, Section } from '../../atoms';
import { ITabProps } from './Tab.interface';

export const Tab: FC<ITabProps> = ({ data }) => {
  const { buttons } = data;
  return (
    <Section justify="justify-between">
      {buttons.map((item, index) => (
        <Button link={item.link} type="gradient" key={index}>
          {item.label}
        </Button>
      ))}
    </Section>
  );
};
