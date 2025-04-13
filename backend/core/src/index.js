const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Set up middleware
app.use(cors());
app.use(express.json());

// Define routes
app.get("/", (req, res) => {
  res.json({ message: "Maritime SAAS API is running" });
});

// Mock AIS data endpoint
app.get("/api/ais/vessels", (req, res) => {
  // Generate 5 random vessels
  const vessels = [];

  for (let i = 0; i < 5; i++) {
    vessels.push({
      mmsi: Math.floor(100000000 + Math.random() * 900000000).toString(),
      name: [
        "Maersk Explorer",
        "Sea Voyager",
        "Pacific Pearl",
        "Atlantic Pioneer",
        "Global Trader",
      ][Math.floor(Math.random() * 5)],
      lat: Math.random() * 180 - 90, // Random latitude between -90 and 90
      lng: Math.random() * 360 - 180, // Random longitude between -180 and 180
      course: Math.floor(Math.random() * 360),
      speed: Math.floor(Math.random() * 20),
      shipType: [70, 80, 60, 31, 30][Math.floor(Math.random() * 5)],
      timestamp: new Date().toISOString(),
    });
  }

  res.json({ vessels, timestamp: new Date().toISOString() });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
