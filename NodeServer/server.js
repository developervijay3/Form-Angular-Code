import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const cors = require('cors')
import router from "./routes/routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
mongoose.connect("mongodb://localhost:27017/angularuser");

const db = mongoose.connection;
db.on("error", () => {
  console.log("---FAILED to connect to mongoose");
});
db.once("open", () => {
  console.log("+++Connected to mongoose");
});

app.use("/", router);

app.listen(3002, () => {
  console.log("+++Express Server is Running!!!");
});
