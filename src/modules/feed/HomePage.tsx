import React from "react";
import { DefaultDesktopLayout } from "../layouts/DefaultDesktopLayout";

export const HomePage: React.FC = () => {
  return (
    <DefaultDesktopLayout>
      <h1 className="font-bold text-accent">Hello</h1>
      <h2 className="font-bold text-accent-hover">Hello</h2>
      <h3 className="font-bold text-accent">Hello</h3>
      <h4 className="font-bold text-accent">Hello</h4>
      <h5 className="font-bold text-accent">Hello</h5>
      <p>Hello</p>
    </DefaultDesktopLayout>
  );
};
