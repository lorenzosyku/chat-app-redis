import type { NextPage } from "next";
import Head from "next/head";
import { FormEvent, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import redis from "../redis-config";
import { v4 as uuidv4 } from "uuid";

const Home: NextPage = () => {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const n = prompt("enter your name");
    if (!n) return;
    setName(n);
  }, []);

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
    <div className="">
      <Head>
        <title>Chat app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="">
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" />
          <button>send</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
