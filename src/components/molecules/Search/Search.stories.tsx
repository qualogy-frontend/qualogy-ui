import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Search } from './Search';

export default {
  component: Search,
  title: 'molecules/Search',
} as Meta;

const Template: Story = (args) => {
  const [value, setValue] = useState('');

  const onChangeInput = (inputValue: string) => {
    setValue(inputValue);
  };

  return (
    <Search
      value={value}
      OnTextChange={(e) => onChangeInput(e.target.value)}
      {...args}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
