const express = require("express");
const router = express.Router();
const { getData } = require("../utils");

module.exports = function (gymPasses){
  router.get("/getGymPasses", async (req, res) => {
    const gymPassesData = await getData(gymPasses);
    res.status(200).json(gymPassesData);
  });

  router.put("/updateGymPass/:id", async (req,res)=>{
    const userId = req.params.id;
    const {activeGymPass,gympassName} = req.body;
    try {
      const result = await users.updateOne(
        { userId: userId },
        { $set: { activeGymPass,gympassName } }
      );
  
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
