import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, VariantButton } from "../../shared/ui/Button/Button";

interface ThemeSwitcherProp {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProp) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant={VariantButton.CLEAR}
      onClick={toggleTheme}
      className={classNames(cls.themeSwitcher, {}, [className])}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
