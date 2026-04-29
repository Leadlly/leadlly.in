import AskAI from "@/components/Home/AskAI";
import GrowthMeter from "@/components/Home/GrowthMeter";
import Hero from "@/components/Home/Hero";
import MarqueeList from "@/components/Home/Marquee";
import Mentor from "@/components/Home/Mentor";
import OurMission from "@/components/Home/OurMission";
import Planner from "@/components/Home/Planner";
import Testimonals from "@/components/Home/Testimonals";
import Tracker from "@/components/Home/Tracker";
import WhyLeadlly from "@/components/Home/WhyLeadlly";

export default function GridBackgroundDemo() {
  return (
    <>
      <Hero />
      <Planner />
      <MarqueeList />
      <Tracker />
      <GrowthMeter />
      <Mentor />
      <WhyLeadlly />
      <AskAI />
      <Testimonals />
      <OurMission />
    </>
  );
}
