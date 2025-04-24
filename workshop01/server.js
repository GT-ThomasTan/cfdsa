import express from "express";
import { engine } from "express-handlebars";
import moment from "moment";

import * as path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/healthecheck", (req, res) => {
  const response = {
    requestId: requestId,
    status: "success",
    timestamp: moment().format(),
    version: config.master.version,
    data: {
      uptime: process.uptime(),
      memory_usage: process.memoryUsage(),
    },
  };
  res.status(200).json(response);
});

app.listen(3000, () => {
  console.log("express-handlebars example server listening on: 3000");
});
