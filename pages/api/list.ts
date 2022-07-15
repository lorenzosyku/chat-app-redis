export default async (
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: string): any; new (): any };
    };
  }
) => {
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  const url =
    `https://${process.env.REDIS_ENDPOINT}/lrange/message/0/100?_token=` +
    token;

  return fetch(url)
    .then((r) => r.json())
    .then((data) => {
      let result = JSON.stringify(data.result);
      return res.status(200).json(result);
    });
};
