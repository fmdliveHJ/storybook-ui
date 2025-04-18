/** @jsxImportSource @emotion/react */

import { createFlexStyle } from '../styleSystem/layout.css';
import type { FlexProps } from '../styleSystem/type';

export const Flex = (props: FlexProps) => {
  const { as: Component = 'div', style, children, ...styleProps } = props;
  return (
    <Component css={createFlexStyle(styleProps)} style={style}>
      {children}
    </Component>
  );
};
