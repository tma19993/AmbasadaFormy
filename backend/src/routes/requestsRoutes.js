const express = require("express");
const {mapDataFromCollection} = require("../untils/exports.js");
const router = express.Router();


module.exports = function (requests) {
  router.get("/getRequests", async (req, res) => {
      const requestsData = await mapDataFromCollection(requests);
      res.status(200).json(requestsData);
  });
  return router;
}