const catchError = require("./catchError");
const { ObjectId } = require("mongodb");
module.exports = async function findUserName(users, userId,res) {
    const [error, data] = await catchError(users.findOne({
        _id: new ObjectId(userId)
      }, {
        projection: {
          login: 1,
          _id: 0
        }
      }))
      if(error){
        res.status(500).send(error);
        return;
      }
      else{
        return data.login;
      }
}

