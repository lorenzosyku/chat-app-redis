import type { NextPage } from "next";
import Head from "next/head";
import { FormEvent, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import redis from "../redis-config";
import { v4 as uuidv4 } from "uuid";

const Home: NextPage = () => {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   const n = prompt("enter your name");
  //   if (!n) return;
  //   setName(n);
  // }, []);

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
    <div className="flex min-h-screen flex-col items-center justify-center py-2 bg-gradient-to-r from-cyan-200 to-blue-200">
      <Head>
        <title>Chat app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <form onSubmit={handleSubmit} className="flex fixed bottom-10 bg-black opacity-80 px-6 py-4 w-11/12 max-w-2xl shadow-xl rounded-full border-4 border-blue-400 relative-group">
          <input ref={inputRef} type="text" placeholder="Enter your message" className="relative flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5"/>
          <button className="relative font-bold text-cyan-600">send</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
