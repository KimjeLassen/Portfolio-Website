const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const http = require("http").createServer(app);
const User = require("./database").User;
const Project = require("./database").Project;

app.use("/", express.static(path.join(__dirname, "..", "client", "dist")));

// Shows the index page on /charts route
app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.get("/projects/create", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Shows the index page on / route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

http.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
app.use(express.json());
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/projects/create", (req, res) => {
  const { name, short_desc, long_desc, progress, link } = req.body;
  console.log(req.body)
  Project.create({
    name: name,
    short_desc: short_desc,
    long_desc: long_desc,
    progress: progress,
    link: link,
  })
    .then((project) => {
      res.send(project);
    })
    .catch((err) => {
      res.send(err);
    });
});
app.post("/users/create", (req, res) => {
  const { username, password } = req.body;
  User.create({
    username: username,
    password: password,
  })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/projects/get", (req, res) => {
  Project.findAll().then((projects) => {
    res.json(projects);
  });
});