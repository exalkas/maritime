import MapWrapper from "../components/MapWrapper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4 md:p-8">
      <div className="z-10 w-full max-w-7xl text-sm">
        <h1 className="text-3xl font-bold mb-6">Maritime Dashboard</h1>

        <div className="grid grid-cols-1 gap-6">
          <div className="p-4 bg-white rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">AIS Ship Tracking</h2>
            <MapWrapper />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="font-semibold mb-2">Active Vessels</h3>
              <p className="text-3xl font-bold text-blue-600">25</p>
              <p className="text-sm text-gray-600 mt-1">
                Tracking in real-time
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="font-semibold mb-2">Ports Monitored</h3>
              <p className="text-3xl font-bold text-green-600">5</p>
              <p className="text-sm text-gray-600 mt-1">Major shipping hubs</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-md">
              <h3 className="font-semibold mb-2">System Status</h3>
              <p className="text-xl font-bold text-green-600">Online</p>
              <p className="text-sm text-gray-600 mt-1">
                All systems operational
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
