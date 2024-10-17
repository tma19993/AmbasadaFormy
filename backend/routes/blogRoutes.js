const express = require("express");
const {getData, getPostsFromDB} = require("../utils");
const router = express.Router();

module.exports = function (blog) {
    router.get("/getBlog", async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const size = parseInt(req.query.size) || 5;
       try{
        const blogData = await getData(blog);
        const posts = getPostsFromDB(page, size, blogData);
        res.status(200).json({posts: posts, totalRecords: blogData.length});
       }catch(err){
        console.log(err);
        res.status(500).send(err)
       }
    });

    router.post("/addBlog", async (req, res) => {
        const newBlogPost = req.body;
        const result = await blog.insertOne(newBlogPost);
        res.status(200).json(result);
    });

    return router;
};