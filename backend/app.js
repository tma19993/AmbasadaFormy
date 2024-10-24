const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const colors = require("colors");
const port = 5000;
const { connectToDatabase } = require("./src/db/mongoClient");
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE","PATCH"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

connectToDatabase().then((collections) => {
  const { blog, gymPasses, coaches, users } = collections;

const blogRoutes = require("./src/routes/blogRoutes")(blog, users);
const gymPassesRoutes = require("./src/routes/gymPassesRoutes")(gymPasses);
const userRoutes = require("./src/routes/userRoutes")(users);
const coachRoutes = require("./src/routes/coachRoutes")(coaches);

app.use(blogRoutes);
app.use(gymPassesRoutes);
app.use(userRoutes);
app.use(coachRoutes);

app.listen(port, () => {
  console.log("Aplikacja działa".bold.green);
  console.log("Aplikacja nasłuchuje na porcie: ".green + colors.bold.green(port));
  console.log(`Przykładowy endpoint: http://localhost:${port}/getBlog`);
});
});