import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage = () => {
  const { t } = useTranslation('articles');
  return (
    <div>
      {t('Страница статьи')}
    </div>
  );
};

export default memo(ArticlesPage);
