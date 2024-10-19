const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "AmbasadaFormy";

async function connectToDatabase() {
    try {
      const client = await MongoClient.connect(url);
      const database = client.db(dbName);
      console.log(`Połączono się z MongoDB: ${dbName}`.bold.green);
     
      const collections = {
        blog: database.collection("blog"),
        gymPasses: database.collection("gym-passes"),
        coaches: database.collection("users"),
        users: database.collection("users"),
      };
      return collections;
      
    } catch (err) {
      console.error("Błąd połączenia MongoDB:".bold.red, err);
      return null;
    }
  }
  module.exports = { connectToDatabase };

