const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "AmbasadaFormy";
let db;

async function connectToDatabase() {

    try {
      const client = await MongoClient.connect(url);
      const database = client.db(dbName);
      console.log(`Połączono się z MongoDB: ${dbName}`.bold.green);
  
     
      const collections = {
        blog: database.collection("blog"),
        gymPasses: database.collection("gym-passes"),
        coaches: database.collection("trainers"),
        users: database.collection("users"),
      };
      console.log("kolekcja dostępna");
      return collections;
      
    } catch (err) {
      console.error("Błąd połączenia MongoDB:".bold.red, err);
      return null;
    }
  }
  module.exports = { connectToDatabase };

