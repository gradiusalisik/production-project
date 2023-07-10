import { lazy } from 'react';

export const ProfilePageAsync = lazy(
  () => new Promise((resolve) => {
    setTimeout(
      // @ts-ignore
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!
      () => resolve(import('./ProfilePage')),
      1500,
    );
  }),
);
