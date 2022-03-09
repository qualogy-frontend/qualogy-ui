import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Search } from './Search';
import { useState } from '@storybook/addons';

export default {
  component: Search,
  title: 'Components/Search',
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
