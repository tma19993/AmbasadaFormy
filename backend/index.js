const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const colors = require("colors");
const port = 5000;
const { connectToDatabase } = require("./db/mongoClient");
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

connectToDatabase().then((collections) => {
  const { blog, gymPasses, coaches, users } = collections;

const blogRoutes = require("./routes/blogRoutes")(blog);
const gymPassesRoutes = require("./routes/gymPassesRoutes")(gymPasses);
const userRoutes = require("./routes/userRoutes")(users);
const coachRoutes = require("./routes/coachRoutes")(coaches);

app.use(blogRoutes);
app.use(gymPassesRoutes);
app.use(userRoutes);
app.use(coachRoutes);


// MongoClient.connect("mongodb://localhost:27017/AmbasadaFormy")
//   .then((data) => {
//     const database = data.db("AmbasadaFormy");
//     const blog = database.collection("blog");
//     const gymPasses = database.collection("gym-passes");
//     const coaches = database.collection("trainers");
//     const users = database.collection("users");

// //blog
//     app.get("/getBlog", async (req, res) => {
//       const blogData = await getData(blog);
//       res.send(blogData);
//     });

//     app.post("/addBlog", async (req, res) => {
//       const newBlogPost = req.body;
//       const result = await blog.insertOne(newBlogPost);
//       res.send(result);
//     });

//gym passes
    // app.get("/getGymPasses", async (req, res) => {
    //   const gymPassesData = await getData(gymPasses);
    //   res.send(gymPassesData);
    // });

    // app.put("/updateGymPass/:id", async (req,res)=>{
    //   const userId = req.params.id;
    //   const {activeGymPass,gympassName} = req.body;
    //   try {
    //     const result = await users.updateOne(
    //       { userId: userId },
    //       { $set: { activeGymPass,gympassName } }
    //     );
    
    //     if (result.modifiedCount === 1) {
    //       res.send("Dane użytkownika zostały zaktualizowane.");
    //     } else {
    //       res.status(404).send("Nie znaleziono użytkownika o podanym ID.");
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     res.status(500).send("Wystąpił błąd podczas aktualizacji danych użytkownika.");
    //   }
    // });

// coaches
    // app.get("/getCoaches", async (req, res) => {
    //   const coachesData = await getData(coaches);
    //   res.send(coachesData);
    // });

    // app.post("/addCoach", async (req, res) => {
    //   const newCoach = req.body;
    //   const result = await coaches.insertOne(newCoach);
    //   res.send(result);
    // });

    // app.put("/changeCoach/:id", async (req,res)=>{
    //   const userId = req.params.id;
    //   const {haveCoach ,coachFullName } = req.body;
    //   try {
    //     const result = await users.updateOne(
    //       { userId: userId },
    //       { $set: { haveCoach ,coachFullName } }
    //     );
    
    //     if (result.modifiedCount === 1) {
    //       res.send("Dane użytkownika zostały zaktualizowane.");
    //     } else {
    //       res.status(404).send("Nie znaleziono użytkownika o podanym ID.");
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     res.status(500).send("Wystąpił błąd podczas aktualizacji danych użytkownika.");
    //   }
    // });
//user
   
  // })
  // .catch((err) => console.error("", err));

app.listen(port, () => {
  console.log("Aplikacja działa".bold.green);
  console.log("Aplikacja nasłuchuje na porcie: ".green + colors.bold.green(port));
  console.log(`Przykładowy endpoint: http://localhost:${port}/getBlog`);
});
});