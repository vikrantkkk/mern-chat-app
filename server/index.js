const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectToMongoDB = require("./config/connectToMongoDB");
const userRoutes = require("./routes/user.routes");

const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 5001;

app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${port}`);
});
