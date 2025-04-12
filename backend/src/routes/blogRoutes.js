const express = require("express");
const {
  mapDataFromCollection,
  catchError,
  findUserName,
  lastPostFinder,
} = require("../untils/exports.js");
const { ObjectId } = require("mongodb");
const router = express.Router();
const multer = require("multer");

const upload = multer({ storage: multer.memoryStorage() });

module.exports = function (blog, users) {
  router.get("/AmbasadaFormy/searchPosts", async (req, res) => {
    const title = req.query.title || "";
    const userName = req.query.userName || "";
    const blogData = await mapDataFromCollection(blog);
    if (blogData.length == 0) {
      res.status(404).send();
      return;
    }
    if (title.length > 0 || userName.length > 0) {
      const filteredData = blogData.filter((post) => {
        const postTitle = String(post.title || "").toLowerCase();
        const postUserName = String(post.userName || "").toLowerCase();
        const matchesTitle = postTitle.includes(title.toLowerCase());
        const matchesUserName = postUserName.includes(userName.toLowerCase());
        return matchesTitle || matchesUserName;
      });
      res.status(200).json({
        posts: filteredData,
        totalRecords: filteredData.length,
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
        newBlogPostRequest._id,
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
    const length = Number(req.query.length) || 0;
    const [error, data] = await catchError(
      blog.find().sort({ _id: -1 }).toArray()
    );
    const posts =
      !!length && length <= data.length ? data.slice(0, length) : data;
    const responseData = {
      posts: posts,
      totalRecords: data.length,
    };
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).json(responseData);
    }
  });

  router.delete("/AmbasadaFormy/deletePost/:id", async (req, res) => {
    const postId = req.params.id;
    console.log(postId);
    const [error, result] = await catchError(
      blog.deleteOne({
        _id:  new ObjectId(postId),
      })
    );
    if(error){
      res.status(500).send(error);
    }
    else{
      res.status(200).json(result);
    }
  });

  return router;
};
