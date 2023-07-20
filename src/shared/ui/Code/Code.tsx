import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button, ButtonVariant } from '../Button/Button';
import CopyIcon from '../../assets/icons/copy-20-20.svg';
import { Icon } from '../Icon/Icon';

interface CodeProps {
   className?: string;
   text: string;
}

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const handleCopyCode = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.code, {}, [className])}>
      <Button variant={ButtonVariant.CLEAR} onClick={handleCopyCode} className={cls.buttonCopy}>
        <Icon Svg={CopyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
