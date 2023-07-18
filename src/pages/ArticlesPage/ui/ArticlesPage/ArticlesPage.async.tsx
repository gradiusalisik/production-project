import { lazy } from 'react';

export const ArticlesPageAsync = lazy(
  () => new Promise((resolve) => {
    setTimeout(
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!
      () => resolve(import('./ArticlesPage')),
      1500,
    );
  }),
);
