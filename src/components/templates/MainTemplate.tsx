import React, { ReactNode } from "react";

interface MainTemplateProps {
  children: ReactNode;
}

export const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
      <main>{children}</main>
  );
};
