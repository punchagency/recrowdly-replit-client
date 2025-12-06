import { User, MapPin, Briefcase, Video, UserCircle } from "lucide-react";
import video1 from "@assets/generated_videos/gus_roleplaying_handling_a_gatekeeper_at_a_reception_desk.mp4";
import video2 from "@assets/generated_videos/gus_demonstrating_the_appointment_setting_handoff.mp4";
import video3 from "@assets/generated_videos/gus_teaching_objection_handling_techniques.mp4";
import video4 from "@assets/generated_videos/gus_demonstrating_first_impression_at_a_door.mp4";

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
    title: "Handling 'The Doctor Isn't In' (Gatekeepers)",
    duration: "3:45",
    thumbnail: "https://img.youtube.com/vi/CQk_iO8I6wU/maxresdefault.jpg", // Jeremy Miner
    videoSrc: video1,
    instructor: "Gus",
    description: "Learn how to bypass the front desk and get straight to the decision maker using the 'Help, don't sell' method."
  },
  {
    id: 2,
    title: "The $1,000 Handoff: Setting the Appointment",
    duration: "5:20",
    thumbnail: "https://img.youtube.com/vi/W3Xb9_t-gGg/maxresdefault.jpg", // Alex Hormozi
    videoSrc: video2,
    instructor: "Gus",
    description: "The crucial transition from warming the lead to locking in the Zoom call. Don't leave money on the table."
  },
  {
    id: 3,
    title: "Objection Handling: 'We're Happy with X'",
    duration: "4:15",
    thumbnail: "https://img.youtube.com/vi/M4_8PoR6Dsk/maxresdefault.jpg", // Jordan Belfort
    videoSrc: video3,
    instructor: "Gus",
    description: "When they say they already have a provider, here is the exact script to pivot to AI opportunities."
  },
  {
    id: 4,
    title: "Door-to-Door Mastery: First 10 Seconds",
    duration: "8:12",
    thumbnail: "https://img.youtube.com/vi/1q9f5l_v6yA/maxresdefault.jpg", // Sam Taggart D2D
    videoSrc: video4,
    instructor: "Gus",
    description: "How to break the ice instantly and avoid the immediate 'No thanks'."
  }
];

export const EARNINGS_STATS = {
  today: 150,
  thisWeek: 850,
  potentialPipeline: 12000,
};
