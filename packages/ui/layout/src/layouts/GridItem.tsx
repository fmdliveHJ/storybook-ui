/** @jsxImportSource @emotion/react */

import { createGridStyle } from '../styleSystem/layout.css';
import type { GridProps } from '../styleSystem/type';

export const GridItem = (props: GridProps) => {
  const { as: Component = 'div', style, children, ...styleProps } = props;

  return (
    <Component css={createGridStyle(styleProps)} style={style}>
      {children}
    </Component>
  );
};
