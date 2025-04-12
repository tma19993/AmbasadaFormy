const express = require("express");
const router = express.Router();
const { mapDataFromCollection, catchError } = require("../untils/exports.js");

module.exports = function (gymPasses, users) {
  router.get("/AmbasadaFormy/getGymPasses", async (req, res) => {
    const gymPassesData = await mapDataFromCollection(gymPasses);
    res.status(200).json(gymPassesData);
  });

  router.post("/AmbasadaFormy/addGymPass", async (req, res) => {
    const newGymPass = {
      ...req.body,
    };
    const [error, result] = await catchError(gymPasses.insertOne(newGymPass));
    if (error) {
      res.status(500).send(error);
    }else{
      res.status(200).json(result);
    }
  });

  //pewnie do poprawy, jeśli nie to catchError do dodania
  router.put("/AmbasadaFormy/updateGymPass/:id", async (req, res) => {
    const gymPassId = req.params.id;
    const { price, name } = req.body;
    try {
      const result = await gymPasses.updateOne(
        { gymPassId },
        { $set: { price, name } }
      );

      if (result.modifiedCount === 1) {
        res.status(200).send("Dane użytkownika zostały zaktualizowane.");
      } else {
        res.status(404).send("Nie znaleziono użytkownika o podanym ID.");
      }
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send("Wystąpił błąd podczas aktualizacji danych użytkownika.");
    }
  });

  router.delete("/AmbasadaFormy/deleteGymPass/:id", async (req, res) => {
    const gymPassId = req.params.id;
      const [error, result] = await catchError(
        gymPasses.deleteOne({
          _id: gymPassId,
        })
      );
      if (error) {
        console.error("Error deleting user:", err);
        res.status(500).send({
          message: "Error deleting user.",
        });
      } else {
        const userId = new ObjectId(req.params.userId);
        if (result.deletedCount === 1) {
          res.status(200).send({
            message: `User with ID ${userId} has been deleted.`,
          });
        } else {
          res.status(404).send({
            message: `User with ID ${userId} not found.`,
          });
        }
      }
    });

  return router;
};
