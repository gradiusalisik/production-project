import { lazy } from 'react';

export const MainPageAsync = lazy(
  () => new Promise((resolve) => {
    setTimeout(
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!
      () => resolve(import('./MainPage')),
      1500,
    );
  }),
);
