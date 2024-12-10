const express = require("express");
const app = express();

app.listen(3000);

app.set("view engine", "ejs");
app.set("views", "pages");

app.use(express.static("public"));

let blogs = [
  {
    title: "Mastering Design Patterns for Software Success",
    snippet: "Simplify complex problems with proven solutions.",
  },
  {
    title: "Software Reuse: Save Time, Code, and Resources",
    snippet: "Harness pre-built components for efficiency.",
  },
  {
    title: "Configuration Management Made Simple",
    snippet: "Track and manage software versions seamlessly.",
  },
  {
    title: "Host-Target Development: Optimize Your Workflow",
    snippet: "Separate development from execution effectively.",
  },
];

app.get("/", (req, res) => {
  res.render("index", { title: "HOME", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

app.get("/create", (req, res) => {
  res.render("create", { title: "create" });
});

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
