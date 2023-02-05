const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//Import Routes
const itemsRoute = require("./routes/items");

//connect to db

const connectDatabase = () => {
  mongoose.connect(process.env.DB_CONNECTION, {}).then((con) => {
    console.log(`Mongo db connected with Host: ${con.connection.host}`);
  });
};
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`server started on PORT:${process.env.PORT}`);
});
app.use("/api", itemsRoute);