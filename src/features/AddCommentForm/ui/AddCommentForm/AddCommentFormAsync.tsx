import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  () => new Promise((resolve) => {
    setTimeout(
      () =>
      // @ts-ignore
      // eslint-disable-next-line implicit-arrow-linebreak
        resolve(import('./AddCommentForm')),
      1500,
    );
  }),
);
