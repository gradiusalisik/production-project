import { ArticleDetails } from 'entities/Articles';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const ArticleDetailsPage = () => {
  const { t } = useTranslation('article-details');
  const { id: articleId } = useParams<{id: string}>();

  if (!articleId) {
    return (
      <div>
        {t('Статья не найдена')}
      </div>
    );
  }

  return (
    <div>
      <ArticleDetails articleId={articleId} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
