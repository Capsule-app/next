import React from "react";
import { MainLayout } from "./MainLayout";
import { HistoryBlock } from "./HistoryBlock";
import { ProfileBlock } from "./ProfileBlock";

interface Props {
  children?: React.ReactNode;
}

export const DefaultDesktopLayout: React.FC<Props> = ({ children }) => {
  return (
    <MainLayout leftPanel={<HistoryBlock />} rightPanel={<ProfileBlock />}>
      {children}
    </MainLayout>
  );
};
