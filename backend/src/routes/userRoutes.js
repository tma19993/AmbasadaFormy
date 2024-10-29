const express = require("express");
const jwt = require("jsonwebtoken");
const tokenConfig = require("../configs/tokenConfig.js");
const { ObjectId } = require("mongodb");
const { mapDataFromCollection, catchError } = require("../untils/exports.js");
const router = express.Router();
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });

module.exports = function (users) {
  
  router.get("/getUsers", async (req, res) => {
    const usersData = await mapDataFromCollection(users);
    res.status(200).json(usersData);
  });

  router.get("/getUser/:id", async (req, res) => {
    const userId = req.params.id;
    const [error,user] = await catchError( users.findOne({
      _id: new ObjectId(userId)
    }));
    if(error){
      res.status(500).send(error)
    }
    else{
      res.status(200).json(user);
    }
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
    const [error,result] = await catchError(users.insertOne(newUser));
    if(error){
      res.status(500).send(error);
    }
    else {
      const token = jwt.sign(result, tokenConfig.SECRET, {
        expiresIn: "2h"
      });
  
      res.status(200).json({
        authToken: token,
        id: result.insertedId
      });
    }
  });

  router.delete("/deleteUser/:userId", async (req, res) => {
    const [error,result] = await catchError(users.deleteOne({
      _id: userId
    }));
     if(error){
      console.error("Error deleting user:", err);
      res.status(500).send({
        message: "Error deleting user."
      });
     } 
     else {
      const userId = new ObjectId(req.params.userId);
      if (result.deletedCount === 1) {
        res.status(200).send({
          message: `User with ID ${userId} has been deleted.`
        });
      } else {
        res.status(404).send({
          message: `User with ID ${userId} not found.`
        });
      }
     }
  });

  router.put('/uploadPhoto/:id', upload.single('photo'), async (req, res) => {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
      const photo = req.file.buffer.toString('base64'); 
      const userId = req.params.id;
      const [error,result] = await catchError(users.findOneAndUpdate(
        { _id: new ObjectId(userId) },
        { $set: { photo: photo } },  
        { returnDocument: 'after' }
      ));
      error ? res.status(500).send(error) : res.status(200).json(result); 
  });

  router.post("/login", async (req, res) => {
    const { login, password } = req.body;
    const [error, user] = await catchError(users.findOne({
      login: login,
      password: password
    }));
    if(error){
      res.status(500).send(error);
    }
    else {
      if (!user) {
        res.status(401).json({
          message: "Logowanie nieudane"
        });
      } else {
        const token = jwt.sign(user, tokenConfig.SECRET, {
          expiresIn: "2h"
        });
        res.json({
          authToken: token,
          isAdmin: user.permission == "admin",
          id: user._id
        });
      }
    }

  });

  router.put("/updateUserData/:id", async (req, res) => {
    const userId = req.params.id;
      const [error,result] = await catchError(users.updateOne({
        _id: new ObjectId(userId)
      }, {
        $set: {
          ...req.body
        }
      }));
    if(error){
      console.error(error);
      res.status(500).send("Wystąpił błąd podczas aktualizacji danych użytkownika.");
    }
    else { 
      if (result.modifiedCount === 1) {
        res.status(200);
      } else {
        res.status(404).send("Nie znaleziono użytkownika o podanym ID.");
      }
    }
  });

  return router;
}