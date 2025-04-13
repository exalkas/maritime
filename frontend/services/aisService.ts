import { Vessel, AisApiResponse } from "../types/ais";
import axios from "axios";

// Mock vessel names for our demo
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

// Ship types to use in our mock data
const shipTypes = [70, 80, 60, 31, 30]; // Cargo, Tanker, Passenger, Tug, Fishing

// Base positions around major ports (lat, lng pairs)
const basePositions = [
  { name: "Rotterdam", coords: [51.95, 4.15] },
  { name: "Singapore", coords: [1.29, 103.85] },
  { name: "Shanghai", coords: [31.23, 121.52] },
  { name: "Los Angeles", coords: [33.73, -118.26] },
  { name: "New York", coords: [40.66, -74.0] },
];

// API URL (in production, this would come from environment variables)
const API_URL = "http://localhost:3002";

// Fetch AIS data from the backend API
export const fetchAisData = async (): Promise<AisApiResponse> => {
  try {
    const response = await axios.get(`${API_URL}/api/vessels`);
    return response.data;
  } catch (error) {
    console.error("Error fetching AIS data:", error);
    // Fallback to mock data in case the API is unavailable
    return generateMockData();
  }
};

// Get vessel details by MMSI
export const getVesselDetails = async (
  mmsi: string
): Promise<Vessel | null> => {
  try {
    const response = await axios.get(`${API_URL}/api/vessels/${mmsi}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching vessel details for MMSI ${mmsi}:`, error);
    // Fallback to mock data
    return generateMockVessel(mmsi);
  }
};

// Mock data generation functions (used as fallback if API is unavailable)
const generateMockData = (): AisApiResponse => {
  return {
    vessels: Array.from({ length: 25 }, generateMockVessel),
    timestamp: new Date().toISOString(),
  };
};

const generateMockVessel = (mmsi?: string): Vessel => {
  const vesselNames = [
    "Maersk Explorer",
    "Sea Voyager",
    "Pacific Pearl",
    "Atlantic Pioneer",
    "Global Trader",
    "Ocean Queen",
    "Star Carrier",
    "Mediterranean Spirit",
  ];

  const basePositions = [
    { name: "Rotterdam", coords: [51.95, 4.15] },
    { name: "Singapore", coords: [1.29, 103.85] },
    { name: "Shanghai", coords: [31.23, 121.52] },
  ];

  const basePosition =
    basePositions[Math.floor(Math.random() * basePositions.length)];
  const latVariation = (Math.random() - 0.5) * 0.5;
  const lngVariation = (Math.random() - 0.5) * 0.5;

  return {
    mmsi: mmsi || Math.floor(100000000 + Math.random() * 900000000).toString(),
    name: vesselNames[Math.floor(Math.random() * vesselNames.length)],
    lat: basePosition.coords[0] + latVariation,
    lng: basePosition.coords[1] + lngVariation,
    course: Math.floor(Math.random() * 360),
    speed: Math.floor(Math.random() * 20),
    heading: Math.floor(Math.random() * 360),
    shipType: [70, 80, 60][Math.floor(Math.random() * 3)],
    timestamp: new Date().toISOString(),
    status: Math.floor(Math.random() * 8),
    destination:
      basePositions[Math.floor(Math.random() * basePositions.length)].name,
  };
};
