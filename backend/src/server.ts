// src/server.ts
import * as express from "express";
import * as socketio from "socket.io";

const app: express.Application = express();
const port: number = 3000;

app.set("port", process.env.PORT || port);

const http = require("http").Server(app);

// simple '/' endpoint sending a Hello World response
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("hello world");
});
