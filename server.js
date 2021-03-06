const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: false }));

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/users", require("./routes/api/users"));

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
