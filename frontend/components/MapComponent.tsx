"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { IconOptions } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Vessel } from "../types/ais";
import { fetchAisData } from "../services/aisService";

// Data URL for ship icon since we're not using an actual PNG file for this demo
const shipIconDataUrl =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDY2Q0MiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cG9seWdvbiBwb2ludHM9IjEyIDIgNCA3IDQgMTcgMTIgMjIgMjAgMTcgMjAgNyIgZmlsbD0iIzY2Q0NGRiIgc3Ryb2tlPSIjMDA2NkNDIiAvPjxsaW5lIHgxPSIxMiIgeTE9IjIiIHgyPSIxMiIgeTI9IjIyIiBzdHJva2U9IiMwMDY2Q0MiIC8+PGxpbmUgeDE9IjQiIHkxPSIxMiIgeDI9IjIwIiB5Mj0iMTIiIHN0cm9rZT0iIzAwNjZDQyIgLz48L3N2Zz4=";

// Fix for Leaflet marker icons in Next.js
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const shipIcon = (shipType: number) => {
  // In a real app, we would have different icons for different ship types
  const iconOptions: IconOptions = {
    iconUrl: shipIconDataUrl,
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  };

  // Different icons could be returned based on shipType
  return new L.Icon(iconOptions);
};

const MapComponent = () => {
  const [vessels, setVessels] = useState<Vessel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadAisData = async () => {
      try {
        setLoading(true);
        const data = await fetchAisData();
        setVessels(data.vessels);
        setError(null);
      } catch (err) {
        setError("Failed to load AIS data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadAisData();

    // Set up refresh interval - refresh every 30 seconds
    const intervalId = setInterval(loadAisData, 30000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Default map center (Atlantic Ocean)
  const defaultCenter = [40.0, -30.0];
  const defaultZoom = 3;

  if (loading && vessels.length === 0) {
    return (
      <div className="flex justify-center items-center h-96">
        Loading vessel data...
      </div>
    );
  }

  if (error && vessels.length === 0) {
    return (
      <div className="flex justify-center items-center h-96 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={defaultCenter as [number, number]}
        zoom={defaultZoom}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {vessels.map((vessel) => (
          <Marker
            key={vessel.mmsi}
            position={[vessel.lat, vessel.lng]}
            icon={shipIcon(vessel.shipType)}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg">{vessel.name}</h3>
                <p>MMSI: {vessel.mmsi}</p>
                <p>Speed: {vessel.speed} knots</p>
                <p>Course: {vessel.course}°</p>
                {vessel.destination && <p>Destination: {vessel.destination}</p>}
                <button
                  className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-sm"
                  onClick={() =>
                    window.open(`/vessel/${vessel.mmsi}`, "_blank")
                  }
                >
                  View Details
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
