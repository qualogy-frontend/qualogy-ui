import React from 'react';
import { Story, Meta } from '@storybook/react';
import { ImageSection } from './ImageSection';
import { data } from '../../../mockdata/imageSection';

export default {
  component: ImageSection,
  title: 'organisms/ImageSection',
} as Meta;

const Template: Story = (args) => <ImageSection data={data} {...args} />;

export const Default = Template.bind({});
Default.args = {};
