import React from "react";
import { MainLayout } from "./MainLayout";
import { UserViewList } from "./UserViewList";

interface Props {
  children?: React.ReactNode;
}

export const DefaultDesktopLayout: React.FC<Props> = ({ children }) => {
  return <MainLayout rightPanel={<UserViewList />}>{children}</MainLayout>;
};
