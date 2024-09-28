const express = require("express");
const dotenv = require("dotenv");
const connectToMongoDB = require("./config/db/connectToDb");

const app = express();

dotenv.config();

app.use(express.json());

const port = process.env.PORT || 5001;

app.listen(port, () => {
  connectToMongoDB()
  console.log(`Server is running on port ${port}`);
});
