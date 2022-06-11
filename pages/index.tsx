import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import SendMessage from "../components/SendMessage";

const Home: NextPage = () => {
  // useEffect(() => {
  //   const n = prompt("enter your name");
  //   if (!n) return;
  //   setName(n);
  // }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
      <Head>
        <title>Chat app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <SendMessage />
    </div>
  );
};

export default Home;
