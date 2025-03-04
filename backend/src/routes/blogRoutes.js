const express = require("express");
const multer = require("multer");
const {
  mapDataFromCollection,
  getPostsFromDB,
  catchError,
  findUserName,
} = require("../untils/exports.js");
const { lastPostFinder } = require("./blogRoutesUntils/lastPost.js");
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

module.exports = function (blog, users) {
  router.get("/AmbasadaFormy/getBlog", async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 5;
    const title = req.query.title || "";
    const userName = req.query.userName || "";
    const blogData = await mapDataFromCollection(blog);
    if (title.length > 0 || userName.length > 0) {
      const filteredData = blogData.filter((post) => {
        const postTitle = String(post.title || "").toLowerCase();
        const postUserName = String(post.userName || "").toLowerCase();
        const matchesTitle = postTitle.includes(title.toLowerCase());
        const matchesUserName = postUserName.includes(userName.toLowerCase());
        return matchesTitle || matchesUserName;
      });
      res.status(200).json({
        posts: getPostsFromDB(page, size, filteredData.reverse()),
        totalRecords: filteredData.length,
      });
    } else {
      res.status(200).json({
        posts: getPostsFromDB(page, size, blogData.reverse()),
        totalRecords: blogData.length,
      });
    }
  });

  router.post(
    "/AmbasadaFormy/addPost",
    upload.single("photo"),
    async (req, res) => {
      let file = req.file;

      const newBlogPostRequest = req.body;
      const lastPost = await lastPostFinder(blog, res);
      const findedUserName = await findUserName(
        users,
        newBlogPostRequest.userId,
        res
      );
      const newPost = {
        userName: findedUserName,
        title: newBlogPostRequest.title,
        content: newBlogPostRequest.content,
        postId: lastPost[0].postId + 1,
        photo: file ? file.buffer.toString("base64") : "",
        createdAt: new Date(),
      };
      const [error, result] = await catchError(blog.insertOne(newPost));
      if (error) {
        res.status(500).send(error);
      } else {
        res.status(200).json(result);
      }
    }
  );

  router.get("/AmbasadaFormy/getPosts", async (req, res) => {
    const blogData = await mapDataFromCollection(blog);
    res.status(200).json(blogData);
  });

  return router;
};
