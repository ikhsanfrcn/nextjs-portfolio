type TextProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  export const Text: React.FC<TextProps> = ({ children, className = '' }) => {
    return <p className={`text-gray ${className}`}>{children}</p>;
  };
  