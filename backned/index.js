const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const config = require('./config');
const colors = require("colors");
const bodyParser = require("body-parser");
const { ObjectId } = require('mongodb');

const port = 5000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
async function getData(collection) {
  try {
    const data = await collection.find({}).toArray();
    return data;
  } catch (err) {
    return err;
  }
}

MongoClient.connect('mongodb://localhost:27017/AmbasadaFormy')
  .then((data) => {
    const database = data.db("AmbasadaFormy");
    const blog = database.collection("blog");
    const gymPasses = database.collection("gym-passes");
    const coaches = database.collection("trainers");
    const users = database.collection("users");

    app.get("/getBlog", async (req, res) => {
      const blogData = await getData(blog);
      res.send(blogData);
    });

    app.get("/getGymPasses", async (req, res) => {
      const gymPassesData = await getData(gymPasses);
      res.send(gymPassesData);
    });

    app.get("/getCoaches", async (req, res) => {
      const coachesData = await getData(coaches);
      res.send(coachesData);
    });

    app.get("/getUsers", async (req, res) => {
      const usersData = await getData(users);
      res.send(usersData);
    });

    app.get("/getUser/:id", async (req, res) => {
      const userId = req.params.id;
      const user = await users.findOne({ _id: new ObjectId(userId) });
      res.send(user);
    });
    
    app.post("/addBlog", async (req, res) => {
      const newBlogPost = req.body;
      const result = await blog.insertOne(newBlogPost);
      res.send(result);
    });

    app.post("/addUser", async (req, res) => {
      let lastId;
      users.findOne({}, { sort: { indeks: -1 }, projection: { _id: 0, indeks: 1 } }, function(err, result) {
        if (err) throw err;
    
        if (result) {
           lastId = result.indeks;
        }
      });
      const newUser = {
        userId: lastId,
        ...req.body,
        permission: "user",
        activeGymPass: false,
        haveCoach: false
      };
    
      
      const result = await users.insertOne(newUser);
      res.send(result);
    });

    app.delete("/deleteUser/:userId", async (req, res) => {
      try {
        const userId = parseInt(req.params.userId, 10); 
        const result = await users.deleteOne({ userId: userId });
    
        if (result.deletedCount === 1) {
          res.status(200).send({ message: `User with ID ${userId} has been deleted.` });
        } else {
          res.status(404).send({ message: `User with ID ${userId} not found.` });
        }
      } catch (err) {
        console.error("Error deleting user:", err);
        res.status(500).send({ message: "Error deleting user." });
      }
    });

    app.post("/addCoach", async (req, res) => {
      const newCoach = req.body;
      const result = await coaches.insertOne(newCoach);
      res.send(result);
    });

    app.post("/login", async (req, res) => {
      const { login, password } = req.body;
      const user = await users.findOne({ login: login, password: password });
      if(!user){
        res.status(401).json({ message: 'Logowanie nieudane' });
      }
      else{
        const token = jwt.sign(user, config.SECRET, { expiresIn: '2h' });
        res.json({ authToken: token, isAdmin: user.permission == "admin", id: user._id}); 
      }
     
    });

    app.put("/changeCoach/:id", async (req,res)=>{
      const userId = req.params.id;
      const {haveCoach ,coachFullName } = req.body;
      try {
        const result = await users.updateOne(
          { userId: userId },
          { $set: { haveCoach ,coachFullName } }
        );
    
        if (result.modifiedCount === 1) {
          res.send("Dane użytkownika zostały zaktualizowane.");
        } else {
          res.status(404).send("Nie znaleziono użytkownika o podanym ID.");
        }
      } catch (error) {
        console.error(error);
        res.status(500).send("Wystąpił błąd podczas aktualizacji danych użytkownika.");
      }
    });
    app.put("/updateGymPass/:id", async (req,res)=>{
      const userId = req.params.id;
      const {activeGymPass,gympassName} = req.body;
      try {
        const result = await users.updateOne(
          { userId: userId },
          { $set: { activeGymPass,gympassName } }
        );
    
        if (result.modifiedCount === 1) {
          res.send("Dane użytkownika zostały zaktualizowane.");
        } else {
          res.status(404).send("Nie znaleziono użytkownika o podanym ID.");
        }
      } catch (error) {
        console.error(error);
        res.status(500).send("Wystąpił błąd podczas aktualizacji danych użytkownika.");
      }
    });

    app.patch("/changeUserData/:id", async (req, res) => {
      const userId = req.params.id;
      const { name, email } = req.body;
    
      try {
        const result = await users.updateOne(
          { _id: ObjectId(userId) },
          { $set: { name, email } }
        );
    
        if (result.modifiedCount === 1) {
          res.send("Dane użytkownika zostały zaktualizowane.");
        } else {
          res.status(404).send("Nie znaleziono użytkownika o podanym ID.");
        }
      } catch (error) {
        console.error(error);
        res.status(500).send("Wystąpił błąd podczas aktualizacji danych użytkownika.");
      }
    });
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));

app.listen(port, () => {
  console.log("Aplikacja działa".bold.green);
  console.log(
    "Aplikacja nasłuchuje na porcie: ".green + colors.bold.green(port)
  );
});
