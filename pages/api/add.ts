export default async (
  req: { query: { message: string } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      send: { (arg0: string): any; new (): any };
      json: { (arg0: string): any; new (): any };
    };
  }
) => {
  if (!req.query.message) {
    return res.status(400).send("todo parameter required.");
  }
  let message = encodeURI(req.query.message);

  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  const url =
    `https://${process.env.REDIS_ENDPOINT}/lpush/message/` +
    message +
    "?_token=" +
    token;

  return fetch(url)
    .then((r) => r.json())
    .then((data) => {
      let result = JSON.stringify(data.result);
      return res.status(200).json(result);
    });
};
