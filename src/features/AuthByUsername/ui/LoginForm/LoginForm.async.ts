import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(
  () => new Promise((resolve) => {
    setTimeout(
      () =>
      // @ts-ignore
      // eslint-disable-next-line implicit-arrow-linebreak
        resolve(import('./LoginForm')),
      1500,
    );
  }),
);
