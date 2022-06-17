import React from "react";
import { mes } from "../typings";
import Message from "./Message";
import SendMessage from "./SendMessage";
interface Props {
  messages: mes[];
}

function Messages({ messages }: Props) {
  return (
    <div className="pb-56 bg-slate-600">
      <div className="space-y-10 p-4">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage />
      </div>
    </div>
  );
}

export default Messages;
