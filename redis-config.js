import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: "https://us1-fair-chamois-37344.upstash.io",
  token: "AZHgASQgYTMwOTZiMDUtNTU4ZS00NTFkLTgwMzQtYmRmMzMyODA5MGRlMzkwYzc4NjY0MzUzNDQ2MGI1OTYzODJhODMxMTY2YTY=",
});

export default redis;
