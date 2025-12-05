import { User, MapPin, Briefcase, Video, UserCircle } from "lucide-react";

export interface Job {
  id: string;
  companyName: string;
  address: string;
  distance: string;
  potential: number;
  status: "available" | "assigned" | "completed";
  type: "dental" | "legal" | "business";
  tags: string[];
}

export const MOCK_JOBS: Job[] = [
  {
    id: "1",
    companyName: "BrightSmile Dental",
    address: "123 Main St, Downtown",
    distance: "0.8 mi",
    potential: 1150, // 50 + 100 + 1000
    status: "available",
    type: "dental",
    tags: ["High Value", "Root Canals"],
  },
  {
    id: "2",
    companyName: "Lawson & Partners",
    address: "450 Legal Ave, Suite 200",
    distance: "1.2 mi",
    potential: 1150,
    status: "available",
    type: "legal",
    tags: ["Needs AI", "High Volume"],
  },
  {
    id: "3",
    companyName: "TechFlow Systems",
    address: "88 Innovation Dr",
    distance: "2.5 mi",
    potential: 1150,
    status: "assigned",
    type: "business",
    tags: ["Follow-up"],
  },
  {
    id: "4",
    companyName: "Oak Wood Family Dentistry",
    address: "772 Oak St",
    distance: "0.3 mi",
    potential: 1150,
    status: "available",
    type: "dental",
    tags: ["Kicker Bonus"],
  },
];

export const TRAINING_VIDEOS = [
  {
    id: 1,
    title: "Handling 'The Doctor Isn't In'",
    duration: "3:45",
    thumbnail: "/attached_assets/generated_images/professional_headshot_of_gus_the_trainer.png",
    instructor: "Gus",
  },
  {
    id: 2,
    title: "The $1,000 Handoff",
    duration: "5:20",
    thumbnail: "/attached_assets/generated_images/professional_headshot_of_gus_the_trainer.png",
    instructor: "Gus",
  },
  {
    id: 3,
    title: "Objection Handling: 'We're Happy'",
    duration: "4:15",
    thumbnail: "/attached_assets/generated_images/professional_headshot_of_gus_the_trainer.png",
    instructor: "Gus",
  },
];

export const EARNINGS_STATS = {
  today: 150,
  thisWeek: 850,
  potentialPipeline: 12000,
};
