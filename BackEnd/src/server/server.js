const express = require("express");
const bodyParser = require("body-parser");
const allowCors = require("./cors");
const queryParser = require("express-query-int");

const port = 9000;
const app = express();

app.use(express.json());
app.use(allowCors);
app.use(queryParser());

app.listen(port, () => {
  console.log("Server started on port " + port);
});

module.exports = app;
