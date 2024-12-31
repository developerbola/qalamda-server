const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port: ${process.env.PORT}`);
});
