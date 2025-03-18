type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
  };
  
  export const Button: React.FC<ButtonProps> = ({ children, className = '', onClick }) => {
    return (
      <button
        className={`p-2 border hover:bg-opacity-25 hover:bg-[#ABB2BF]  ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  