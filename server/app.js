require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
require("./db/conn");
const router = require("./Routes/router");
const PORT = 4002 || process.env.PORT;

//middleware
app.use(express.json());
// app.use(cors());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(router);

app.get("/", (req, res) => {
  res.status(200).json("server started");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT : ${PORT}`);
});
