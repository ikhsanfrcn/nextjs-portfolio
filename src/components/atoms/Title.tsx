type TitleProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  export const Title: React.FC<TitleProps> = ({ children, className = '' }) => {
    return <h2 className={`text-3xl font-bold ${className}`}>{children}</h2>;
  };
  