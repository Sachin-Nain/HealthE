const express = require("express");
const server = express();
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const modelLogin = require("./Model/userLogin");
const Login = modelLogin.Login;
const modelfeedback = require("./Model/userFeedback");
const Feedback = modelfeedback.Feedback;
const PORT = process.env.PORT || 8080;

dotenv.config();
const monogUrl = process.env.MONGO_URL;

server.use(express.json());
server.use(express.static(path.join(__dirname + "/build")));
server.use(cors());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(monogUrl);
  console.log("db connected");
}

server.get("/", (req, res) => {
  res.send("HealthE Website");
});

server.post("/", (req, res) => {
  const login = new Login(req.body);
  try {
    login.save();
    res.json(req.body);
  } catch (error) {
    console.log(error);
  }
});

server.get("/:email", async (req, res) => {
  let regexp = new RegExp("^" + req.params.email);
  let email = await Login.find({ email: regexp });
  res.send(email);
});

server.post("/contact", (req, res) => {
  const feedback = new Feedback(req.body);
  try {
    feedback.save();
  } catch (error) {
    console.log(error);
  }
});

server.listen(PORT, () => {
  console.log("server started");
});