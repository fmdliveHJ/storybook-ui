import { style } from '@vanilla-extract/css';
import { vars } from '@packages/themes';
export const layout = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  backgroundColor: vars.colors.$scale.pink[900],
});
