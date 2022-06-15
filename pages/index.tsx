import type { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Messages from "../components/Messages";
import SendMessage from "../components/SendMessage";


const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-blue-100 to-blue-200">
      <Head>
        <title>Chat app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Messages />
      <SendMessage />
    </div>
  );
};

export default Home;

// export const getServerSideProps: GetServerSideProps<Props> = async () => {

//   //const messages = await redis.hgetall()
//   return {
//     props: {
//       messages: []
//     }
//   }
// }