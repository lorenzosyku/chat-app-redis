import { useSession } from "next-auth/react";
import Head from "next/head";
import { FormEvent, useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import { v4 as uuidv4 } from "uuid";
import Avatar from "boring-avatars";
import ReactTimeago from "react-timeago";
import { ChevronDoubleRightIcon, XIcon } from "@heroicons/react/outline";

const Home = () => {
  const [data, setData] = useState<any>([]);
  const messageRef = useRef<HTMLInputElement>(null);
  const { data: session } = useSession();
  console.log(session);
  const endOfMessangesRef = useRef<HTMLDivElement>(null);

  let addMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(
      "/api/add?message=" +
        JSON.stringify({
          name: session?.user?.name,
          message: messageRef.current?.value,
          createdAt: Date.now(),
          id: uuidv4(),
        })
    )
      .then((res) => res.json())
      .then(() => {
        loadMessages();
        endOfMessangesRef.current?.scrollIntoView({ behavior: "smooth" });
        messageRef.current!.value = "";
      });
  };

  let removeMessages = (removeMessage: any) => {
    fetch("/api/remove?message=" + JSON.stringify(removeMessage))
      .then((res) => res.json())
      .then((data) => {
        loadMessages();
      });
  };

  let loadMessages = () => {
    console.log("load todos");
    fetch("/api/list")
      .then((res) => {
        console.log(res.json())
        return res.json()})
      .then((data) => {
        const copy = JSON.parse(data);
        const parsed = copy.map((el: string) => JSON.parse(el));
        const formatted = parsed.reverse();
        console.log(formatted);
        setData(formatted);
      });
  };
  useEffect(() => {
    loadMessages();
  }, []);

  return (
    <div className="bg-mint-cream backdrop-filter backdrop-blur-xl bg-opacity-40">
      <Head>
        <title>Chat app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid col-span-9">
        <div className="col-span-6">
          <Header />
          {session ? (
            <div className="h-screen overflow-y-scroll scrollbar-hide w-full">
              <div className="space-y-10 p-4 mt-12">
                {data.map((message: any) => {
                  let isUserMessage = false;
                  if (message.name === session.user?.name) {
                    isUserMessage = true;
                  }
                  return (
                    <div
                      key={message.id}
                      className={`flex items-end space-x-2 relative ${
                        isUserMessage && "justify-end"
                      }`}
                    >
                      <div
                        className={`relative h-8 w-8 ${
                          isUserMessage && "order-last ml-2"
                        }`}
                      >
                        <Avatar
                          size={20}
                          name={`${session?.user?.name}`}
                          variant="beam"
                          colors={[
                            "#92A1C6",
                            "#146A7C",
                            "#F0AB3D",
                            "#C271B4",
                            "#C20D90",
                          ]}
                        />
                      </div>
                      <div
                        className={`flex shadow-md space-x-4 p-3 rounded-lg ${
                          isUserMessage
                            ? "rounded-br-none bg-gradient-to-l from-mint-cream to-light-celeste backdrop-filter backdrop-blur-xl bg-opacity-40 "
                            : "rounded-bl-none bg-gradient-to-r from-mint-cream to-mellow-apricot backdrop-filter backdrop-blur-xl bg-opacity-40"
                        }`}
                      >
                        <p>{message.message}</p>
                        <button onClick={() => removeMessages(message)}>
                          <XIcon className="w-5 h-5" />
                        </button>
                      </div>

                      <div
                        className={`absolute flex -bottom-5 space-x-2 text-xs ${
                          isUserMessage ? "text-pink-300" : "text-blue-400"
                        }`}
                      >
                        <p className="font-semibold italic">{message.name}</p>

                        <div>
                          <ReactTimeago date={message.createdAt} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center">
                <div className="pb-56" ref={endOfMessangesRef}>
                  <p className="font-semibold text-blue-crayola">
                    You are up-to-date!
                  </p>
                </div>
                <form
                  className="flex fixed bottom-10 bg-mint-cream opacity-80 px-6 py-4 w-11/12 max-w-2xl shadow-xl rounded-full border-4 border-mellow-apricot relative-group"
                  onSubmit={addMessage}
                >
                  <input
                    type="text"
                    name="messageRef"
                    ref={messageRef}
                    placeholder="New Message"
                    className="relative flex-grow outline-none bg-transparent text-black pr-5"
                  />

                  <button className="relative font-bold text-blue-crayola">
                    <ChevronDoubleRightIcon className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-screen w-full">
              <p className="text-xl font-semibold italic animate-bounce ">
                Sign in to see your messages...
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
