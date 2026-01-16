const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();

// security basics
app.use(cors()); // configure origins in production
app.use(express.json({ limit: "10kb" }));

// routes
app.use("/api/auth", require("./routes/authRoute"));

app.get("/", (req, res) => res.send("TeamUP credentials server"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
