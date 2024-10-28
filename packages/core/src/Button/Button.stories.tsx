// src/Button/Button.stories.tsx

import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import { ReactureProvider } from '@reacture/theme';

// Meta configuration for the Button component stories
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,

  decorators: [
    (Story) => (
      <ReactureProvider>
        <Story />
      </ReactureProvider>
    ),
  ],
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
  },
};

export default meta;

// Template for generating different Button variants
const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary: StoryObj<ButtonProps> = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  primary: true,
};

export const Secondary: StoryObj<ButtonProps> = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  primary: false,
};