import React from "react";
import { Media } from "../../shared-hooks/useScreenSize";
import { Search } from "react-bootstrap-icons";
import Link from "next/link";
import { useTranslation } from "../../shared-hooks/useTranslation";

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="border-b border-gray-100 m:border-b-0 flex sticky w-full flex-col z-10 pt-1 m:pt-5 top-0 bg-white">
        <div className="flex mb-1 m:mb-7 h-6 items-center">
          <div className="flex flex-1 justify-center w-full">
            <div className="relative w-full z-10 flex flex-col">
              <Media greaterThanOrEqual="md">
                <div className="items-center flex w-full bg-gray-100 text-primary-300 transition duration-200 ease-in-out focus-within:text-primary-800 rounded-lg">
                  <div className="h-full mx-4 flex items-center pointer-events-none">
                    <Search />
                  </div>
                  <input
                    placeholder={t("search")}
                    autoComplete="off"
                    spellCheck="false"
                    className="w-full py-2 px-4 rounded-8 text-primary-800 placeholder-primary-200 focus:outline-none bg-gray-100 pl-0"
                  />
                </div>
              </Media>
              <Media at="sm">
                <div className="flex items-center justify-between">
                  <Link href="/u/alex">
                    <a>
                      <img
                        src="/me.png"
                        alt=""
                        className="w-5.5 h-5.5 rounded-full flex-none select-none"
                      />
                    </a>
                  </Link>
                  <Search className="w-4 h-4 text-primary-300" />
                </div>
              </Media>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
