import Head from "next/head";
import Header from "../components/Header";
import Messages from "../components/Messages";


const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-r from-blue-100 to-blue-200">
      <Head>
        <title>Chat app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Messages />
    </div>
  );
};

export default Home;

