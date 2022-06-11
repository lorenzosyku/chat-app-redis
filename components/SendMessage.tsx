import React, { FormEvent, useRef, useState } from "react";
import redis from "../redis-config";
import { v4 as uuidv4 } from "uuid";
import { ChevronDoubleRightIcon, SortAscendingIcon } from "@heroicons/react/outline";

function SendMessage() {
  //const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
    if (!inputRef.current?.value) return;
    await redis.hset(`message-${uuidv4()}`, {
      name: name,
      message: inputRef.current.value,
    });
    inputRef.current!.value = "";
  };

  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <form
        onSubmit={handleSubmit}
        className="flex fixed bottom-10 bg-black opacity-80 px-6 py-4 w-11/12 max-w-2xl shadow-xl rounded-full border-4 border-blue-400 relative-group"
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter your message"
          className="relative flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"
        />
        <button className="relative font-bold text-cyan-600">
          <ChevronDoubleRightIcon className="h-5 w-5"/>
        </button>
      </form>
    </div>
  );
}

export default SendMessage;
