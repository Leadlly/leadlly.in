import DailyMotivation from "@/components/Icons/GrowthMeter/DailyMotivation";
import GamifyLearning from "@/components/Icons/GrowthMeter/GamifyLearning";
import HealthyCompetetion from "@/components/Icons/GrowthMeter/HealthyCompetetion";
import Progress from "@/components/Icons/GrowthMeter/Progress";
import ConnectAnytime from "@/components/Icons/Mentor/ConnectAnytime";
import DiscussProblem from "@/components/Icons/Mentor/DiscussProblem";
import PersonalizedGuidance from "@/components/Icons/Mentor/PersonalizedGuidance";
import ValuableInsights from "@/components/Icons/Mentor/ValuableInsights";
import DailyEvaluation from "@/components/Icons/Planner/DailyEvaluation";
import DailyTask from "@/components/Icons/Planner/DailyTask";
import Efficiency from "@/components/Icons/Planner/Efficiency";
import ZeroProcrastination from "@/components/Icons/Planner/ZeroProcrastination";
import TrackEfficiency from "@/components/Icons/Tracker/Efficiency";
import KnowledgeGap from "@/components/Icons/Tracker/KnowledgeGap";
import RevisionFrequency from "@/components/Icons/Tracker/RevisionFrequency";
import Tracking from "@/components/Icons/Tracker/Tracking";
import { Points } from "../types/index.type";

export const NavLinks = [
  { label: "Plans", href: "#plans" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
  { label: "Become a mentor", href: "#become-a-mentor" },
];

export const PlannerPoints: Points[] = [
  { icon: DailyTask, label: "Daily task accomplishment." },
  { icon: DailyEvaluation, label: "Daily evaluation." },
  { icon: Efficiency, label: "70% increment efficiency." },
  { icon: ZeroProcrastination, label: "Zero procrastination." },
];
export const TrackerPoints: Points[] = [
  { icon: RevisionFrequency, label: "Check your  revision frequency." },
  { icon: KnowledgeGap, label: "Identify knowledge gaps." },
  { icon: TrackEfficiency, label: "Current and Cumulative efficiency ." },
  { icon: Tracking, label: "Subject,Chapter,Topic tracking." },
];

export const GrowthMeterPoints: Points[] = [
  { icon: DailyMotivation, label: "Daily motivation." },
  { icon: GamifyLearning, label: "Gamify your learning." },
  { icon: HealthyCompetetion, label: "Healthy competition." },
  { icon: Progress, label: "Daily, weekly, monthly progress." },
];

export const MentorPoints: Points[] = [
  { icon: ConnectAnytime, label: "Connect anytime." },
  { icon: DiscussProblem, label: "Discuss your problems." },
  { icon: PersonalizedGuidance, label: "Personalized guidance." },
  { icon: ValuableInsights, label: "Valuable insights." },
];
