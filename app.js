const express = require("express");
const morgan = require("morgan");
const itemRoutes = require("./itemRoutes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use("/items", itemRoutes);

app.listen(3000, function () {
  console.log("Connected to port 3000");
});
