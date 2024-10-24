const express = require("express");
const {mapDataFromCollection} = require("../untils/exports.js");
const router = express.Router();


module.exports = function (users) {
  router.get("/getCoaches", async (req, res) => {
      const usersData = await mapDataFromCollection(users);
      const coaches = usersData.filter(user => user.permission === "coach");
      res.status(200).json(coaches);
  });
  return router;
}