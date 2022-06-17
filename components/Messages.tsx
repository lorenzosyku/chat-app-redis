import React, { useEffect, useRef, useState } from "react";
import redis from "../redis-config";
import Message from "./Message";
import SendMessage from "./SendMessage";


function Messages() {
  const [messages, setMessages] = useState<any>();
  
  useEffect(() => {
    const fn = async () => {
      const keys = await redis.keys("*");
      console.log(keys);
      console.log(keys.length, typeof keys);

      for (let i = 0; i < keys.length; i++) {
        console.log(keys[i]);
        const values = await redis.hgetall(`${keys[i]}`);
        console.log(values);
      }

      //setMessage(data);
      //console.log(data);
    };
    fn();
  }, []);

  return (
    <div className="pb-56">
      {/* <div className="space-y-10 p-4">
        {messages.map(message => (
          <Message key={message.id} message={message}/>
        ))}
      </div> */}
      <div className="flex justify-center">
        <SendMessage />
      </div>
      
    </div>
  );
}


export default Messages;
