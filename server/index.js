const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectToMongoDB = require("./config/connectToMongoDB");
const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const messageRoutes = require("./routes/message.routes");
const { app,server } = require("./socket/socket");


dotenv.config();

app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 5001;

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/messages", messageRoutes);

server.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});
