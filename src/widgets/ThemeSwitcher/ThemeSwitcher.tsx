import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { memo } from 'react';
import { Button, ButtonVariant } from '../../shared/ui/Button/Button';

interface ThemeSwitcherProp {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProp) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant={ButtonVariant.CLEAR}
      onClick={toggleTheme}
      className={classNames('', {}, [className])}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
});
