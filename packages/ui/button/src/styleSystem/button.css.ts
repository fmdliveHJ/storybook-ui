import { css } from '@emotion/react';
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

export const createButtonStyle = ({
  bg,
  boxShadow,
  borderRadius,
  color,
  isDisabled,
  size,
}: ButtonProps) =>
  css({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 0,
    cursor: isDisabled ? 'not-allowed' : 'pointer',
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
  });
