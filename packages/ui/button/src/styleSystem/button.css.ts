import { css, keyframes } from '@emotion/react';
import { ButtonProps } from './type';

const resolvePointColor = (color?: ButtonProps['bg']) =>
  color ? `var(--point-color-${color})` : undefined;

const resolveBoxShadow = (boxShadow?: ButtonProps['boxShadow']) =>
  boxShadow ? `var(--shadows-${boxShadow})` : undefined;

const resolveBorderRadius = (borderRadius?: ButtonProps['borderRadius']) =>
  borderRadius ? `var(--radi-${borderRadius})` : undefined;

const resolveSize = (
  size?: ButtonProps['size'],
  key?: 'fontSize' | 'fontWeight' | 'width' | 'height'
) => {
  if (!size || !key) return undefined;

  const prefixMap = {
    fontSize: '--font-size-',
    fontWeight: '--font-weight-',
    width: '--button-width-',
    height: '--button-height-',
  };

  return `var(${prefixMap[key]}${size})`;
};

const variantStyles = {
  solid: (color: string) => ({
    backgroundColor: `var(--point-color-${color})`,
    color: 'var(--color-white)',
    '&:hover:not([disabled])': {
      backgroundColor: `var(--point-color-${color}-hover)`,
    },
    '&:active:not([disabled])': {
      backgroundColor: `var(--point-color-${color}-active)`,
    },
  }),
  outline: (color: string) => ({
    border: `1px solid var(--point-color-${color})`,
    color: `var(--point-color-${color})`,
    backgroundColor: 'var(--color-white)',
  }),
  ghost: (color: string) => ({
    color: `var(--point-color-${color})`,
    backgroundColor: 'transparent',
    border: 'none',
  }),
};

export const createButtonStyle = ({
  boxShadow,
  borderRadius,
  color,
  disabled,
  bg = 'primary',
  variant = 'solid',
  size = 'md',
}: ButtonProps) =>
  css({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'all 0.2s ease-in-out',
    ...(bg && { backgroundColor: resolvePointColor(bg) }),
    ...(boxShadow && { boxShadow: resolveBoxShadow(boxShadow) }),
    ...(borderRadius && { borderRadius: resolveBorderRadius(borderRadius) }),
    ...(color &&
      (color.startsWith('--') ? { color: `var(${color})` } : { color })),

    ...(size && {
      fontSize: resolveSize(size, 'fontSize'),
      fontWeight: resolveSize(size, 'fontWeight'),
      width: resolveSize(size, 'width'),
      height: resolveSize(size, 'height'),
    }),
    ...(variant && variantStyles[variant](bg)),
    ...(disabled && {
      backgroundColor: 'var(--gray-200)',
      color: 'var(--gray-400)',
      cursor: 'not-allowed',
    }),
    '&:focus-visible': {
      outline: 'none',
      boxShadow: 'var(--shadows-outline)',
    },
  });

const spinKeyframes = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const createLoadingStyle = () =>
  css({
    width: '1rem',
    height: '1rem',
    position: 'absolute',
    animation: `${spinKeyframes} 0.45s linear infinite`,
    display: 'inline-block',
    borderTop: '2px solid currentcolor',
    borderRight: '2px solid currentcolor',
    borderBottom: '2px solid transparent',
    borderLeft: '2px solid transparent',
    borderRadius: '50%',
  });
