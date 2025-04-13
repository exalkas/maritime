"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamically import the MapComponent with no SSR
const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
      <p className="text-lg text-gray-500">Loading map...</p>
    </div>
  ),
});

export default function MapWrapper() {
  return (
    <Suspense
      fallback={
        <div className="h-[600px] w-full bg-gray-100 flex items-center justify-center">
          Loading map...
        </div>
      }
    >
      <MapComponent />
    </Suspense>
  );
}
