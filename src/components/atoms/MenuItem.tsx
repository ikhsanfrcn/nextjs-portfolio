type MenuItemProps = {
    name: string;
    path: string;
    isActive: boolean;
    onClick: () => void;
  };
  
  export const MenuItem: React.FC<MenuItemProps> = ({ name, isActive, onClick }) => {
    return (
      <button
        onClick={onClick}
        className={`${isActive ? "text-white" : "text-grey"} hover:text-white`}
      >
        <span className="text-primary">#</span>
        {name}
      </button>
    );
  };
  