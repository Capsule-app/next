import React from "react";
import { Header } from "./Header";
import { FixedGridPanel as GridPanel, MiddlePanel } from "./GridPanels";
import { useScreenType } from "../../shared-hooks/useScreenType";

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
  const screenType = useScreenType();

  let gridTemplateColumns = "360px 744px 360px";
  let middle = null;
  let padding = "pt-6.5";

  switch (screenType) {
    case "3-cols":
      middle = (
        <>
          <GridPanel>{leftPanel}</GridPanel>
          <MiddlePanel>{children}</MiddlePanel>
          <GridPanel>{rightPanel}</GridPanel>
        </>
      );
      break;
    case "2-cols":
      gridTemplateColumns = "60px 744px 360px";
      middle = (
        <>
          {tabletSidebar}
          <MiddlePanel>{children}</MiddlePanel>
          <GridPanel>{rightPanel}</GridPanel>
        </>
      );
      break;
    case "1-cols":
      gridTemplateColumns = "60px 744px";
      middle = (
        <>
          {tabletSidebar}
          <MiddlePanel>{children}</MiddlePanel>
        </>
      );
      break;
    case "fullscreen":
      padding = "pt-6.5";
      middle = <MiddlePanel>{children}</MiddlePanel>;
      break;
    default:
      break;
  }

  return (
    <>
      <Header />
      <main
        className={`w-screen flex-row flex-nowrap justify-center relative ${padding}`}
        style={{
          display: screenType === "fullscreen" ? "flex" : "grid",
          gridTemplateColumns,
        }}
      >
        {middle}
      </main>
    </>
  );
};
