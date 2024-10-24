const express = require("express");
const multer = require('multer');
const {
  mapDataFromCollection,
  getPostsFromDB,
  catchError,
  findUserName
} = require("../untils/exports.js");
const {
  lastPostFinder
} = require("./blogRoutesUntils/lastPost.js");
const e = require("express");
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

module.exports = function (blog, users) {
  router.get("/getBlog", async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 5;
    const title = req.query.title || '';
    const userName = req.query.userName || '';
    let posts;
      const blogData = await mapDataFromCollection(blog);
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
    } 
  );

  router.post("/addPost", upload.single('photo'), async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
      const newBlogPostRequest = req.body;
      const lastPost = await lastPostFinder(blog,res);
      const findedUserName =await findUserName(users,newBlogPostRequest.userId,res);
      const newPost = {
        userName: findedUserName,
        title: newBlogPostRequest.title,
        content: newBlogPostRequest.content,
        postId: lastPost[0].postId + 1,
        photo:  req.file.buffer.toString('base64')
      }
      const[error,result] = await catchError(blog.insertOne(newPost));
      if (error){
        res.status(500).send(error);
      }else{
        res.status(200).json(result);
      }
     
  });

  return router;
};