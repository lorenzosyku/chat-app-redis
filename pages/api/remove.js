export default async (req, res) => {
  if (!req.query.message) {
    return res.status(400).send("todo parameter required.");
  }
  let message = encodeURI(req.query.message);

  const token = process.env.UPSTASH_REDIS_REST_TOKEN;;
  const url =
    `https://${process.env.REDIS_ENDPOINT}/lrem/message/1/` + message + "?_token=" + token;

  return fetch(url)
    .then((r) => r.json())
    .then((data) => {
      let result = JSON.stringify(data.result);
      return res.status(200).json(result);
    });
};