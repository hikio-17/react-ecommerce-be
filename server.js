const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
// const path = require("path");

const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const fs = require("fs");

// cors options
const corsOptions = {
  origin: "http://localhost:3000",
  // origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

// app
const app = express();

// db
mongoose
  .connect('mongodb+srv://hikio010217:hikio010217@project.b4wyhrv.mongodb.net/?retryWrites=true&w=majority', {
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERROR =>", err));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors(corsOptions));

// route middlewares
fs.readdirSync("./routes").map((r) =>
  app.use("/api", require("./routes/" + r))
);

// port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
