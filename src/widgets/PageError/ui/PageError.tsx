import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

import { memo } from 'react';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const handleUpdatePage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <p>
        {t('Произошла непредвиденная ошибка')}
      </p>
      <Button onClick={handleUpdatePage}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
});
