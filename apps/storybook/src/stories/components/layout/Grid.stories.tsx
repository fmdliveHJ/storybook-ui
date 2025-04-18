import { Grid as _Grid } from '@ui/layout/src/layouts';
import type { GridProps } from '@ui/layout/src/styleSystem/type';

export default {
  title: 'Grid',
  component: _Grid,
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

export const FlexStory = {
  args: {
    as: 'div',
    children: 'Hello from Box!',
    bg: 'blue-50',
    width: '100%',
    height: '100%',
    align: 'center',
    justify: 'space-between',
    direction: 'row',
    wrap: 'wrap',
    gap: 4,
    style: {
      padding: '20px',
      width: '500px',
      backgroundColor: 'red',
    },
  },
  render: (args: GridProps) => {
    return (
      <_Grid {...args}>
        <div>Hello 11</div>
        <div>Hello </div>
      </_Grid>
    );
  },
};
