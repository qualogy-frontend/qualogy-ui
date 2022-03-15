import React from 'react';
import { Story, Meta } from '@storybook/react';
import { GetInTouch } from './GetInTouch';
import { H1Tag, Paragraph } from '../../atoms/Text';
import { Button } from '../../atoms/Button';

export default {
  component: GetInTouch,
  title: 'organisms/GetInTouch',
} as Meta;

const Template: Story = (args) => (
  <GetInTouch {...args}>
    <H1Tag
      text="text-xl"
      mdText="md:text-3xl"
      lgText="lg:text-5xl"
      my=""
      color="text-white relative"
    >
      Let's work together
    </H1Tag>
    <Paragraph
      fontFam="font-serif"
      className="text-white relative py-4  lg:text-xl text-center md:text-right"
    >
      Ready to learn more about partnership with Qualogy
    </Paragraph>
    <Button type="light" extraClasses="relative">
      Neem contact op
    </Button>
  </GetInTouch>
);

export const Default = Template.bind({});
Default.args = {};
