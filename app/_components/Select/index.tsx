import React from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import styles from './styles.module.scss';
import { ARCHETYPE } from '@/app/_types';

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item className={styles.selectItem} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export const Selector = ({ onChange }) => (
  <div className={styles.container}>
    <Select.Root onValueChange={onChange}>
      <Select.Trigger className={styles.trigger} aria-label="Archetype">
        <Select.Value placeholder="Select an archetype" />
        <Select.Icon className={styles.selectIcon}>
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className={styles.selectContent}>
          <Select.ScrollUpButton className={styles.scrollButton}>
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className={styles.viewport}>
            <Select.Group>
              <Select.Label className={styles.selectLabel}>Archetype</Select.Label>
              <SelectItem value={ARCHETYPE.KNIGHT}>Knight</SelectItem>
              <SelectItem value={ARCHETYPE.WIZARD}>Wizard</SelectItem>
              <SelectItem value={ARCHETYPE.SUN_CLERIC}>Sun Cleric</SelectItem>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className={styles.scrollButton}>
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  </div>
);

