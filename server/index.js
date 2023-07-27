const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const http = require("http").createServer(app);
const User = require("./database").User;
const Project = require("./database").Project;
const bcrypt = require("bcrypt");

app.use("/", express.static(path.join(__dirname, "..", "client", "dist")));

// Shows the index page on /charts route
app.get("/projekter", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.get("/projekter/create", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// Shows the index page on / route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});
app.get("/current", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

http.listen(5000, () => {
  console.log("Example app listening on port 5000!");
});
app.use(express.json());
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/projekter/create", (req, res) => {
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
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt).then(hash => {
      User.create({
        username: username,
        password: hash,
      }).then((user) => {
        res.send(user);
      }).catch((err) => {
        res.send(err);
    });
    })    
});
});

function comparePasswords(password, hash) {
  return bcrypt.compare(password, hash);
}
app.post("/users/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({
    where: {
      username: username,
    },
  }).then((user) => {
    if (user) {
      comparePasswords(password, user.password).then((result) => {
        if (result) {
          console.log("Password is correct");
          res.status(200).send("Logged in");
        } else {
          console.log("Password is incorrect");
          res.status(400).send("Unauthorized: Password is incorrect");
        }
      });
    } else {
      console.log("User not found");
      res.status(400).send("User not found");
    }
  });
});

app.get("/projekter/get", (req, res) => {
  Project.findAll().then((projects) => {
    res.json(projects);
  });
});