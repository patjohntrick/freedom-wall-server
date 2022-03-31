const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log(`Connected to DB`));

const date = new Date();
const time = date.toLocaleTimeString();
const messageSchema = mongoose.Schema(
  {
    message: {
      required: true,
      type: String,
    },
    author: {
      required: true,
      type: String,
    },
    like: Number,
    love: Number,
    happy: Number,
    cry: Number,
    angry: Number,
    bgColor: String,
    time: {
      type: String,
      immutable: false,
    },
    createdAt: String,
    updatedAt: String,
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" } }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
