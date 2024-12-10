const express = require("express");
const jwt = require("jsonwebtoken");
const tokenConfig = require("../configs/tokenConfig.js");
const { ObjectId } = require("mongodb");
const { mapDataFromCollection, catchError } = require("../untils/exports.js");
const router = express.Router();
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

module.exports = function (users) {
  router.get("/AmbasadaFormy/getUsers", async (req, res) => {
    const usersData = await mapDataFromCollection(users);
    res.status(200).json(usersData);
  });

  router.get("/AmbasadaFormy/getUser/:id", async (req, res) => {
    const userId = req.params.id;
    const [error, user] = await catchError(
      users.findOne({
        _id: new ObjectId(userId),
      })
    );
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(user);
    }
  });

  router.post("/AmbasadaFormy/addUser", async (req, res) => {
    users.findOne(
      {},
      { sort: { indeks: -1 }, projection: { _id: 0, indeks: 1 } },
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
    const [error, result] = await catchError(users.insertOne(newUser));
    if (error) {
      res.status(500).send(error);
    } else {
      const token = jwt.sign({ userId: result._id }, tokenConfig.SECRET, {
        expiresIn: "2h",
      });

      res.status(200).json({
        authToken: token,
        id: result.insertedId,
        user: newUser,
      });
    }
  });

  router.delete("/AmbasadaFormy/deleteUser/:userId", async (req, res) => {
    const [error, result] = await catchError(
      users.deleteOne({
        _id: userId,
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

  router.put(
    "/AmbasadaFormy/uploadPhoto/:id",
    upload.single("photo"),
    async (req, res) => {
      if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
      }
      const photo = req.file.buffer.toString("base64");
      const userId = req.params.id;
      const [error, result] = await catchError(
        users.findOneAndUpdate(
          { _id: new ObjectId(userId) },
          { $set: { photo: photo } },
          { returnDocument: "after" }
        )
      );
      error ? res.status(500).send(error) : res.status(200).json(result);
    }
  );

  router.post("/AmbasadaFormy/login", async (req, res) => {
    const { login, password } = req.body;
    const [error, user] = await catchError(
      users.findOne({
        login: login,
        password: password,
      })
    );
    if (error) {
      res.status(500).send(error);
    } else {
      if (!user) {
        res.status(401).json({
          message: "Logowanie nieudane",
        });
      } else {
        users.updateOne(
          {
            _id: new ObjectId(user._id),
          },
          {
            $set: {
              lastLogin: new Date(),
            },
          }
        );
        const token = jwt.sign({ userId: user._id }, tokenConfig.SECRET, {
          expiresIn: "2h",
        });
        res.json({
          authToken: token,
          isAdmin: user.permission == "admin",
        });
      }
    }
  });

  router.put("/AmbasadaFormy/updateUserData/:id", async (req, res) => {
    const userId = req.params.id;
    const [error, result] = await catchError(
      users.updateOne(
        {
          _id: new ObjectId(userId),
        },
        {
          $set: {
            ...req.body,
          },
        }
      )
    );
    if (error) {
      console.error(error);
      res
        .status(500)
        .send("Wystąpił błąd podczas aktualizacji danych użytkownika.");
    } else {
      if (result.modifiedCount === 1) {
        res.status(200).send(result);
      } else {
        res.status(404).send("Nie znaleziono użytkownika o podanym ID.");
      }
    }
  });

  router.get("/AmbasadaFormy/dashboard", async (req, res) => {
    try {
      const now = new Date();
      const oneHourAgo = new Date(now - 1 * 60 * 60 * 1000);
      const oneDayAgo = new Date(now - 24 * 60 * 60 * 1000);
      const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);

      const logins = await Promise.all([
        users.countDocuments({ lastLogin: { $gte: oneHourAgo } }),
        users.countDocuments({ lastLogin: { $gte: oneDayAgo } }),
        users.countDocuments({ lastLogin: { $gte: sevenDaysAgo } }),
      ]);

      const newUsers = await Promise.all([
        users.countDocuments({ createdAt: { $gte: oneHourAgo } }),
        users.countDocuments({ createdAt: { $gte: oneDayAgo } }),
        users.countDocuments({ createdAt: { $gte: sevenDaysAgo } }),
      ]);

      const newGymPass = await Promise.all([
        users.countDocuments({ dateGymPassActivation: { $gte: oneHourAgo } }),
        users.countDocuments({ dateGymPassActivation: { $gte: oneDayAgo } }),
        users.countDocuments({ dateGymPassActivation: { $gte: sevenDaysAgo } }),
      ]);

      const totalUsers = await users.countDocuments();

      const activeGymPass = await users.countDocuments({ activeGymPass: true });

      res.json({
        logins: {
          lastHour: logins[0],
          last24Hours: logins[1],
          last7Days: logins[2],
        },
        newUsers: {
          lastHour: newUsers[0],
          last24Hours: newUsers[1],
          last7Days: newUsers[2],
        },
        newGymPass: {
          lastHour: newGymPass[0],
          last24Hours: newGymPass[1],
          last7Days: newGymPass[2],
        },
        totalUsers,
        activeGymPass,
      });
    } catch (error) {
      console.error("Error fetching statistics:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return router;
};
