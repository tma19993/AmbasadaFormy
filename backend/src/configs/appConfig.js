const bodyParser = require("body-parser");
const path = require('path');
const express = require("express");
const app = express();


module.exports = function () {
    const assetsPath = path.join(__dirname, '../frontend/assets');

    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,HEAD,OPTIONS,POST,PUT,DELETE","PATCH"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
      );
      next();
    });
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/uploads', express.static('uploads'));
    
    app.use('/assets', express.static(assetsPath, {
      etag: true,
      maxAge: '30d',
      setHeaders: (res, path) => {
        res.setHeader('Cache-Control', 'public, max-age=2592000');
      }
    }));

    return app;
}