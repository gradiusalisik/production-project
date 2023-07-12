import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
  value: string;
  content: string;
}

export interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
  const {
    className, label, options, value, onChange, readonly,
  } = props;

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const optionsList = useMemo(
    () => options?.map((item) => (
      <option className={cls.option} value={item.value} key={item.value}>
        {item.content}
      </option>
    )),
    [options],
  );

  const mods: Mods = {};

  return (
    <div className={classNames(cls.wrapper, mods, [className])}>
      {label && (
      <span className={cls.label}>
        {label}
        {' '}
        &gt;
      </span>
      )}
      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={handleChangeSelect}
      >
        {optionsList}
      </select>
    </div>
  );
});
