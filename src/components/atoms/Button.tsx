type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
  };
  
  export const Button: React.FC<ButtonProps> = ({ children, className = '', onClick }) => {
    return (
      <button
        className={`p-2 border hover:bg-opacity-25 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  