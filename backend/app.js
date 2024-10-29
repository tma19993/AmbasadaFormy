const colors = require("colors");
const express = require("express");
const { connectToDatabase } = require("./src/db/mongoClient");

const app = express();
const port = 5000;

const appConfig = require("./src/configs/appConfig")();
app.use(appConfig)

connectToDatabase().then((collections) => {
  const { blog, gymPasses, users,requests } = collections;

const blogRoutes = require("./src/routes/blogRoutes")(blog, users);
const gymPassesRoutes = require("./src/routes/gymPassesRoutes")(gymPasses);
const userRoutes = require("./src/routes/userRoutes")(users);
const coachRoutes = require("./src/routes/coachRoutes")(users);
const requestsRoutes = require("./src/routes/requestsRoutes")(requests);

app.use(blogRoutes);
app.use(gymPassesRoutes);
app.use(userRoutes);
app.use(coachRoutes);
app.use(requestsRoutes);

app.listen(port, () => {
  console.log("Aplikacja nasłuchuje".bold.green);
  console.log("Przykładowy endpoint: ".green + `http://localhost:${port}/getBlog`);
});
});