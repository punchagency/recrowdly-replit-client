import { Job } from "@/lib/mockData";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, ChevronRight, Navigation } from "lucide-react";
import { Link } from "wouter";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link href={`/job/${job.id}`}>
      <Card className="border-none shadow-sm hover:shadow-md transition-all cursor-pointer group bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary/20 group-hover:bg-primary transition-colors" />
        
        <CardHeader className="pb-2 pt-4 px-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-primary transition-colors">
                {job.companyName}
              </h3>
              <div className="flex items-center text-slate-500 text-sm mt-1">
                <MapPin className="w-3.5 h-3.5 mr-1" />
                {job.distance} • {job.address}
              </div>
            </div>
            <Badge variant={job.status === 'available' ? 'default' : 'secondary'} className="bg-slate-100 text-slate-700 hover:bg-slate-200 border-none">
              {job.type}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="px-4 pb-3">
          <div className="flex gap-2 flex-wrap">
            {job.tags.map(tag => (
              <span key={tag} className="text-[10px] px-2 py-0.5 bg-slate-50 text-slate-500 rounded-full border border-slate-100">
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="px-4 pb-4 pt-0 flex justify-between items-center border-t border-slate-50 mt-2">
          <div className="flex items-center text-emerald-600 font-medium mt-3">
            <span className="text-xs uppercase tracking-wider text-slate-400 mr-2">Potential</span>
            <DollarSign className="w-4 h-4" />
            <span className="font-display font-bold text-lg">{job.potential.toLocaleString()}</span>
          </div>
          <div className="mt-3">
             <Button size="sm" variant="ghost" className="text-slate-400 group-hover:text-primary p-0 h-auto hover:bg-transparent">
               Details <ChevronRight className="w-4 h-4 ml-1" />
             </Button>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
