import type { ReactNode } from "react";
import Image from "next/image";

import {
  CalendarDays,
  CircleCheck,
  Coins,
  Flame,
  TrendingUp,
  Video,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { CohortIcon } from "./ui";

function FloatCard({
  children,
  className,
  float = "cohort-float",
}: {
  children: ReactNode;
  className?: string;
  float?: "cohort-float" | "cohort-float-slow" | "cohort-float-delay";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[#ece7f4] bg-white p-4 shadow-[0_12px_40px_rgba(90,16,217,0.1)]",
        float,
        className,
      )}
    >
      {children}
    </div>
  );
}

function AreaChartCard({ gradientId }: { gradientId: string }) {
  return (
    <FloatCard className="w-[168px]">
      <p className="text-[10px] font-bold tracking-wide text-[#888] uppercase">
        Weekly trend
      </p>
      <svg viewBox="0 0 140 56" className="mt-2 h-14 w-full">
        <defs>
          <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 42 C18 40 28 28 42 30 C58 32 68 18 84 16 C102 14 114 24 140 10 V56 H0 Z"
          fill={`url(#${gradientId})`}
        />
        <path
          d="M0 42 C18 40 28 28 42 30 C58 32 68 18 84 16 C102 14 114 24 140 10"
          fill="none"
          stroke="#6d28d9"
          strokeWidth="2.5"
        />
      </svg>
    </FloatCard>
  );
}

function DonutCard() {
  return (
    <FloatCard className="flex w-[200px] items-center gap-3">
      <div className="relative grid size-16 place-items-center">
        <svg viewBox="0 0 36 36" className="size-16 -rotate-90">
          <circle
            cx="18"
            cy="18"
            r="14"
            fill="none"
            stroke="#efe8fa"
            strokeWidth="4"
          />
          <circle
            cx="18"
            cy="18"
            r="14"
            fill="none"
            stroke="#6d28d9"
            strokeWidth="4"
            strokeDasharray="70 30"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-sm font-extrabold text-primary">
          79%
        </span>
      </div>
      <div className="space-y-1 text-[10px] font-semibold text-[#666]">
        <p>Revision 88%</p>
        <p>Efficiency 80%</p>
        <p>Questions 350</p>
      </div>
    </FloatCard>
  );
}

function LineChartCard() {
  return (
    <FloatCard className="w-[150px]" float="cohort-float-delay">
      <div className="mb-1 flex items-center justify-between">
        <p className="text-[10px] font-bold text-[#888]">Accuracy</p>
        <CohortIcon icon={TrendingUp} size={14} className="text-emerald-500" />
      </div>
      <svg viewBox="0 0 120 40" className="h-10 w-full">
        <path
          d="M4 8 L28 18 L52 12 L76 28 L116 22"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    </FloatCard>
  );
}

function PointsCard() {
  return (
    <FloatCard className="w-[150px]">
      <CohortIcon icon={Coins} size={22} className="text-amber-500" />
      <p className="mt-2 text-2xl font-extrabold tracking-tight">70 Points</p>
      <p className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-emerald-500">
        <CohortIcon icon={TrendingUp} size={12} />
        +30%
      </p>
    </FloatCard>
  );
}

function StreakCard() {
  return (
    <FloatCard className="w-[150px]" float="cohort-float-slow">
      <div className="flex items-center gap-2">
        <span className="grid size-8 place-items-center rounded-full bg-orange-50 text-orange-500">
          <CohortIcon icon={Flame} size={16} />
        </span>
        <p className="text-lg font-extrabold text-rose-500">16 streak</p>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#f1ecf8]">
        <div className="h-full w-4/5 rounded-full bg-linear-to-r from-orange-400 to-rose-500" />
      </div>
      <p className="mt-2 text-[11px] font-bold text-[#777]">Good Work!</p>
    </FloatCard>
  );
}

function PlanCard() {
  return (
    <FloatCard className="w-[180px]" float="cohort-float-delay">
      <div className="flex items-center gap-2 text-primary">
        <CohortIcon icon={CalendarDays} size={16} />
        <p className="text-[11px] font-extrabold">Today&apos;s Plan</p>
      </div>
      <div className="mt-3 space-y-2">
        {["Physics · Kinematics", "Chemistry · Mole"].map((item, i) => (
          <div
            key={item}
            className="flex items-center gap-2 text-[11px] font-semibold text-[#444]"
          >
            <CohortIcon
              icon={CircleCheck}
              size={14}
              className={i === 0 ? "text-emerald-500" : "text-[#d4cce0]"}
            />
            {item}
          </div>
        ))}
      </div>
    </FloatCard>
  );
}

function QuizCard() {
  return (
    <FloatCard className="w-[190px]">
      <p className="text-[10px] font-extrabold tracking-wide text-primary uppercase">
        Physics · Live
      </p>
      <p className="mt-2 text-[12px] leading-4 font-bold">
        Which graph is correct for constant acceleration?
      </p>
      <div className="mt-3 rounded-lg bg-[#f5f3f8] px-2 py-1.5 text-[10px] font-bold text-primary">
        B. Parabolic x–t graph
      </div>
    </FloatCard>
  );
}

function ErrorListCard() {
  return (
    <FloatCard className="w-[200px]" float="cohort-float-slow">
      <p className="text-[11px] font-extrabold">Error book</p>
      <div className="mt-2 space-y-2">
        <div className="rounded-lg border-l-4 border-primary bg-[#f8f5fc] px-2 py-1.5">
          <p className="text-[11px] font-bold">Sign convention</p>
          <p className="text-[10px] text-[#777]">Ray Optics · Review</p>
        </div>
        <div className="rounded-lg bg-[#f8f5fc] px-2 py-1.5">
          <p className="text-[11px] font-bold">Limiting reagent</p>
          <p className="text-[10px] text-[#777]">Stoichiometry · 2×</p>
        </div>
      </div>
    </FloatCard>
  );
}

function MeetingCard({
  date,
  title,
  time,
  float = "cohort-float",
}: {
  date: string;
  title: string;
  time: string;
  float?: "cohort-float" | "cohort-float-slow" | "cohort-float-delay";
}) {
  return (
    <FloatCard className="flex w-[240px] items-start gap-3" float={float}>
      <div className="rounded-xl bg-primary px-2.5 py-2 text-center text-white">
        <p className="text-[10px] font-bold tracking-wide uppercase">May</p>
        <p className="text-lg leading-none font-extrabold">{date}</p>
      </div>
      <div className="min-w-0">
        <p className="text-[12px] leading-4 font-extrabold">{title}</p>
        <p className="mt-1 inline-flex items-center gap-1 text-[10px] font-semibold text-[#777]">
          <CohortIcon icon={Video} size={12} className="text-primary" />
          {time}
        </p>
      </div>
    </FloatCard>
  );
}

function VisualStage({
  src,
  alt,
  children,
}: {
  src: string;
  alt: string;
  children: ReactNode;
}) {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="relative mx-auto h-[240px] w-full sm:h-[320px] lg:h-[360px]">
        <Image src={src} alt={alt} fill className="object-contain" />
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-3 lg:mt-0 lg:contents">
        {children}
      </div>
    </div>
  );
}

export function FeatureVisual({
  visual,
  image,
  title,
}: {
  visual: string;
  image: string;
  title: string;
}) {
  if (visual === "planner") {
    return (
      <VisualStage src={image} alt={title}>
        <div className="lg:absolute lg:top-6 lg:right-0">
          <PlanCard />
        </div>
        <div className="lg:absolute lg:bottom-8 lg:left-4">
          <PointsCard />
        </div>
      </VisualStage>
    );
  }

  if (visual === "tracker") {
    return (
      <VisualStage src={image} alt={title}>
        <div className="lg:absolute lg:top-2 lg:left-0">
          <AreaChartCard gradientId="tracker-area" />
        </div>
        <div className="lg:absolute lg:top-16 lg:right-0">
          <DonutCard />
        </div>
        <div className="lg:absolute lg:bottom-6 lg:left-10">
          <LineChartCard />
        </div>
      </VisualStage>
    );
  }

  if (visual === "chapter") {
    return (
      <VisualStage src={image} alt={title}>
        <div className="lg:absolute lg:top-4 lg:right-2">
          <PointsCard />
        </div>
        <div className="lg:absolute lg:bottom-6 lg:left-6">
          <StreakCard />
        </div>
      </VisualStage>
    );
  }

  if (visual === "quizzes") {
    return (
      <VisualStage src={image} alt={title}>
        <div className="lg:absolute lg:top-4 lg:left-0">
          <QuizCard />
        </div>
        <div className="lg:absolute lg:right-0 lg:bottom-8">
          <StreakCard />
        </div>
      </VisualStage>
    );
  }

  if (visual === "errors") {
    return (
      <VisualStage src={image} alt={title}>
        <div className="lg:absolute lg:top-2 lg:left-0">
          <AreaChartCard gradientId="errors-area" />
        </div>
        <div className="lg:absolute lg:top-20 lg:right-0">
          <ErrorListCard />
        </div>
        <div className="lg:absolute lg:bottom-4 lg:left-8">
          <LineChartCard />
        </div>
      </VisualStage>
    );
  }

  return (
    <VisualStage src={image} alt={title}>
      <div className="lg:absolute lg:top-4 lg:right-0">
        <MeetingCard
          date="30"
          title="Meeting on Exam Readiness"
          time="11:00am – 11:30am"
        />
      </div>
      <div className="lg:absolute lg:bottom-6 lg:left-0">
        <MeetingCard
          date="31"
          title="Meeting on Positive thinking"
          time="12:00pm – 12:45pm"
          float="cohort-float-delay"
        />
      </div>
    </VisualStage>
  );
}
