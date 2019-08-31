const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: false }));

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => res.send("API Running"));

// Define Routes

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
