const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../config");
const { ObjectId } = require("mongodb");
const { getData } = require("../utils");
const router = express.Router();

module.exports = function (users) {
  
  router.get("/getUsers", async (req, res) => {
    const usersData = await getData(users);
    res.status(200).json(usersData);
  });

  router.get("/getUser/:id", async (req, res) => {
    const userId = req.params.id;
    const user = await users.findOne({
      _id: new ObjectId(userId)
    });
    res.status(200).json(user);
  });

  router.post("/addUser", async (req, res) => {
    users.findOne({}, {sort: {indeks: -1}, projection: { _id: 0,indeks: 1},},
      function (err) {
        if (err) throw err;
      }
    );
  
    const newUser = {
      ...req.body,
      permission: "user",
      activeGymPass: false,
      haveCoach: false,
      
    };
    const result = await users.insertOne(newUser);
    const token = jwt.sign(result, config.SECRET, {
      expiresIn: "2h"
    });

    res.status(200).json({
      authToken: token,
      id: result.insertedId
    });
  });

  router.delete("/deleteUser/:userId", async (req, res) => {
    console.log("object");
    try {
      const userId = new ObjectId(req.params.userId);
      const result = await users.deleteOne({
        _id: userId
      });

      if (result.deletedCount === 1) {
        res.status(200).send({
          message: `User with ID ${userId} has been deleted.`
        });
      } else {
        res.status(404).send({
          message: `User with ID ${userId} not found.`
        });
      }
    } catch (err) {
      console.error("Error deleting user:", err);
      res.status(500).send({
        message: "Error deleting user."
      });
    }
  });

  router.post("/login", async (req, res) => {
    const {
      login,
      password
    } = req.body;
    const user = await users.findOne({
      login: login,
      password: password
    });
    if (!user) {
      res.status(401).json({
        message: "Logowanie nieudane"
      });
    } else {
      const token = jwt.sign(user, config.SECRET, {
        expiresIn: "2h"
      });
      res.json({
        authToken: token,
        isAdmin: user.permission == "admin",
        id: user._id
      });
    }

  });

  router.patch("/changeUserData/:id", async (req, res) => {
    const userId = req.params.id;
    const {
      name,
      email
    } = req.body;

    try {
      const result = await users.updateOne({
        _id: ObjectId(userId)
      }, {
        $set: {
          name,
          email
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