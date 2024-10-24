const catchError = require("../../untils/catchError");
module.exports = async function lastPostFinder(blogData, res) {
    const [error,data] = await catchError(blogData.find({}, {
        projection: {
          postId: 1,
          _id: 0
        }
      }).sort({
        postId: -1
      }).toArray());
      if(error){
        res.status(500).send(error);
        return;
      }
      else {
        return data;
      }
   
}