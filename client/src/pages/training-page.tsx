import Layout from "@/components/layout/Layout";
import { TRAINING_VIDEOS } from "@/lib/mockData";
import { Play, CheckCircle, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import gusAvatar from "@assets/generated_images/professional_headshot_of_gus_the_trainer.png";
import { useState } from "react";

export default function TrainingPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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
            <Dialog key={video.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                  <div className="relative h-48 bg-slate-200">
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
                        <h3 className="font-bold text-slate-900 mb-1 leading-snug">{video.title}</h3>
                        <p className="text-xs text-slate-500 mb-2">Instructor: {video.instructor}</p>
                        <p className="text-xs text-slate-400 line-clamp-2">{video.description}</p>
                      </div>
                      {video.id === 1 && (
                        <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 ml-2" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="sm:max-w-[800px] p-0 bg-black border-none text-white overflow-hidden">
                <VisuallyHidden>
                  <DialogTitle>{video.title}</DialogTitle>
                </VisuallyHidden>
                <div className="aspect-video w-full bg-black relative">
                   <iframe 
                    width="100%" 
                    height="100%" 
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`} 
                    title={video.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                </div>
                <div className="p-4 bg-white text-slate-900">
                  <h2 className="font-display font-bold text-xl mb-1">{video.title}</h2>
                  <p className="text-sm text-slate-500">{video.description}</p>
                  <div className="mt-4 flex justify-end">
                     <DialogClose asChild>
                        <button className="text-sm font-medium text-slate-500 hover:text-slate-900">Close</button>
                     </DialogClose>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </Layout>
  );
}
