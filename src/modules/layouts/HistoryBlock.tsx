import React from "react";
import Link from "next/link";
import { Whatsapp } from "react-bootstrap-icons";

export const HistoryBlock: React.FC = () => {
  return (
    <>
      <div className="flex mb-7 h-6 items-center">
        <Link href="/">
          <a>
            <Whatsapp className="w-5.5 h-5.5" />
          </a>
        </Link>
      </div>
      <div className="bg-gray-100 rounded-8 p-3">
        <p>ghello</p>p<p>ghello</p>
        <p>ghello</p>
        <p>ghello</p>p<p>ghello</p>
      </div>
    </>
  );
};
