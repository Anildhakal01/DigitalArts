const express = require("express");
const router = express.Router();
const { registerUser, userLogin } = require("./controllers/userController");

router.post("/registerUser", registerUser);
router.post("/login", userLogin);
router.get("/", (req, res) => {
  res.render("pages/index");
});
router.get("/about-us", (req, res) => {
  res.render("pages/about-us");
});
router.get("/courses", (req, res) => {
  res.render("pages/courses");
});
router.get("/upcomingEvents", (req, res) => {
  res.render("pages/upcomingEvents");
});
router.get("/recentEvents", (req, res) => {
  res.render("pages/recentEvents");
});
router.get("/blogs", (req, res) => {
  res.render("pages/blogs");
});
router.get("/contact-us", (req, res) => {
  res.render("pages/contact-us");
});
router.get("/artsGallery", (req, res) => {
  res.render("pages/artsGallery");
});
router.get("/blog-detail", (req, res) => {
  res.render("pages/blog-detail");
});
router.get("/event-detail", (req, res) => {
  res.render("pages/event-detail");
});
router.get("/course-detail", (req, res) => {
  res.render("pages/course-detail");
});
module.exports = router;
