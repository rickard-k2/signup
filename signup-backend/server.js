const routes = require("./routes");
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const PORT = 4000;
const app = express();
dotenv.config();
mongoose.connect(
  process.env.DATABASE_ACCESS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Database connected.");
  }
);

app.use(express.json());
app.use(cors());
app.use("/app", routes);
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT + ".");
});
