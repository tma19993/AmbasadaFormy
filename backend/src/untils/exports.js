const getPostsFromDB = require("./getPaginatedPosts.js");
const mapDataFromCollection = require("./mapDataFromCollection.js");
const catchError = require("./catchError.js");
const findUserName = require("./findUserName.js");
module.exports = {
    getPostsFromDB,
    mapDataFromCollection,
    catchError,
    findUserName
}