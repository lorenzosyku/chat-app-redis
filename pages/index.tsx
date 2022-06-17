import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Messages from "../components/Messages";
import redis from "../redis-config";
import { mes } from "../typings";

interface Props {
  messages: mes[];
}

const Home = ({ messages }: Props) => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-r from-blue-100 to-blue-200">
      <Head>
        <title>Chat app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Messages messages={messages} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  let messages = [];
  const keys = await redis.keys("*");

  for (let i = 0; i < keys.length; i++) {
    console.log(keys[i]);
    const values = await redis.hgetall(`${keys[i]}`);

    messages.push({
      id: keys[i],
      author: values?.name,
      text: values?.message,
    });
  }

  return {
    props: {
      messages,
    },
  };
};
