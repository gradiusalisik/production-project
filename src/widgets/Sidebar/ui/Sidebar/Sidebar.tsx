import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher/ThemeSwitcher';

import { SIDEBAR_ITEMS_LIST } from 'widgets/Sidebar/model/items';
import cls from './Sidebar.module.scss';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={handleToggle}
        className={cls.collapseBtn}
        variant={ButtonVariant.BACKGROUND_INVERTED}
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={cls.items}>
        {SIDEBAR_ITEMS_LIST.map((item) => (
          <SidebarItem item={item} key={item.path} collapsed={collapsed} />
        ))}

      </div>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} className={cls.langSwitcher} />
      </div>
    </div>
  );
});
