import { useSession, signIn, signOut } from "next-auth/react";
import Avatar from "boring-avatars";

const SideBar = () => {
  const { data: session } = useSession();
  return (
    <div className="">
      {session ? (
        <div className="w-60 h-screen shadow-md bg-slate-300 px-1 absolute">
          <ul className="relative">
            <li className="relative">
              <div className="flex items-center text-sm py-4 px-6 space-x-2 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded ">
                <div>
                  <Avatar
                    size={30}
                    name={`${session.user?.name}`}
                    variant="beam"
                    colors={[
                      "#92A1C6",
                      "#146A7C",
                      "#F0AB3D",
                      "#C271B4",
                      "#C20D90",
                    ]}
                  />
                </div>

                <button
                  onClick={() => signOut()}
                  className="rounded-full p-1 text-md bg-blue-200 outline shadow-md font-semibold hover:bg-blue-300"
                >
                  Sign Out
                </button>
              </div>
            </li>
            <li className="relative">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded h"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                <span>joe</span>
              </a>
            </li>
            <li className="relative">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded h"
                href="#!"
              >
                <span>john</span>
              </a>
            </li>
          </ul>
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
  );
};

export default SideBar;
