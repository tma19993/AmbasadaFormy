const { MongoClient } = require("mongodb");
const catchError = require("../untils/catchError");
const url = "mongodb://localhost:27017";
const dbName = "AmbasadaFormy";

async function connectToDatabase() {
    
      const [error,client] = await catchError(MongoClient.connect(url));
     if(error){
        console.error("Błąd połączenia MongoDB:".bold.red, err);
      return null;
     }
     else{
      const database = client.db(dbName);
      console.log(`Połączono się z MongoDB: ${dbName}`.bold.green);
     
      const collections = {
        blog: database.collection("blog"),
        gymPasses: database.collection("gym-passes"),
        users: database.collection("users")
      };
      return collections;
     }
      
    } 
    
  module.exports = { connectToDatabase };

