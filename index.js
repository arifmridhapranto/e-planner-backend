const express = require("express");
const app = express();
const port = 7000;

app.get("/", (req, res) => {
  res.send("Hello Pranto Mridha!");
});

app.listen(port, () => {
  console.log(`Pranto Mridha is running on port: ${port}`);
});
