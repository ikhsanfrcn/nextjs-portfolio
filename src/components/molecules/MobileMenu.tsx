import { MenuItem } from "../atoms/MenuItem";
import { SocialIcons } from "../atoms/SocialIcons";

type MobileMenu = {
  menuItems: { name: string; path: string }[];
  pathname: string;
  handleNavigation: (path: string) => void;
};

export const MobileMenu: React.FC<MobileMenu> = ({
  menuItems,
  pathname,
  handleNavigation,
}) => {
  return (
    <div className="absolute top-16 left-0 w-full bg-background p-4">
      <div className="flex flex-col pt-5 gap-7 items-start text-3xl">
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
      <SocialIcons />
    </div>
  );
};
