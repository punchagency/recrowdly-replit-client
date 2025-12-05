import { Link, useLocation } from "wouter";
import { Home, Map, Briefcase, GraduationCap, User } from "lucide-react";
import { cn } from "@/lib/utils";

export default function BottomNav() {
  const [location] = useLocation();

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Map, label: "Map", href: "/map" },
    { icon: Briefcase, label: "Jobs", href: "/jobs" },
    { icon: GraduationCap, label: "Training", href: "/training" },
    { icon: User, label: "Profile", href: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 pb-safe pt-2 px-4 z-50">
      <div className="flex justify-between items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.label} href={item.href}>
              <a className={cn(
                "flex flex-col items-center gap-1 p-2 transition-colors duration-200",
                isActive ? "text-primary" : "text-slate-400 hover:text-slate-600"
              )}>
                <item.icon className={cn("w-6 h-6", isActive && "fill-current/10")} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium">{item.label}</span>
                {isActive && (
                  <span className="absolute -top-[1px] w-8 h-[2px] bg-primary rounded-full" />
                )}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
