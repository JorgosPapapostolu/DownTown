const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { ExpressPeerServer } = require("peer");
const { errorHandler } = require("./middlewares/errorHandler");
const cors = require("cors");
const client = require("./db/client");
const router = require("./routes/user");

const peerServer = ExpressPeerServer(server, {
  path: "/",
  proxied: true,
  secure: true,
});

const MeetingRouter = require("./routes/meetings");

client.connect((err) => {
  // Hier überprüfen wir ob wir eine Verbindung zur DB haben
  if (err) {
    console.log(err);
  } else {
    console.log("Data logging initiated!");
  }
});

app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(peerServer);
app.get("/", (req, res) => {
  console.log("generic GET command working");
});

app.use("/meeting", MeetingRouter);
app.use("/user", router);

app.use(errorHandler);

module.exports = server;
