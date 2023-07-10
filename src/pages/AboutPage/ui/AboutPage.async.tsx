import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () => new Promise((resolve) => {
    setTimeout(
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!
      () => resolve(import('./AboutPage')),
      1500,
    );
  }),
);
