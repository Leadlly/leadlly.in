import type { ReactNode } from "react";

import {
  BarChart3,
  BookMarked,
  CalendarDays,
  CircleHelp,
  GraduationCap,
  LineChart,
  PhoneCall,
  Target,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  CohortCta,
  CohortDisplay,
  CohortEyebrow,
  CohortIcon,
  PhoneFrame,
} from "./ui";

function FeatureCard({
  className,
  phoneFirst = true,
  phone,
  icon,
  title,
  description,
}: {
  className?: string;
  phoneFirst?: boolean;
  phone: ReactNode;
  icon: ReactNode;
  title: string;
  description: string;
}) {
  const copy = (
    <div className={cn(!phoneFirst && "order-2 sm:order-1")}>
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#eee7fb] text-primary">
        {icon}
      </span>
      <CohortDisplay
        as="h3"
        className="mt-3 text-2xl leading-tight sm:text-3xl"
      >
        {title}
      </CohortDisplay>
      <p className="mt-3 text-xs leading-6 text-[#555] sm:text-sm">
        {description}
      </p>
    </div>
  );

  return (
    <article
      className={cn(
        "grid min-h-[280px] grid-cols-1 items-center gap-4 overflow-hidden rounded-[2rem] border border-[#e8e1f0] p-5 sm:min-h-[320px] sm:gap-8 sm:p-8",
        phoneFirst ? "sm:grid-cols-[.9fr_1.1fr]" : "sm:grid-cols-[1.1fr_.9fr]",
        className,
      )}
    >
      <div className={cn(!phoneFirst && "order-1 sm:order-2")}>{phone}</div>
      {copy}
    </article>
  );
}

function PlannerPhone() {
  return (
    <PhoneFrame>
      <div className="rounded-[1.15rem] bg-[#f7f4fb] p-3">
        <div className="flex items-center justify-between text-[8px] font-bold">
          <span>Today&apos;s Plan</span>
          <span className="text-primary">4/6</span>
        </div>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#ddd5e8]">
          <div className="h-full w-2/3 bg-primary" />
        </div>
        <div className="mt-3 space-y-2">
          <div className="rounded-lg bg-white p-2 text-[7px] font-bold shadow-sm">
            ✓ Physics · Kinematics
          </div>
          <div className="rounded-lg border border-[#b998f3] bg-white p-2 text-[7px] font-bold">
            ○ Chemistry · Mole Concept
          </div>
          <div className="rounded-lg bg-white p-2 text-[7px] font-bold shadow-sm">
            ○ Maths · Quadratics
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

function MentorPhone() {
  return (
    <PhoneFrame>
      <div className="rounded-[1.15rem] bg-[#f7f4fb] p-3">
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-primary text-[10px] text-white">
            AG
          </div>
          <div>
            <p className="text-[8px] font-extrabold">Your Mentor</p>
            <p className="text-[6px] text-green-600">● Online</p>
          </div>
        </div>
        <div className="mt-3 rounded-xl rounded-tl-none bg-white p-2 text-[7px] leading-3 shadow-sm">
          I saw your accuracy dip in Rotational Motion. Let&apos;s fix it this
          week.
        </div>
        <div className="ml-5 mt-2 rounded-xl rounded-tr-none bg-primary p-2 text-[7px] leading-3 text-white">
          Can we go over where I&apos;m getting stuck?
        </div>
        <div className="mt-3 rounded-full bg-white px-3 py-2 text-[6px] text-[#999]">
          Type a message…
        </div>
      </div>
    </PhoneFrame>
  );
}

function SessionPhone() {
  return (
    <PhoneFrame>
      <div className="rounded-[1.15rem] bg-[#f7f4fb] p-3 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#e8dcff] text-primary">
          <CohortIcon icon={GraduationCap} size={28} />
        </div>
        <p className="mt-2 text-[9px] font-extrabold">Weekly Check-in</p>
        <p className="text-[7px] text-[#777]">Today · 7:00 PM</p>
        <div className="mt-4 grid grid-cols-3 gap-1 text-[6px] font-bold">
          <div className="rounded bg-white p-2">
            87%
            <br />
            <span className="text-[#999]">Tasks</span>
          </div>
          <div className="rounded bg-white p-2">
            62%
            <br />
            <span className="text-[#999]">Accuracy</span>
          </div>
          <div className="rounded bg-white p-2">
            4.2h
            <br />
            <span className="text-[#999]">Daily</span>
          </div>
        </div>
        <div className="mt-3 rounded-lg bg-primary py-2 text-[7px] font-bold text-white">
          Join Mentor Call
        </div>
      </div>
    </PhoneFrame>
  );
}

function ReportsPhone() {
  return (
    <PhoneFrame>
      <div className="rounded-[1.15rem] bg-white p-3">
        <p className="text-[8px] font-extrabold">Weekly Report</p>
        <p className="mt-1 text-[18px] font-extrabold text-primary">+18%</p>
        <p className="text-[6px] text-[#777]">accuracy improvement</p>
        <div className="mt-4 flex h-20 items-end gap-1.5 border-b border-[#ddd]">
          <span className="h-[35%] flex-1 rounded-t bg-[#d9ccf0]" />
          <span className="h-[48%] flex-1 rounded-t bg-[#c4afe9]" />
          <span className="h-[44%] flex-1 rounded-t bg-[#b091e2]" />
          <span className="h-[66%] flex-1 rounded-t bg-[#956bd7]" />
          <span className="h-[80%] flex-1 rounded-t bg-primary" />
        </div>
        <div className="mt-3 rounded-lg bg-[#f5f3f8] p-2 text-[7px] font-bold">
          42 / 48 tasks completed
        </div>
      </div>
    </PhoneFrame>
  );
}

function SyllabusPhone() {
  return (
    <PhoneFrame>
      <div className="rounded-[1.15rem] bg-[#f7f4fb] p-3">
        <div className="flex items-center justify-between">
          <p className="text-[8px] font-extrabold">Syllabus</p>
          <span className="text-[8px] font-extrabold text-primary">58%</span>
        </div>
        <div className="mt-3 space-y-3">
          <div>
            <div className="flex justify-between text-[6px] font-bold">
              <span>Physics</span>
              <span>68%</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-white">
              <div className="h-full w-[68%] rounded-full bg-primary" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[6px] font-bold">
              <span>Chemistry</span>
              <span>54%</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-white">
              <div className="h-full w-[54%] rounded-full bg-primary/80" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-[6px] font-bold">
              <span>Mathematics</span>
              <span>49%</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-white">
              <div className="h-full w-[49%] rounded-full bg-[#9f7de0]" />
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-white p-2 text-[7px] font-bold shadow-sm">
          Next: Current Electricity →
        </div>
      </div>
    </PhoneFrame>
  );
}

function QuestionsPhone() {
  return (
    <PhoneFrame>
      <div className="rounded-[1.15rem] bg-[#f7f4fb] p-3">
        <p className="text-[7px] font-bold text-primary">PHYSICS · Q12/20</p>
        <p className="mt-2 text-[8px] font-extrabold leading-3">
          A particle moves with constant acceleration. Which graph is correct?
        </p>
        <div className="mt-3 space-y-2 text-[7px] font-bold">
          <div className="rounded-lg bg-white p-2">A. Linear v–t graph</div>
          <div className="rounded-lg border border-primary bg-[#eee7fb] p-2 text-primary">
            B. Parabolic x–t graph
          </div>
          <div className="rounded-lg bg-white p-2">C. Constant x–t graph</div>
        </div>
        <div className="mt-3 rounded-lg bg-primary py-2 text-center text-[7px] font-bold text-white">
          Check Answer
        </div>
      </div>
    </PhoneFrame>
  );
}

function QuizPhone() {
  return (
    <PhoneFrame>
      <div className="rounded-[1.15rem] bg-[#f7f4fb] p-3">
        <div className="flex items-center justify-between">
          <p className="text-[8px] font-extrabold">Adaptive Quiz</p>
          <span className="rounded-full bg-[#e4d7fa] px-2 py-1 text-[6px] font-bold text-primary">
            LIVE
          </span>
        </div>
        <div className="mx-auto mt-4 grid h-20 w-20 place-items-center rounded-full border-[7px] border-[#d7c5f5] border-t-primary">
          <div className="text-center">
            <b className="block text-lg">72%</b>
            <span className="text-[6px]">accuracy</span>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2 text-[6px] font-bold">
          <div className="rounded-lg bg-white p-2 text-center">
            Weak
            <br />
            <b className="text-red-500">Friction</b>
          </div>
          <div className="rounded-lg bg-white p-2 text-center">
            Strong
            <br />
            <b className="text-green-600">NLM</b>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

function ErrorPhone() {
  return (
    <PhoneFrame>
      <div className="rounded-[1.15rem] bg-[#f7f4fb] p-3">
        <div className="flex items-center justify-between">
          <p className="text-[8px] font-extrabold">My Error Book</p>
          <span className="text-[7px] font-bold text-primary">24 saved</span>
        </div>
        <div className="mt-3 space-y-2">
          <div className="rounded-lg bg-white p-2 shadow-sm">
            <p className="text-[7px] font-extrabold">Sign convention mistake</p>
            <p className="mt-1 text-[6px] text-[#777]">
              Ray Optics · Review today
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-primary bg-white p-2 shadow-sm">
            <p className="text-[7px] font-extrabold">Forgot limiting reagent</p>
            <p className="mt-1 text-[6px] text-[#777]">
              Stoichiometry · Repeated 2×
            </p>
          </div>
          <div className="rounded-lg bg-white p-2 shadow-sm">
            <p className="text-[7px] font-extrabold">
              Applied wrong derivative
            </p>
            <p className="mt-1 text-[6px] text-[#777]">Calculus · Fixed</p>
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

export default function CohortFeatures() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-28" id="features">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <CohortEyebrow>Everything You Get With Cohort 1</CohortEyebrow>
          <CohortDisplay as="h2" className="mt-3 text-4xl sm:text-6xl">
            One app. Your whole preparation.
          </CohortDisplay>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#555] sm:text-base">
            Every feature connects to the next — so planning, practice, mentor
            guidance, and revision all work from the same picture of your
            preparation.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <FeatureCard
            className="bg-[#f5f3f8]"
            phone={<PlannerPhone />}
            icon={<CohortIcon icon={CalendarDays} size={20} />}
            title="Personalized Daily Planner"
            description="Open the app and see exactly what to study, in what order, based on your schedule and current pace."
          />
          <FeatureCard
            className="bg-white shadow-sm"
            phoneFirst={false}
            phone={<MentorPhone />}
            icon={<CohortIcon icon={GraduationCap} size={20} />}
            title="1-on-1 Mentor"
            description="Message a mentor who already knows your plan, performance, weak topics, and recent consistency."
          />
          <FeatureCard
            className="bg-white shadow-sm"
            phone={<SessionPhone />}
            icon={<CohortIcon icon={PhoneCall} size={20} />}
            title="Weekly Mentor Sessions"
            description="Review the week, understand what slipped, and leave with a sharper plan for the next seven days."
          />
          <FeatureCard
            className="bg-[#f5f3f8]"
            phoneFirst={false}
            phone={<ReportsPhone />}
            icon={<CohortIcon icon={BarChart3} size={20} />}
            title="Daily & Weekly Reports"
            description="See study time, task completion, and accuracy trends clearly — no vague feeling that you “did enough.”"
          />
          <FeatureCard
            className="bg-[#f5f3f8]"
            phone={<SyllabusPhone />}
            icon={<CohortIcon icon={LineChart} size={20} />}
            title="Full Syllabus Tracker"
            description="Know exactly what is complete, in progress, pending, or due for revision across every subject."
          />
          <FeatureCard
            className="bg-white shadow-sm"
            phoneFirst={false}
            phone={<QuestionsPhone />}
            icon={<CohortIcon icon={CircleHelp} size={20} />}
            title="1,50,000+ Practice Questions"
            description="Practice by subject, chapter, and difficulty without wasting time hunting for the right questions."
          />
          <FeatureCard
            className="bg-white shadow-sm"
            phone={<QuizPhone />}
            icon={<CohortIcon icon={Target} size={20} />}
            title="Adaptive Quizzes"
            description="Questions adjust to your performance and reveal topic-level accuracy while the learning is still fresh."
          />
          <FeatureCard
            className="bg-[#f5f3f8]"
            phoneFirst={false}
            phone={<ErrorPhone />}
            icon={<CohortIcon icon={BookMarked} size={20} />}
            title="Error Log"
            description="Every wrong answer stays in one place, tagged by concept, so mistakes become your smartest revision list."
          />
        </div>
        <div className="mt-12 text-center">
          <CohortCta>Reserve Your Seat</CohortCta>
        </div>
      </div>
    </section>
  );
}
