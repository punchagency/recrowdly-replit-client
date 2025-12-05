import Layout from "@/components/layout/Layout";
import { TRAINING_VIDEOS } from "@/lib/mockData";
import { Play, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import gusAvatar from "@assets/generated_images/professional_headshot_of_gus_the_trainer.png";

export default function TrainingPage() {
  return (
    <Layout>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <img src={gusAvatar} alt="Gus" className="w-16 h-16 rounded-full border-2 border-primary object-cover" />
            <div className="absolute bottom-0 right-0 bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full border border-white">
              Mentor
            </div>
          </div>
          <div>
            <h1 className="font-display font-bold text-2xl">Training with Gus</h1>
            <p className="text-slate-500 text-sm">Master the field sales craft.</p>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-end mb-3">
            <h2 className="font-display font-bold text-lg">Your Progress</h2>
            <span className="text-xs text-primary font-medium">35% Complete</span>
          </div>
          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full w-[35%] bg-primary rounded-full" />
          </div>
        </div>

        <h2 className="font-display font-bold text-lg mb-4">Recommended Modules</h2>
        <div className="space-y-4">
          {TRAINING_VIDEOS.map(video => (
            <Card key={video.id} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
              <div className="relative h-40 bg-slate-200">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-primary ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{video.title}</h3>
                    <p className="text-xs text-slate-500">Instructor: {video.instructor}</p>
                  </div>
                  {video.id === 1 && (
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
