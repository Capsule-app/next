import React, { useContext } from "react";
import { UserContext } from "../../shared-hooks/useUser";
import { useTranslation } from "../../shared-hooks/useTranslation";
import Link from "next/link";

export const ProfileBlock: React.FC = () => {
  const { user } = useContext(UserContext);
  const { t } = useTranslation();

  if (!user || user.isLoading) return null;

  return (
    <>
      <div className="flex justify-end mb-7 h-6 items-center">
        <Link href={`/u/${user.username}`}>
          <a>
            <img
              src={user.picture}
              className="w-6 h-6 rounded-full flex-none select-none"
            />
          </a>
        </Link>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <div className="bg-gray-100 rounded-8 p-3 space-y-2 mb-5">
          <div className="flex items-center space-x-2">
            <img src={user.picture} alt="" className="w-8 h-8 rounded-full" />
            <div>
              <h4>{user.name}</h4>
              <p className="-mt-1 font-medium text-primary-200">{`@${user.username}`}</p>
            </div>
          </div>
          <p>{user.bio || t("no-bio")}</p>
        </div>
        <h4>{t("people")}</h4>
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
      </div>
    </>
  );
};
