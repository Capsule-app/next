import React from "react";
import { Header } from "./Header";
import { FixedGridPanel, MiddlePanel } from "./GridPanels";
import { useScreenType } from "../../shared-hooks/useScreenType";
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
  const screenType = useScreenType();
  let gridTemplateColumns = "360px 744px 360px";

  const content = (
    <>
      <Media
        greaterThanOrEqual="xl"
        className={`relative grid grid-cols-xl gap-5`}
      >
        <FixedGridPanel>{leftPanel}</FixedGridPanel>
        <MiddlePanel>{children}</MiddlePanel>
        <FixedGridPanel>{rightPanel}</FixedGridPanel>
      </Media>
      <Media at="lg">
        <MiddlePanel>{children}</MiddlePanel>
        <FixedGridPanel>{rightPanel}</FixedGridPanel>
      </Media>
      <Media at="md">
        <p>md</p>
      </Media>
      <Media at="sm">
        <p>less than bro</p>
      </Media>
    </>
  );

  let middle = null;
  let padding = "";

  switch (screenType) {
    case "3-cols":
      middle = (
        <>
          <FixedGridPanel>{leftPanel}</FixedGridPanel>
          <MiddlePanel>{children}</MiddlePanel>
          <FixedGridPanel>{rightPanel}</FixedGridPanel>
        </>
      );
      break;
    case "2-cols":
      gridTemplateColumns = "60px 744px 360px";
      middle = (
        <>
          {tabletSidebar}
          <MiddlePanel>{children}</MiddlePanel>
          <FixedGridPanel>{rightPanel}</FixedGridPanel>
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

  return <main className="flex flex-col items-center w-full">{content}</main>;
};
