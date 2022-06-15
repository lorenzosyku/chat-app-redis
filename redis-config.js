import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: "",
  token: "",
});

export default redis;
