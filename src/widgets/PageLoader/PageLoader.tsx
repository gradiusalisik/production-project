import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';

import { memo } from 'react';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.pageLoader, {}, [className])}>
      <Loader />
    </div>
  );
});
