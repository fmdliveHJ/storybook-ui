/** @jsxImportSource @emotion/react */

import { createTextStyle } from '../styleSystem/layout.css';
import type { TextProps } from '../styleSystem/type';

export const Text = (props: TextProps) => {
  const { as: Component = 'div', style, children, ...styleProps } = props;
  return (
    <Component css={createTextStyle(styleProps)} style={style}>
      {children}
    </Component>
  );
};
