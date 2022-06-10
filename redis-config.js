import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: "url",
  token: "token",
});

export default redis;
