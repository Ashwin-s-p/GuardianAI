import { Shield, Camera, Circle, Play } from "lucide-react";

export default function CCTVMonitor() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR (same theme as Dashboard) */}
      <div className="bg-white border-b px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 text-white p-2 rounded-lg">
            <Shield size={20} />
          </div>
          <div>
            <h1 className="font-semibold text-lg text-gray-800">
              Guardian AI
            </h1>
            <p className="text-sm text-gray-500">
              Missing Person Surveillance
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-gray-600">
          <span className="cursor-pointer hover:text-blue-600">Dashboard</span>
          <span className="text-blue-600 font-medium cursor-pointer">
            CCTV Monitor
          </span>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div className="px-10 py-8">

        {/* PAGE TITLE */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            CCTV Surveillance Monitor
          </h2>
          <p className="text-sm text-gray-500">
            Live feed capture & AI face matching system
          </p>
        </div>

        {/* CAMERA NETWORK */}
        <div className="bg-white rounded-2xl shadow-sm border p-6 mb-8">
          <h3 className="text-sm font-semibold text-gray-600 mb-4">
            CAMERA NETWORK
          </h3>

          <div className="grid grid-cols-3 gap-4">

            <CameraCard name="CAM01" location="Bus Stop - Sector 7" online />
            <CameraCard name="CAM02" location="Railway Gate - Central" online />
            <CameraCard name="CAM03" location="Mall Entrance - West Wing" />
            <CameraCard name="CAM04" location="Highway Exit - Route 9" online />
            <CameraCard name="CAM05" location="School Zone - Block C" online />
            <CameraCard name="CAM06" location="Park Entrance - North" />

          </div>
        </div>

        {/* MAIN PANELS */}
        <div className="grid grid-cols-2 gap-8">

          {/* VIDEO FEED */}
          <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            <div className="px-6 py-4 border-b text-sm font-medium text-gray-600">
              CAM01 — Bus Stop - Sector 7
            </div>

            <div className="h-80 bg-gray-200 flex items-center justify-center text-gray-400">
              No Live Feed
            </div>

            <div className="p-4 border-t">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm flex items-center justify-center gap-2">
                <Play size={16} />
                Start Camera
              </button>
            </div>
          </div>

          {/* MATCH RESULTS */}
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <h3 className="text-sm font-semibold text-gray-600 mb-4">
              MATCH RESULTS
            </h3>

            <div className="h-80 flex items-center justify-center text-gray-400 text-sm">
              Capture a frame to begin analysis
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


/* CAMERA CARD COMPONENT */

function CameraCard({ name, location, online }: any) {
  return (
    <div className={`rounded-xl border p-4 flex justify-between items-start transition
      ${online ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-200"}
    `}>
      <div>
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-xs text-gray-500">{location}</p>
      </div>

      <Circle
        size={10}
        className={online ? "text-green-500 fill-green-500" : "text-red-500 fill-red-500"}
      />
    </div>
  );
}