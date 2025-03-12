const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");

module.exports = function () {
  const assetsPath = path.join(__dirname, "../frontend/assets");

  app.use(cors());

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use("/uploads", express.static("uploads"));

  app.use(
    "/assets",
    express.static(assetsPath, {
      etag: true,
      maxAge: "30d",
      setHeaders: (res, path) => {
        res.setHeader("Cache-Control", "public, max-age=2592000");
      },
    })
  );

  return app;
};
