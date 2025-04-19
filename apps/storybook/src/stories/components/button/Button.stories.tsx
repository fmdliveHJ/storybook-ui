import { Button as _Button } from '@ui/button/src';

export default {
  title: 'Button',
  component: _Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    bg: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'accent',
        'success',
        'warning',
        'error',
      ],
    },
    boxShadow: {
      control: 'select',
      options: ['sm', 'base', 'md', 'lg', 'xl', '2xl', 'inner'],
    },
    borderRadius: {
      control: 'select',
      options: ['sm', 'base', 'md', 'lg', 'xl', '2xl', '3xl', 'full'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost'],
    },
  },
};

export const ButtonStory = {
  args: {
    as: 'button',
    children: 'Button!',
    bg: 'blue-50',
  },
};
