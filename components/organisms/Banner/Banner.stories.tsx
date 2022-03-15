import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Banner } from './Banner';
import { Search } from '../../molecules';

export default {
  component: Banner,
  title: 'organisms/Banner',
} as Meta;

const Template: Story = (args) => {
  const [value, setValue] = useState('');

  const onChangeInput = (inputValue: string) => {
    setValue(inputValue);
  };
  return (
    <Banner {...args}>
      <Search
        value={value}
        OnTextChange={(e) => onChangeInput(e.target.value)}
      />
    </Banner>
  );
};

export const Default = Template.bind({});
Default.args = {};
