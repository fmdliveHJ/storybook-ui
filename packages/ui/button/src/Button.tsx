/** @jsxImportSource @emotion/react */
import {
  createButtonStyle,
  createLoadingStyle,
} from './styleSystem/button.css';
import { ButtonProps } from './styleSystem/type';
import * as React from 'react';

const Button = (props: ButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const {
    children,
    leftIcon,
    onKeyDown,
    disabled,
    rightIcon,
    isLoading,
    ...styleProps
  } = props;

  const handleClick = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(e);
    if (e.key === 'Enter') {
      e.preventDefault();
      e.currentTarget.click();
    }
  };
  return (
    <button
      ref={ref}
      data-loading={isLoading}
      disabled={disabled}
      css={createButtonStyle({ ...styleProps, disabled, isLoading })}
      onKeyDown={handleClick}
      role='button'
    >
      {isLoading && <span css={createLoadingStyle()}></span>}
      {!isLoading && (
        <>
          {leftIcon && <span>{leftIcon}</span>}
          {children}
          {rightIcon && <span>{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

const _Button = React.forwardRef(Button);
export { _Button as Button };
