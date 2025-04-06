const express = require("express");
const { ObjectId } = require("mongodb");
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

  router.put("/AmbasadaFormy/updateRequest/:id", async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const [error, result] = await catchError(
      requests.updateOne(
        {
          _id: new ObjectId(id),
        },
        { $set: { status } }
      )
    );
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(result);
    }
  });

  router.delete("/AmbasadaFormy/deleteRequest/:id", async (req, res) => {
    const { id } = req.params;
    const [error, result] = await catchError(
      requests.deleteOne({
        _id: new ObjectId(id),
      })
    );
    if (error) {
      res.status(500).send({
        message: "Error deleting user.",
      });
    } else {
      if (result.deletedCount === 1) {
        res.status(200).send({
          message: `Request with ID ${id} has been deleted.`,
        });
      }
    }
  });
  return router;
};
