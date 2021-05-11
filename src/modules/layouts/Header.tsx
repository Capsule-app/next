import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="justify-center fixed z-10 bg-accent w-screen h-6.5">
      <section className="w-full flex items-center">
        <div className="w-6 h-6 bg-gradient-to-b from-primary-blue-100 to-primary-blue-300 rounded-full" />
      </section>
      <section className="w-full flex items-center justify-center space-x-2">
        <div className="w-full max-w-main relative">
          <i className="left-4 top-3 absolute fas fa-search text-gray-400" />
          <input
            placeholder="Search"
            className="h-6 w-full rounded-lg pl-10 placeholder-gray-500 bg-gray-100 focus:outline-none"
          />
        </div>
      </section>
      <section className="w-full flex items-center justify-end space-x-1 flex-row">
        <div className="flex items-center justify-center hover:bg-light-100 rounded-full w-5.5 h-5.5">
          <i className="far fa-house text-black text-xl" />
        </div>
        <button className="flex items-center justify-center hover:bg-light-100 rounded-full w-5.5 h-5.5">
          <i className="far fa-users text-black text-xl" />
        </button>
        <button className="flex items-center justify-center hover:bg-light-100 rounded-full w-5.5 h-5.5">
          <i className="far fa-bell text-black text-xl" />
        </button>
      </section>
    </header>
  );
};
