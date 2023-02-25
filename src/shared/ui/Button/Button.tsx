import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonVariant {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: ButtonVariant;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant,
    square,
    size = ButtonSize.M,
    ...rest
  } = props;

  const mods: Record<string, boolean> = {
    [cls[variant]]: true,
    [cls.square]: square,
    [cls[size]]: !!size,
  };

  return (
    <button
      type="button"
      className={classNames(cls.button, mods, [className])}
      {...rest}
    >
      {children}
    </button>
  );
};
