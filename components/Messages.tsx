import React, { useEffect, useState } from "react";
import redis from "../redis-config";

function Messages() {
  const [message, setMessage] = useState<any>();
  useEffect(() => {
    const fn = async () => {
      const keys = await redis.keys("*");
      console.log(keys);
      console.log(keys.length, typeof keys)
      
       for (let i = 0; i < keys.length; i++) {
         console.log(keys[i])
          const values = await redis.hgetall(`${keys[i]}`);
          console.log(values);
       }

      //setMessage(data);
      //console.log(data);
    };
    fn();
  }, []);

  return (
    <div>
      <div className="">
        {/* <p>{message?.id}</p>
        <p>{message?.text}</p>
        <p>{message?.name}</p> */}
      </div>
    </div>
  );
}

export default Messages;
