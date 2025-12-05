import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import MapPage from "@/pages/map-page";
import JobsPage from "@/pages/jobs-page";
import TrainingPage from "@/pages/training-page";
import ProfilePage from "@/pages/profile-page";
import JobDetailPage from "@/pages/job-detail";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/map" component={MapPage} />
      <Route path="/jobs" component={JobsPage} />
      <Route path="/training" component={TrainingPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/job/:id" component={JobDetailPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
