import { useRoute, Link } from "wouter";
import { MOCK_JOBS } from "@/lib/mockData";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Phone, Globe, Clock, CheckCircle, Video, AlertCircle, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import mapBg from "@/assets/generated_images/stylized_city_map_background_for_dashboard.png";

export default function JobDetailPage() {
  const [match, params] = useRoute("/job/:id");
  const job = MOCK_JOBS.find(j => j.id === params?.id);

  if (!job) return <div>Job not found</div>;

  return (
    <Layout>
      <div className="relative">
        {/* Header Image/Map */}
        <div className="h-48 w-full bg-slate-200 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: `url(${mapBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

          <Link href="/jobs">
            <Button variant="ghost" size="icon" className="absolute top-4 left-4 bg-white/80 backdrop-blur hover:bg-white rounded-full shadow-sm">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        <div className="px-6 -mt-12 relative z-10 pb-8">
          {/* Main Info Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="font-display font-bold text-2xl text-slate-900 leading-tight mb-1">{job.companyName}</h1>
                <p className="text-slate-500 flex items-center text-sm">
                  <MapPin className="w-3.5 h-3.5 mr-1" /> {job.address}
                </p>
              </div>
              <div className="bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg font-bold font-display text-lg">
                ${job.potential}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mb-6">
              <div className="text-center p-2 bg-slate-50 rounded-lg border border-slate-100">
                <div className="text-xs text-slate-500 mb-1">Show Up</div>
                <div className="font-bold text-slate-900">$50</div>
              </div>
              <div className="text-center p-2 bg-slate-50 rounded-lg border border-slate-100">
                <div className="text-xs text-slate-500 mb-1">Zoom</div>
                <div className="font-bold text-slate-900">$100</div>
              </div>
              <div className="text-center p-2 bg-emerald-50 rounded-lg border border-emerald-100">
                <div className="text-xs text-emerald-600 mb-1">Close</div>
                <div className="font-bold text-emerald-700">$1000</div>
              </div>
            </div>

            <Button className="w-full py-6 text-lg shadow-lg shadow-primary/25 rounded-xl">
              Check In (Verify Location)
            </Button>
          </div>

          {/* AI Context Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-900 font-bold font-display text-lg">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <h2>AI Enrichment</h2>
            </div>

            <Card className="border-purple-100 bg-purple-50/50 overflow-hidden">
              <div className="bg-purple-100/50 px-4 py-2 border-b border-purple-100 flex justify-between items-center">
                <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">Talking Points</span>
                <span className="text-[10px] bg-white px-2 py-0.5 rounded-full text-purple-600 border border-purple-200">Powered by Sokol</span>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">1</div>
                  <p className="text-sm text-slate-700">Mention their recent expansion into the west wing; implies need for efficiency.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <div className="w-5 h-5 rounded-full bg-purple-200 text-purple-700 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">2</div>
                  <p className="text-sm text-slate-700">Competitor "SmileDirect" just implemented AI booking nearby.</p>
                </div>
              </div>
            </Card>

            <Card className="border-slate-100 overflow-hidden">
              <div className="bg-slate-50 px-4 py-2 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Business Context</span>
              </div>
              <div className="p-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-slate-400 mb-1">Decision Maker</div>
                  <div className="font-medium text-slate-800">Dr. Sarah Smith</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Reception Gatekeeper</div>
                  <div className="font-medium text-slate-800">Jessica (Strict)</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Best Time</div>
                  <div className="font-medium text-slate-800">Tue/Thu 2pm</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Pain Point</div>
                  <div className="font-medium text-slate-800">Missed Calls</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-12 border-slate-200">
              <Phone className="w-4 h-4 mr-2" /> Call Office
            </Button>
            <Button variant="outline" className="h-12 border-slate-200">
              <Video className="w-4 h-4 mr-2" /> Start Zoom
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
