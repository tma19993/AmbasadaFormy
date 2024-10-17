const express = require("express");
const {
  getData
} = require("../utils");
const router = express.Router();


module.exports = function (coaches) {
  router.get("/getCoaches", async (req, res) => {
    const coachesData = await getData(coaches);
    res.status(200).json(coachesData);
  });

  router.post("/addCoach", async (req, res) => {
    const newCoach = req.body;
    const result = await coaches.insertOne(newCoach);
    res.status(200).json(result);
  });

  router.put("/changeCoach/:id", async (req, res) => {
    const userId = req.params.id;
    const {
      haveCoach,
      coachFullName
    } = req.body;
    try {
      const result = await users.updateOne({
        userId: userId
      }, {
        $set: {
          haveCoach,
          coachFullName
        }
      });

      if (result.modifiedCount === 1) {
        res.status(200).send("Dane użytkownika zostały zaktualizowane.");
      } else {
        res.status(404).send("Nie znaleziono użytkownika o podanym ID.");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Wystąpił błąd podczas aktualizacji danych użytkownika.");
    }
  });
  return router;
}