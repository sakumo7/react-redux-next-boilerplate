const express = require("express");
const next = require("next");
const proxy = require("http-proxy-middleware");
const routes = require("./routes");

const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = routes.getRequestHandler(app);
const API_URL = process.env.API_URL || "http://0.0.0.0:8000";

app.prepare().then(() => {
  const server = express();

  if (process.env.NODE_ENV !== "production") {
    server.use(
      "/api/v1/*",
      proxy({
        target: API_URL,
        changeOrigin: true,
        secure: false
      })
    );
  }

  server.get("*", (req, res) => handle(req, res));

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line
  });
});
