import Layout from "@/components/layout/Layout";
import GoLiveButton from "@/components/dashboard/GoLiveButton";
import JobCard from "@/components/jobs/JobCard";
import { MOCK_JOBS, EARNINGS_STATS } from "@/lib/mockData";
import { Bell, UserCircle, TrendingUp, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import generatedLogo from "@assets/generated_images/minimalist_app_logo_for_recrowdly.png";

export default function Home() {
  return (
    <Layout>
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center bg-white/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <img src={generatedLogo} alt="Logo" className="w-8 h-8 rounded-lg" />
          <span className="font-display font-bold text-xl tracking-tight">Recrowdly</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full relative text-slate-500">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
          </Button>
          <Link href="/profile">
            <UserCircle className="w-8 h-8 text-slate-300 hover:text-primary transition-colors cursor-pointer" />
          </Link>
        </div>
      </header>

      <div className="px-6 pb-6 space-y-6">
        {/* Go Live Section */}
        <GoLiveButton />

        {/* Stats Overview */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 text-slate-400 mb-1">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs font-medium uppercase">Today</span>
            </div>
            <div className="font-display font-bold text-2xl text-slate-900">
              ${EARNINGS_STATS.today}
            </div>
          </div>
          <div className="bg-primary p-4 rounded-2xl shadow-lg shadow-primary/20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mr-4 -mt-4" />
            <div className="flex items-center gap-2 text-blue-100 mb-1">
              <span className="text-xs font-medium uppercase">Pipeline</span>
            </div>
            <div className="font-display font-bold text-2xl">
              ${(EARNINGS_STATS.potentialPipeline / 1000).toFixed(1)}k
            </div>
          </div>
        </div>

        {/* Active Queue */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-display font-bold text-lg text-slate-900">Nearby Opportunities</h2>
            <Link href="/jobs">
              <span className="text-xs font-medium text-primary cursor-pointer">View All</span>
            </Link>
          </div>
          
          <div className="space-y-3">
            {MOCK_JOBS.slice(0, 3).map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>
        
        {/* Training Teaser */}
        <section className="pt-2">
          <div className="bg-slate-900 rounded-2xl p-5 text-white relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-blue-500/20 to-transparent" />
            <h3 className="font-display font-bold text-lg mb-1">New from Gus</h3>
            <p className="text-slate-400 text-sm mb-3 max-w-[70%]">Master the "Doctor isn't in" objection with this new technique.</p>
            <Link href="/training">
              <Button size="sm" variant="secondary" className="h-8 text-xs">
                Watch Now
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}
