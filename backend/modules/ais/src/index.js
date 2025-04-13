const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Set up middleware
app.use(cors());
app.use(express.json());

// Define routes
app.get("/", (req, res) => {
  res.json({ message: "Maritime SAAS AIS Service is running" });
});

// Mock AIS data endpoint with more realistic vessel generation
app.get("/api/vessels", async (req, res) => {
  try {
    // In a real implementation, this would connect to an actual AIS data provider
    // For now, we'll generate mock data

    // Base positions around major ports (lat, lng pairs)
    const basePositions = [
      { name: "Rotterdam", coords: [51.95, 4.15] },
      { name: "Singapore", coords: [1.29, 103.85] },
      { name: "Shanghai", coords: [31.23, 121.52] },
      { name: "Los Angeles", coords: [33.73, -118.26] },
      { name: "New York", coords: [40.66, -74.0] },
    ];

    // Ship types
    const shipTypes = [70, 80, 60, 31, 30]; // Cargo, Tanker, Passenger, Tug, Fishing

    // Vessel names
    const vesselNames = [
      "Maersk Explorer",
      "Sea Voyager",
      "Pacific Pearl",
      "Atlantic Pioneer",
      "Global Trader",
      "Ocean Queen",
      "Star Carrier",
      "Mediterranean Spirit",
      "Nordic Sailor",
      "Caribbean Dream",
      "African Pride",
      "Asian Giant",
    ];

    // Generate vessels
    const vessels = [];
    const count = 25; // Number of vessels to generate

    for (let i = 0; i < count; i++) {
      // Select a random base position
      const basePosition =
        basePositions[Math.floor(Math.random() * basePositions.length)];

      // Generate a position with some randomness around the base
      const latVariation = (Math.random() - 0.5) * 0.5; // +/- 0.25 degrees
      const lngVariation = (Math.random() - 0.5) * 0.5; // +/- 0.25 degrees

      vessels.push({
        mmsi: Math.floor(100000000 + Math.random() * 900000000).toString(),
        name: vesselNames[Math.floor(Math.random() * vesselNames.length)],
        lat: basePosition.coords[0] + latVariation,
        lng: basePosition.coords[1] + lngVariation,
        course: Math.floor(Math.random() * 360), // 0-359 degrees
        speed: Math.floor(Math.random() * 20), // 0-19 knots
        heading: Math.floor(Math.random() * 360), // 0-359 degrees
        shipType: shipTypes[Math.floor(Math.random() * shipTypes.length)],
        timestamp: new Date().toISOString(),
        status: Math.floor(Math.random() * 8), // Random status
        destination:
          basePositions[Math.floor(Math.random() * basePositions.length)].name,
      });
    }

    res.json({
      vessels,
      timestamp: new Date().toISOString(),
      source: "mock-data",
    });
  } catch (error) {
    console.error("Error fetching AIS data:", error);
    res.status(500).json({ error: "Failed to fetch AIS data" });
  }
});

// Get vessel details by MMSI
app.get("/api/vessels/:mmsi", (req, res) => {
  const { mmsi } = req.params;

  // In a real implementation, this would look up the vessel in a database
  // For now, we'll generate mock data

  const vessel = {
    mmsi,
    name: ["Maersk Explorer", "Sea Voyager", "Pacific Pearl"][
      Math.floor(Math.random() * 3)
    ],
    lat: Math.random() * 180 - 90,
    lng: Math.random() * 360 - 180,
    course: Math.floor(Math.random() * 360),
    speed: Math.floor(Math.random() * 20),
    shipType: [70, 80, 60][Math.floor(Math.random() * 3)],
    timestamp: new Date().toISOString(),
    destination: ["Rotterdam", "Singapore", "Shanghai"][
      Math.floor(Math.random() * 3)
    ],
    callSign: `${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${Math.floor(
      1000 + Math.random() * 9000
    )}`,
    imo: `IMO${Math.floor(1000000 + Math.random() * 9000000)}`,
    length: 100 + Math.floor(Math.random() * 200),
    width: 15 + Math.floor(Math.random() * 25),
  };

  res.json(vessel);
});

// Start server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`AIS Service running on port ${PORT}`);
});
