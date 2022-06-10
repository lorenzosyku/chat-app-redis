import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/Header";
import redis from '../redis-config'
const Home: NextPage = () => {
  useEffect(() => {
    const updateDB = async () => {
      const a = await redis.set("a", "ai karamba")
      console.log(a)
      if(a==="OK"){
        console.log(await redis.get("a"))
      }
    }
    updateDB()
  }, [])
  return (
    <div className="">
      <Head>
        <title>Chat app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

    </div>
  );
};

export default Home;
