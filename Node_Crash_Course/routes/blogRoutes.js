const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.get(		"/",		blogCongroller.blog_index);
router.post(	"/",		blogController.blog_create_post);
router.get(		"/create",	blogController.blog_create_get);
router.get(		"/:id",		blogController.blog_details);
router.delete(	"/:id",		blogCongroller.blog_delete);

module.exports = router;