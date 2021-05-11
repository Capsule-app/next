import React from "react";
import { MainLayout } from "./MainLayout";
import { UserViewList } from "./UserViewList";
import { PersonFill } from "react-bootstrap-icons";

interface Props {
  children?: React.ReactNode;
}

export const DefaultDesktopLayout: React.FC<Props> = ({ children }) => {
  return (
    <MainLayout leftPanel={<UserViewList />} rightPanel={<UserViewList />}>
      <PersonFill size={96} className="text-accent-test" />
      {children}
    </MainLayout>
  );
};
