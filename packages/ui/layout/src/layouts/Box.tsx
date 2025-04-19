/** @jsxImportSource @emotion/react */
import { createBoxStyle } from '../styleSystem/layout.css';

import type { BoxProps } from '../styleSystem/type';

export const Box = (props: BoxProps) => {
  const { as: Component = 'div', style, children, ...styleProps } = props;
  console.log(styleProps);
  return (
    <Component css={createBoxStyle(styleProps)} style={style}>
      {children}
    </Component>
  );
};
