// styleSystem/createBoxStyle.ts
import { css } from '@emotion/react';
import { BoxProps, TextProps, FlexProps, GridProps } from './type';

export const createBoxStyle = ({
  mt,
  mb,
  px,
  py,
  bg,
  boxShadow,
  borderRadius,
  width,
  height,
}: BoxProps) =>
  css({
    ...(mt !== undefined && { marginTop: `var(--spacing-${mt})` }),
    ...(mb !== undefined && { marginBottom: `var(--spacing-${mb})` }),
    ...(px !== undefined && {
      paddingLeft: `var(--spacing-${px})`,
      paddingRight: `var(--spacing-${px})`,
    }),
    ...(py !== undefined && {
      paddingTop: `var(--spacing-${py})`,
      paddingBottom: `var(--spacing-${py})`,
    }),
    ...(bg && { backgroundColor: `var(--${bg})` }),
    ...(boxShadow && { boxShadow: `var(--${boxShadow})` }),
    ...(borderRadius && { borderRadius: `var(--${borderRadius})` }),
    ...(width !== undefined && {
      width: typeof width === 'number' ? `${width}px` : width,
    }),
    ...(height !== undefined && {
      height: typeof height === 'number' ? `${height}px` : height,
    }),
  });

export const createTextStyle = ({ fontSize, fontWeight, color }: TextProps) =>
  css({
    ...(fontSize &&
      (fontSize.startsWith('--')
        ? { fontSize: `var(${fontSize})` }
        : { fontSize })),
    ...(fontWeight &&
      (fontWeight.startsWith('--')
        ? { fontWeight: `var(${fontWeight})` }
        : { fontWeight })),
    ...(color &&
      (color.startsWith('--') ? { color: `var(${color})` } : { color })),
  });

export const createFlexStyle = ({
  align,
  justify,
  basis,
  direction,
  grow,
  shrink,
  wrap,
  gap,
}: FlexProps) =>
  css({
    display: 'flex',
    ...(align && { alignItems: align }),
    ...(justify && { justifyContent: justify }),
    ...(basis && { flexBasis: basis }),
    ...(direction && { flexDirection: direction }),
    ...(grow && { flexGrow: grow }),
    ...(shrink && { flexShrink: shrink }),
    ...(wrap && { flexWrap: wrap }),
    ...(gap && { gap }),
  });

export const createGridStyle = ({
  autoColumns,
  autoRows,
  autoFlow,
  gap,
  row,
  rowGap,
  column,
  columnGap,
  templateAreas,
  templateColumns,
  templateRows,
}: GridProps) =>
  css({
    display: 'grid',
    ...(autoColumns && { gridAutoColumns: autoColumns }),
    ...(autoRows && { gridAutoRows: autoRows }),
    ...(autoFlow && { gridAutoFlow: autoFlow }),
    ...(gap && { gap }),
    ...(row && { gridTemplateRows: row }),
    ...(rowGap && { rowGap }),
    ...(column && { gridTemplateColumns: column }),
    ...(columnGap && { columnGap }),
    ...(templateAreas && { gridTemplateAreas: templateAreas }),
    ...(templateColumns && { gridTemplateColumns: templateColumns }),
    ...(templateRows && { gridTemplateRows: templateRows }),
  });
