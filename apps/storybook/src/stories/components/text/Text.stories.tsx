import { Text as _Text } from '@ui/layout/src/typography';

export default {
  title: 'Text',
  component: _Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    as: {
      control: 'select',
      options: ['p', 'article', 'span'],
    },
    fontSize: {
      options: [
        '--font-size-12',
        '--font-size-14',
        '--font-size-16',
        '--font-size-20',
        '--font-size-24',
      ],
      control: 'select',
    },
    fontWeight: {
      options: [
        '--font-weight-400',
        '--font-weight-500',
        '--font-weight-600',
        '--font-weight-700',
      ],
      control: 'select',
    },
  },
};

export const Primary = {
  args: {
    as: 'p',
    children: 'Hello from Text!',
    fontSize: 'font-size-24',
    fontWeight: 'font-weight-bold',
    color: 'text-primary',
  },
};
