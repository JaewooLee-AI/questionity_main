import https from "node:https";

export default function handler(req, res) {
  const coverUrl = req.query.url;
  if (!coverUrl) {
    res.statusCode = 400;
    res.end("Missing url param");
    return;
  }

  const fetchUrl = coverUrl.replace("http://", "https://");

  https
    .get(
      fetchUrl,
      {
        headers: {
          Referer: "https://www.aladin.co.kr/",
          "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Accept: "image/webp,image/apng,image/*,*/*;q=0.8",
        },
      },
      (proxyRes) => {
        if (proxyRes.statusCode !== 200) {
          res.statusCode = proxyRes.statusCode || 502;
          res.end();
          return;
        }
        res.setHeader(
          "Content-Type",
          proxyRes.headers["content-type"] || "image/jpeg"
        );
        res.setHeader("Cache-Control", "public, max-age=86400");
        res.setHeader("Access-Control-Allow-Origin", "*");
        proxyRes.pipe(res);
      }
    )
    .on("error", () => {
      res.statusCode = 502;
      res.end();
    });
}
