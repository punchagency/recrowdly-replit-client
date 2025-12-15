import { useState } from "react";
import { motion } from "framer-motion";
import { Power } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GoLiveButton() {
  const [isLive, setIsLive] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4 py-6">
      <button
        onClick={() => setIsLive(!isLive)}
        className="relative group"
      >
        {/* Pulse Effect */}
        {isLive && (
          <>
            <motion.div
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute inset-0 rounded-full bg-primary blur-md"
            />
            <motion.div
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{ scale: 1.3, opacity: 0 }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              className="absolute inset-0 rounded-full bg-primary blur-sm"
            />
          </>
        )}
        
        {/* Main Button */}
        <div className={cn(
          "relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl border-4",
          isLive 
            ? "bg-primary border-primary/30 text-white shadow-primary/40" 
            : "bg-white border-slate-100 text-slate-400 shadow-slate-200"
        )}>
          <Power className={cn("w-10 h-10 transition-all duration-300", isLive && "scale-110")} />
        </div>
      </button>
      
      <div className="text-center space-y-1">
        <h3 className={cn("font-display font-bold text-lg", isLive ? "text-primary" : "text-slate-400")}>
          {isLive ? "You are Online" : "Go Live"}
        </h3>
        <p className="text-xs text-slate-500">
          {isLive ? "Searching for nearby jobs..." : "Tap to start receiving jobs"}
        </p>
      </div>
    </div>
  );
}
