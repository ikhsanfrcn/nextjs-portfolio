type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
  };
  
  export const Button: React.FC<ButtonProps> = ({ children, className = '', onClick }) => {
    return (
      <button
        className={`px-4 py-2 border hover:bg-white hover:text-gray-900 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  