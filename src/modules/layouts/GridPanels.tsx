import React from "react";

interface Props {
  children: React.ReactNode;
}

export const FixedGridPanel: React.FC<Props> = ({ children }) => {
  return (
    <div className={`flex flex-col flex-1 sticky top-0 h-screen`}>
      {children}
    </div>
  );
};

export const MiddlePanel: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-row justify-center items-stretch">
      <div className="w-screen lg:w-full lg:max-w-main">{children}</div>
    </div>
  );
};
