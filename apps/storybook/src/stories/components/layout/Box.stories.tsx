import { Box as _Box } from '@ui/layout/src/layouts';

export default {
  title: 'Box',
  component: _Box,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['div', 'button', 'section', 'article', 'span'],
    },
  },
};

export const Primary = {
  args: {
    as: 'button',
    children: 'Hello from Box!',
    mt: 4,
    px: 4,
    py: 4,
    bg: 'blue-50',
    boxShadow: 'shadows-xs',
    borderRadius: 'radii-md',
  },
};
