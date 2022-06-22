import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Messages from "../components/Messages";
import SideBar from "../components/Sidebar";
import redis from "../redis-config";
import { mes, Msg } from "../typings";

interface Props {
  messages: mes[];
  // (a: mes, b: mes) => number
}

const Home = ({ messages }: Props) => {
  return (
    <div className="bg-slate-600">
      <Head>
        <title>Chat app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid col-span-9">
        <div className="col-span-2">
          <SideBar />
        </div>
        <div className="col-span-6">
          <Header />
          <Messages messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  // let messages: Array<mes> = [];
  let messages = [];
  const keys = await redis.keys("*");

  for (let i = 0; i < keys.length; i++) {
    //console.log(keys[i]);
    const values = await redis.hgetall(`${keys[i]}`);

    messages.push({
      id: keys[i],
      author: values?.name,
      text: values?.message,
      createdAt: values?.createdAt,
    });
  }

  //let sortedByCreatedAt = messages;
  // sortedByCreatedAt?.sort(function (a: mes, b: mes) {
  //   return a.createdAt - b.createdAt;
  // });

  // messages?.sort(function (a:mes, b:mes) {
  //   return a.createdAt - b.createdAt;
  // });

  return {
    props: {
      messages,
    },
  };
};
