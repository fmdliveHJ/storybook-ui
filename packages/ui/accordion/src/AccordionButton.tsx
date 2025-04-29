import * as React from 'react';
import { AccordionButtonProps } from './styleSystem/type';
import { clsx } from 'clsx';
import { accordionButtonStyle } from './styleSystem/accordion.css';
import { useAccordionContext } from './AccordionContext';
import { useCallback } from 'react';

const AccordionButton = (
  props: AccordionButtonProps,
  ref: React.Ref<HTMLButtonElement>
) => {
  const { className, itemName = '', onClick, children, ...rest } = props;

  const { activeItems, setActiveItem } = useAccordionContext();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (activeItems.includes(itemName)) {
        setActiveItem('');
      } else {
        setActiveItem(itemName);
      }
      onClick?.(event);
    },
    [itemName, activeItems, setActiveItem]
  );

  return (
    <button
      {...rest}
      ref={ref}
      className={clsx([accordionButtonStyle, className])}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

const _AccordionButton = React.forwardRef(AccordionButton);
export { _AccordionButton as AccordionButton };
