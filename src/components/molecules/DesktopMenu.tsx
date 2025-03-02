import { MenuItem } from '../atoms/MenuItem';

type DesktopMenu = {
  menuItems: { name: string; path: string }[];
  pathname: string;
  handleNavigation: (path: string) => void;
};

export const DesktopMenu: React.FC<DesktopMenu> = ({ menuItems, pathname, handleNavigation }) => {
  return (
    <div className="hidden md:flex gap-5">
      {menuItems.map((item) => (
        <MenuItem
          key={item.name}
          name={item.name}
          path={item.path}
          isActive={pathname === item.path}
          onClick={() => handleNavigation(item.path)}
        />
      ))}
    </div>
  );
};
