import * as React from 'react';
import { AccordionItemProps } from './styleSystem/type';
import { clsx } from 'clsx';
import { accordionItemStyle } from './styleSystem/accordion.css';
import { Children, cloneElement, isValidElement, forwardRef } from 'react';
const AccordionItem = (
  props: AccordionItemProps,
  ref: React.Ref<HTMLDivElement>
) => {
  const { children, itemName, className, ...rest } = props;

  const childrenWithProps = Children.toArray(children);

  const accordionItemChildren = childrenWithProps.map((child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { ...child.props, itemName });
    }
    return null;
  });

  return (
    <div {...rest} className={clsx([accordionItemStyle, className])}>
      {children}
    </div>
  );
};

const _AccordionItem = forwardRef(AccordionItem);
export { _AccordionItem as AccordionItem };
