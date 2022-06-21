import React from "react";
import { CameraIcon, PencilIcon } from "@heroicons/react/outline";

function Header() {
  
  return (
    <div className="grid grid-cols-3 w-full py-2">
      <div className="col-span-1 pl-3">
        
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
