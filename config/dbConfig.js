const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL);
const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("mongoose  connection is successful ");
});

connection.on("error", (error) => {
  console.log("error in mongoose", error);
});

module.exports = mongoose;
