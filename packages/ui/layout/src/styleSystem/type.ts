import type { CSSProperties } from 'react';

// layouts/Box.ts
type AsProps = {
  as?: Exclude<keyof JSX.IntrinsicElements, keyof SVGElementTagNameMap>;
};
type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, 'as'>;
export type AsElementProps = AsProps & ElementProps;
export type BoxProps = AsElementProps & {
  children?: React.ReactNode;

  // spacing
  mt?: number;
  mb?: number;
  px?: number;
  py?: number;

  // box
  bg?: string;
  boxShadow?: string;
  borderRadius?: string;

  width?: string | number;
  height?: string | number;
};

export type TextProps = {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  style?: React.CSSProperties;
};

export type FlexProps = BoxProps & {
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  basis?: CSSProperties['flexBasis'];
  direction?: CSSProperties['flexDirection'];
  grow?: CSSProperties['flexGrow'];
  shrink?: CSSProperties['flexShrink'];
  wrap?: CSSProperties['flexWrap'];
  gap?: number;
};

export type GridProps = BoxProps & {
  autoColumns?: CSSProperties['gridAutoColumns'];
  autoRows?: CSSProperties['gridAutoRows'];
  autoFlow?: CSSProperties['gridAutoFlow'];
  gap?: CSSProperties['gap'];
  row?: CSSProperties['gridTemplateRows'];
  rowGap?: CSSProperties['rowGap'];
  column?: CSSProperties['gridTemplateColumns'];
  columnGap?: CSSProperties['columnGap'];
  templateAreas?: CSSProperties['gridTemplateAreas'];
  templateColumns?: CSSProperties['gridTemplateColumns'];
  templateRows?: CSSProperties['gridTemplateRows'];
};
