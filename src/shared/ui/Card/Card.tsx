import { HTMLAttributes, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
   className?: string;
   children: React.ReactNode;
}

export const Card = memo((props: CardProps) => {
  const { className, children, ...attrProps } = props;
  const { t } = useTranslation();

  return (
    <div
      className={classNames(cls.card, {}, [className])}
      {...attrProps}
    >
      {children}
    </div>
  );
});
