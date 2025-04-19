/** @jsxImportSource @emotion/react */
import { createButtonStyle } from './styleSystem/button.css';
import { ButtonProps } from './styleSystem/type';
import { forwardRef } from 'react';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: ButtonProps, ref) => {
    const { style, children, ...styleProps } = props;

    return (
      <button ref={ref} css={createButtonStyle(styleProps)} style={style}>
        {children}
      </button>
    );
  }
);
