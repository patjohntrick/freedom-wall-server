const express = require("express");
const cors = require("cors");
const app = express();

// MongoDB
const {
  getMessage,
  getMessageById,
  postMessage,
  addAngry,
  addCry,
  addLike,
  addLove,
  addHappy,
} = require("./controllers/Methods");

// Middleware
app.use(express.json());
app.use(cors());

// PORT
const PORT = process.env.PORT || 5000;

// GET
app.get("/messages", getMessage);
app.get("/messages/:id", getMessageById);

// POST
app.post("/messages/new", postMessage);

// GET/POST Reactions
app.get("/messages/like/:id", addLike);
app.get("/messages/love/:id", addLove);
app.get("/messages/happy/:id", addHappy);
app.get("/messages/cry/:id", addCry);
app.get("/messages/angry/:id", addAngry);

app.listen(PORT, () => console.log(`App is listening to the port ${PORT}`));
