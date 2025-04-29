import * as React from 'react';
import { AccordionPanelProps } from './styleSystem/type';
import { clsx } from 'clsx';
import { accordionPanelStyle } from './styleSystem/accordion.css';
import { forwardRef, useRef, useState, useEffect } from 'react';
import { useAccordionContext } from './AccordionContext';

const AccordionPanel = (
  props: AccordionPanelProps,
  ref: React.Ref<HTMLDivElement>
) => {
  const { children, itemName = '', className, style, ...rest } = props;
  const innerRef = useRef<HTMLDivElement>(null);

  const { activeItems } = useAccordionContext();

  const isActive = activeItems.includes(itemName);

  const [currentHeight, setCurrentHeight] = useState<string>('0px');

  useEffect(() => {
    if (!innerRef.current) return;

    if (isActive) {
      setCurrentHeight(innerRef.current.scrollHeight + 'px');
    } else {
      setCurrentHeight('0px');
    }
  }, [isActive]);

  return (
    <div
      {...rest}
      ref={ref}
      className={clsx([accordionPanelStyle, className])}
      data-action-item={isActive}
      style={{
        overflow: 'hidden',
        transition: 'height 0.3s ease',
        height: currentHeight,
        ...style,
      }}
    >
      <div data-name='panel-inner' ref={innerRef}>
        {children}
      </div>
    </div>
  );
};

const _AccordionPanel = forwardRef(AccordionPanel);
export { _AccordionPanel as AccordionPanel };
