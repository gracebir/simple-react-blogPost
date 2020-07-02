const express = require("express");
const blogRouter = express.Router();
const db = require("../server/index");

blogRouter.get("/", async (req, res) => {
  const rqt = "select * from v_blog";
  await db.query(rqt, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

blogRouter.get("/:id", async (req, res) => {
  const rqt = "select * from v_blog where id='" + req.params.id + "'";
  await db.query(rqt, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

blogRouter.post("/post", (req, res) => {
  let rqt = "call addPost('" + req.body.title + "','" + req.body.content + "')";
  db.query(rqt, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

blogRouter.put("/put/:id", async (req, res) => {
  let rqt =
    "call upPost('" +
    req.params.id +
    "','" +
    req.body.title +
    "','" +
    req.body.content +
    "')";
  await db.query(rqt, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

blogRouter.delete("/delete/:id", async (req, res) => {
  let rqt = "delete from tblogpost where id='" + req.params.id + "'";
  await db.query(rqt, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = blogRouter;
