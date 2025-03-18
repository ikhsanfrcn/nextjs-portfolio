type TextProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  export const Text: React.FC<TextProps> = ({ children, className = '' }) => {
    return <p className={`text-sm md:text-md text-grey ${className}`}>{children}</p>;
  };
  