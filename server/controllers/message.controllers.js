const Conversation = require("../models/conversation.model");
const Message = require("../models/message.model");

exports.sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiver } = req.params;
    const sender = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [sender, receiver] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [sender, receiver],
      });
    }

    const newMessage = await Message.create({
      sender,
      receiver,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    await conversation.save();
    return res.status(200).json({
      status: true,
      message: "Message sent successfully",
      data: newMessage,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.getMessage = async (req, res) => {
  try {
    const { id: receiver } = req.params;
    const sender = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all: [sender, receiver] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    return res.status(200).json({
      status: true,
      message: "Messages found successfully",
      data: conversation?.messages,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
