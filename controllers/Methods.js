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

// POST Message
const postMessage = async (req, res) => {
  const body = req.body;
  const date = new Date();
  const time = date.toLocaleTimeString();
  const addMessage = {
    message: body.message,
    author: body.author,
    love: 0,
    cry: 0,
    like: 0,
    wow: 0,
    angry: 0,
    isHover: false,
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
const addWow = async (req, res) => {
  const message = await Message.findById(req.params.id);
  message.wow = message.wow + 1;
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
  addWow,
};
