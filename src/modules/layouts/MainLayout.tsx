import React from "react";
import { Header } from "./Header";
import { FixedGridPanel, MiddlePanel } from "./GridPanels";
import { Media } from "../../shared-hooks/useScreenSize";

interface MainLayoutProps {
  tabletSidebar?: React.ReactNode;
  leftPanel?: React.ReactNode;
  rightPanel?: React.ReactNode;
  mobileHeader?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  leftPanel = <div />,
  rightPanel = <div />,
  tabletSidebar = <div />,
}) => {
  return (
    <main className="flex flex-col items-center w-full">
      <Media
        greaterThanOrEqual="xl"
        className={`relative grid grid-cols-xl gap-5`}
      >
        <FixedGridPanel>{leftPanel}</FixedGridPanel>
        <MiddlePanel>{children}</MiddlePanel>
        <FixedGridPanel>{rightPanel}</FixedGridPanel>
      </Media>
      <Media at="lg" className="relative grid grid-cols-lg gap-5">
        {tabletSidebar}
        <MiddlePanel>{children}</MiddlePanel>
        <FixedGridPanel>{rightPanel}</FixedGridPanel>
      </Media>
      <Media at="md" className="relative grid grid-cols-md gap-5">
        <MiddlePanel>{children}</MiddlePanel>
        <FixedGridPanel>{rightPanel}</FixedGridPanel>
      </Media>
      <Media at="sm">
        <MiddlePanel>{children}</MiddlePanel>
      </Media>
    </main>
  );
};
