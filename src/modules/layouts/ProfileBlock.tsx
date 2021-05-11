import React from "react";
import Link from "next/link";

export const ProfileBlock: React.FC = () => {
  return (
    <>
      <div className="flex justify-end mb-7 h-6 items-center">
        <Link href="/u/alex">
          <a>
            <img
              src="https://pbs.twimg.com/profile_images/1391474130780819459/ciGtE2k5_400x400.jpg"
              className="w-5.5 h-5.5 rounded-full flex-none select-none"
            />
          </a>
        </Link>
      </div>
      <>
        <div className="bg-gray-100 rounded-8 p-3 space-y-2 mb-5">
          <div className="flex items-center space-x-2">
            <img src="/me.png" alt="" className="w-8 h-8 rounded-full" />
            <div>
              <h4>Alex</h4>
              <p className="-mt-1 font-medium text-primary-200">@alex</p>
            </div>
          </div>
          <p>
            Developer. Pensacola Beach, FL 🏖️. ReactJS. TypeScript. Creator of
            Capsule.
          </p>
        </div>
        <h4>People</h4>
        <section className="mt-2">
          <div className="py-1 flex items-center space-x-2">
            <img
              src="/me.png"
              alt=""
              className="w-6 h-6 rounded-full flex-none select-none"
            />
            <p className="font-bold">Alex</p>
          </div>
          <div className="py-1 flex items-center space-x-2">
            <img
              src="/default-profile.png"
              alt=""
              className="w-6 h-6 rounded-full flex-none select-none"
            />
            <p className="font-bold">Lorem</p>
          </div>
        </section>
      </>
    </>
  );
};
