const express = require("express");
const { mapDataFromCollection, catchError } = require("../untils/exports.js");
const router = express.Router();

module.exports = function (requests) {
  router.get("/AmbasadaFormy/getRequests", async (req, res) => {
    const requestsData = await mapDataFromCollection(requests);
    res.status(200).json(requestsData);
  });
  router.post("/AmbasadaFormy/addRequest", async (req, res) => {
    const [error, result] = await catchError(requests.insertOne(req.body));
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(result);
    }
  });
  return router;
};
