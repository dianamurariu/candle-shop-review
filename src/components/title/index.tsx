import React, { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}
 
const Title: React.FC<TitleProps> = ({ children, level = "h2", className }) => {
  switch (level) {
    case "h1":
      return <h1 className={className}>{children}</h1>;
    case "h2":
      return <h2 className={className}>{children}</h2>;
    case "h3":
      return <h3 className={className}>{children}</h3>;
    case "h4":
      return <h4 className={className}>{children}</h4>;
    case "h5":
      return <h5 className={className}>{children}</h5>;
    case "h6":
      return <h6 className={className}>{children}</h6>;
    default:
      return <h2 className={className}>{children}</h2>;
  }
};

export default Title;
