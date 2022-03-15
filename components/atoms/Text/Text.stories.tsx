import React from 'react';
import { Story, Meta } from '@storybook/react';
import { H1Tag, H2Tag, H3Tag, H4Tag, TextStory } from './Text';

export default {
  component: TextStory,
  title: 'atoms/Text',
} as Meta;

const Template: Story = (args) => <TextStory {...args} />;

export const H1 = Template.bind({});
H1.args = { children: <H1Tag>H1 Heading</H1Tag> };

export const H2 = Template.bind({});
H2.args = { children: <H2Tag>H2 Heading</H2Tag> };

export const H3 = Template.bind({});
H3.args = { children: <H3Tag>H3 Heading</H3Tag> };

export const H4 = Template.bind({});
H4.args = { children: <H4Tag>H4 Heading</H4Tag> };
