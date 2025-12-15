import { User, MapPin, Briefcase, Video, UserCircle } from "lucide-react";
import video1 from "@/assets/generated_videos/gus_roleplaying_handling_a_gatekeeper_at_a_reception_desk.mp4";
import video2 from "@/assets/generated_videos/gus_demonstrating_the_appointment_setting_handoff.mp4";
import video3 from "@/assets/generated_videos/gus_teaching_objection_handling_techniques.mp4";
import video4 from "@/assets/generated_videos/gus_demonstrating_first_impression_at_a_door.mp4";

import thumb1 from "@/assets/generated_images/thumbnail_for_gatekeeper_video.png";
import thumb2 from "@/assets/generated_images/thumbnail_for_handoff_video.png";
import thumb3 from "@/assets/generated_images/thumbnail_for_objection_handling_video.png";
import thumb4 from "@/assets/generated_images/thumbnail_for_first_impression_video.png";

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
    thumbnail: thumb1,
    videoSrc: video1,
    instructor: "Gus",
    description: "Learn how to bypass the front desk and get straight to the decision maker using the 'Help, don't sell' method."
  },
  {
    id: 2,
    title: "The $1,000 Handoff: Setting the Appointment",
    duration: "5:20",
    thumbnail: thumb2,
    videoSrc: video2,
    instructor: "Gus",
    description: "The crucial transition from warming the lead to locking in the Zoom call. Don't leave money on the table."
  },
  {
    id: 3,
    title: "Objection Handling: 'We're Happy with X'",
    duration: "4:15",
    thumbnail: thumb3,
    videoSrc: video3,
    instructor: "Gus",
    description: "When they say they already have a provider, here is the exact script to pivot to AI opportunities."
  },
  {
    id: 4,
    title: "Door-to-Door Mastery: First 10 Seconds",
    duration: "8:12",
    thumbnail: thumb4,
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
