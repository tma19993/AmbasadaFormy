const catchError = require("./catchError");

module.exports = async function mapDataFromCollection(collection) {
  const [ error, data ] = await catchError(collection.find().toArray());
 return error ? error: data;
}