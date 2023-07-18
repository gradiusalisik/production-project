import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(
  () => new Promise((resolve) => {
    setTimeout(
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!
      () => resolve(import('./ArticleDetailsPage')),
      1500,
    );
  }),
);
