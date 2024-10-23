const express = require("express");
const {
  ObjectId
} = require("mongodb");
const {
  getData,
  getPostsFromDB
} = require("../utils");
const router = express.Router();

module.exports = function (blog, user) {
  router.get("/getBlog", async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 5;
    const title = req.query.title || '';
    const userName = req.query.userName || '';
    let posts;
    try {
      const blogData = await getData(blog);

      if (title.length > 0 || userName.length > 0) {
        const filteredData = blogData.filter(post => {
          const postTitle = String(post.title || '').toLowerCase();
          const postUserName = String(post.userName || '').toLowerCase();
          const matchesTitle = postTitle.includes(title.toLowerCase());
          const matchesUserName = postUserName.includes(userName.toLowerCase());
          return matchesTitle && matchesUserName;
        });
        posts = getPostsFromDB(page, size, filteredData.reverse());
      } else {
        posts = getPostsFromDB(page, size, blogData.reverse());
      }


      res.status(200).json({
        posts: posts,
        totalRecords: blogData.length
      });
    } catch (err) {
      console.log(err);
      res.status(500).send(err)
    }
  });

  router.post("/addPost", async (req, res) => {
    try {
      const newBlogPostRequest = req.body;
      const lastPost = await blog.find({}, {
        projection: {
          postId: 1,
          _id: 0
        }
      }).sort({
        postId: -1
      }).toArray();
      const findedUserNameObject = await user.findOne({
        _id: new ObjectId(newBlogPostRequest.userId)
      }, {
        projection: {
          login: 1,
          _id: 0
        }
      })
      const newPost = {
        userName: findedUserNameObject.login,
        title: newBlogPostRequest.title,
        content: newBlogPostRequest.content,
        postId: lastPost[0].postId + 1
      }
      const result = await blog.insertOne(newPost);
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  });

  return router;
};