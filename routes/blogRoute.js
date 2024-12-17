const express = require("express");
const router = express.Router();
const blogController = require("../controller/blogController");

router.get("/", blogController.blog_home);

router.post("/", blogController.blog_add);

router.get("/:id", blogController.blog_id);

router.delete("/:id", blogController.blog_delete);

module.exports = router;
