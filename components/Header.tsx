import React from "react";
import { CameraIcon, PencilIcon } from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";

function Header() {
  const { data: session } = useSession();
  return (
    <div className="grid grid-cols-3 w-full py-2 fixed z-10 bg-indigo-500">
      <div className="col-span-1 pl-3">
        {session ? (
          <div className="">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => signOut()}
                className="rounded-full p-1 text-md bg-blue-200 outline shadow-md font-semibold hover:bg-blue-300"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => signIn()}
            className="rounded-full p-1 text-md bg-blue-200 outline shadow-md font-semibold hover:bg-blue-300"
          >
            Sign In
          </button>
        )}
      </div>
      <div className="font-semibold col-span-1 flex items-center justify-center">
        <h1 className="text-2xl">ChatRoom</h1>
      </div>
      <div className="flex col-span-1 items-center justify-end pr-3 space-x-3">
        <CameraIcon className="h-6 w-6" />
        <PencilIcon className="h-6 w-6" />
      </div>
    </div>
  );
}

export default Header;
