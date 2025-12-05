import Layout from "@/components/layout/Layout";
import { MOCK_JOBS } from "@/lib/mockData";
import { MapPin, Navigation } from "lucide-react";
import mapBg from "@assets/generated_images/stylized_city_map_background_for_dashboard.png";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function MapPage() {
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);
  const selectedJob = MOCK_JOBS.find(j => j.id === selectedJobId);

  return (
    <Layout>
      <div className="relative h-[calc(100vh-80px)] w-full bg-slate-100 overflow-hidden">
        {/* Map Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${mapBg})` }}
        />
        
        {/* Mock Pins */}
        {MOCK_JOBS.map((job, index) => (
          <div 
            key={job.id}
            className={cn(
              "absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300",
              selectedJobId === job.id ? "z-20 scale-110" : "z-10"
            )}
            style={{ 
              top: `${30 + (index * 15)}%`, 
              left: `${20 + (index * 20)}%` 
            }}
            onClick={() => setSelectedJobId(job.id)}
          >
            <div className={cn(
              "flex items-center justify-center rounded-full shadow-lg transition-colors",
              selectedJobId === job.id ? "bg-primary text-white w-12 h-12" : "bg-white text-primary w-10 h-10"
            )}>
              <MapPin className={cn("w-6 h-6", selectedJobId === job.id && "fill-current")} />
            </div>
            {selectedJobId === job.id && (
              <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                {job.companyName}
              </div>
            )}
          </div>
        ))}

        {/* User Location Pulse */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
           <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-lg z-10 relative" />
           <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-50" />
        </div>

        {/* Floating Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="w-10 h-10 bg-white rounded-lg shadow-md flex items-center justify-center text-slate-600 hover:text-primary">
            <Navigation className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Sheet for Selected Job */}
        {selectedJob && (
          <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-xl shadow-xl animate-in slide-in-from-bottom-10">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-display font-bold text-lg">{selectedJob.companyName}</h3>
                <p className="text-sm text-slate-500">{selectedJob.address} • {selectedJob.distance}</p>
              </div>
              <div className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs font-bold">
                ${selectedJob.potential}
              </div>
            </div>
            <button className="w-full mt-3 bg-primary text-white py-3 rounded-lg font-medium shadow-lg shadow-primary/20">
              Navigate to Start
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}
