const Message = require("../model/Message");

// GET Message
const getMessage = async (req, res) => {
  const message = await Message.find();
  try {
    res.json(message);
  } catch (error) {
    res.status(404);
  }
};
const getMessageById = async (req, res) => {
  const message = await Message.findById(req.params.id);
  try {
    res.json(message);
  } catch (error) {
    res.status(400);
  }
};
// const getMessageSearch = async (req, res) => {
//   const message = await Message.find()
// }

// POST Message
const postMessage = async (req, res) => {
  const colors = [
    ["#DE7119"],
    ["#57837B"],
    ["#39A6A3"],
    ["#7FCD91"],
    ["#F55C47"],
    ["#4AA96C"],
    ["#FFC93C"],
    ["#8CBA51"],
    ["#FF6F5E"],
    ["#61234E"],
    ["#333C83"],
    ["#3A3845"],
    ["#F0A500"],
    ["#FFCC1D"],
  ];
  const random = Math.round(Math.random() * colors.length);
  const randomColor = `${colors[random]}`;
  // console.log(randomColor);

  const body = req.body;
  const date = new Date();
  const time = date.toLocaleTimeString();
  const addMessage = {
    message: body.message,
    author: body.author,
    love: 0,
    cry: 0,
    like: 0,
    happy: 0,
    angry: 0,
    bgColor: randomColor,
    time: time,
  };
  const message = await new Message(addMessage);
  try {
    await message.save();
    res.status(200).json(message);
  } catch (error) {
    res.status(400);
  }
};

// PUT/GET
// love
const addLove = async (req, res) => {
  const message = await Message.findById(req.params.id);
  message.love = message.love + 1;
  try {
    await message.save();
    res.status(200).json(message);
  } catch (error) {
    res.status(400);
  }
};
// cry
const addCry = async (req, res) => {
  const message = await Message.findById(req.params.id);
  message.cry = message.cry + 1;
  try {
    await message.save();
    res.status(200).json(message);
  } catch (error) {
    res.status(400);
  }
};
// like
const addLike = async (req, res) => {
  const message = await Message.findById(req.params.id);
  message.like = message.like + 1;
  message.love = message.love;
  try {
    await message.save();
    res.status(200).json(message);
  } catch (error) {
    res.status(400);
  }
};
// wow
const addHappy = async (req, res) => {
  const message = await Message.findById(req.params.id);
  message.happy = message.happy + 1;
  try {
    await message.save();
    res.status(200).json(message);
  } catch (error) {
    res.status(400);
  }
};
// angry
const addAngry = async (req, res) => {
  const message = await Message.findById(req.params.id);
  message.angry = message.angry + 1;
  try {
    await message.save();
    res.status(200).json(message);
  } catch (error) {
    res.status(400);
  }
};

module.exports = {
  getMessage,
  getMessageById,
  postMessage,
  addAngry,
  addCry,
  addLike,
  addLove,
  addHappy,
};
