import Layout from "@/components/layout/Layout";
import JobCard from "@/components/jobs/JobCard";
import { MOCK_JOBS } from "@/lib/mockData";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function JobsPage() {
  return (
    <Layout>
      <div className="p-6 pb-2 sticky top-0 bg-background/95 backdrop-blur z-10">
        <h1 className="font-display font-bold text-2xl mb-4">Available Jobs</h1>
        <div className="flex gap-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input placeholder="Search nearby..." className="pl-9 bg-white border-slate-200" />
          </div>
          <Button variant="outline" size="icon" className="shrink-0 border-slate-200">
            <Filter className="w-4 h-4 text-slate-500" />
          </Button>
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {["All", "Dental", "Legal", "High Value", "Closest"].map((filter, i) => (
            <button 
              key={filter}
              className={`px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${i === 0 ? 'bg-primary text-white' : 'bg-white border border-slate-200 text-slate-600'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="px-6 space-y-4">
        {MOCK_JOBS.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
        {MOCK_JOBS.map(job => (
          <JobCard key={`dup-${job.id}`} job={{...job, id: `dup-${job.id}`}} />
        ))}
      </div>
    </Layout>
  );
}
