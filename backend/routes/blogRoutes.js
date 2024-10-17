const express = require("express");
const {getData} = require("../utils");
const router = express.Router();

module.exports = function (blog) {
    router.get("/getBlog", async (req, res) => {
       try{
        const blogData = await getData(blog);
        res.status(200).json(blogData);
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