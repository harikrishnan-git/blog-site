const express = require("express");
const app = express();
const router = require("./routes/blogRoute");
const mongoose = require("mongoose");
require("dotenv").config();

const dbURL = process.env.MONGO_URI;
mongoose
  .connect(dbURL)
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", "pages");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

app.get("/create", (req, res) => {
  res.render("create", { title: "CREATE" });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.use("/blogs", router);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
