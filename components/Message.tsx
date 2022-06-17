import Avatar from 'boring-avatars';
import { useSession } from 'next-auth/react';
import React from 'react'

function Message() {
  const { data: session } = useSession();
  const isUserMessage = true;
  return (
    <div className={`flex items-end space-x-2 relative ${
      isUserMessage && 'justify-end'
    }`}>
      <div className={`relative h-8 w-8 ${
        isUserMessage && 'order-last ml-2'
      }`}>
        <Avatar
              size={20}
              name={`${session?.user?.name}`}
              variant="beam"
              colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
            />
      </div>
        <div
        className={`flex space-x-4 p-3 rounded-lg ${
          isUserMessage ? 'rounded-br-none bg-gradient-to-r from-pink-500 to-indigo-200 backdrop-filter backdrop-blur-xl bg-opacity-40 ' : "rounded-bl-none bg-gradient-to-l from-indigo-500 to-indigo-200 backdrop-filter backdrop-blur-xl bg-opacity-40"
        }`}>
          <p>i am a message</p>
        </div>
        
        <p className={`absolute -bottom-5 text-xs ${
          isUserMessage ? "text-pink-300" : "text-blue-400"
        }`}>
          username
        </p>
    </div>
  )
}

export default Message
