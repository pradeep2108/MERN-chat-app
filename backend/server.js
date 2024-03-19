const express = require("express");
const dotenv = require("dotenv");
const port = process.env.PORT || 6000;
const { chats } = require("../backend/data/dummydata");
const app = express();
dotenv.config();

app.get("/api/chat/data", (req, res) => {
  res.status(200).json(chats);
});

app.listen(port, () =>
  console.log(`server started successfully on port ${port}`)
);
