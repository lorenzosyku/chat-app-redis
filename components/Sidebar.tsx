import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Avatar from "boring-avatars";

const SideBar = () => {
  const [mdVisible, setVisible] = useState<boolean>(true);
  const { data: session } = useSession();
  return (
    <div className="">
      {session ? (
        <div className="w-60 h-screen shadow-md bg-white px-1 absolute">
          <ul className="relative">
            <li className="relative">
              <div className="flex items-center text-sm py-4 px-6 space-x-2 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                <div onClick={() => setVisible((mdVisible) => !mdVisible)}>
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
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                href="#!"
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                <span>Sidenav link 1</span>
              </a>
            </li>
            <li className="relative">
              <a
                className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
                href="#!"
              >
                <span>Sidenav link 2</span>
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
