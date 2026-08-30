import { Building2, Flame, GraduationCap, Timer, Users } from "lucide-react";

import {
  COHORT_PRICE,
  COHORT_SEATS_LEFT,
  COHORT_SEATS_TOTAL,
} from "@/helpers/constants/cohort";
import CohortCountdown from "./CohortCountdown";
import { CohortCta, CohortDisplay, CohortIcon, FramedIllustration } from "./ui";

export default function CohortHero() {
  return (
    <section className="cohort-hero-glow relative min-h-screen overflow-hidden border-b border-[#e8e1f0] pt-28 md:pt-32">
      <div className="cohort-dot-grid absolute inset-y-0 right-0 w-1/3 opacity-50" />
      <div className="absolute -left-20 top-56 h-64 w-64 rounded-full bg-[#eee7fb] blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 sm:px-8 md:pb-24 lg:grid-cols-[1.15fr_.85fr] lg:px-12">
        <div className="text-center lg:text-left">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#d4cce0] bg-white px-4 py-2 text-[10px] font-extrabold tracking-[.12em] text-primary shadow-sm sm:text-xs lg:mx-0">
            <CohortIcon icon={GraduationCap} size={14} />
            COHORT 1 — BY STUDENTS OF IIT &amp; AIIMS
          </div>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[.18em] text-primary sm:text-sm">
            India&apos;s First AI + Mentor Execution Program
          </p>
          <CohortDisplay
            as="h1"
            className="mx-auto max-w-4xl text-[2.45rem] leading-[.98] text-[#1a1a1a] sm:text-6xl lg:mx-0 lg:text-[4.75rem]"
          >
            <span className="block">You Already Know What To Study.</span>
            <span className="mt-2 block text-primary">
              We Take Responsibility For How You Study It.
            </span>
          </CohortDisplay>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-7 text-[#555] sm:text-lg lg:mx-0">
            A daily planner + dedicated mentor from IIT &amp; AIIMS — built to
            execute your JEE/NEET preparation with you, every single day.
          </p>
          <div className="mt-7 flex flex-col items-center gap-3 lg:items-start">
            <p className="text-sm font-extrabold uppercase tracking-[.16em]">
              Your only job: <span className="text-primary">execute.</span>
            </p>
            <CohortCta className="w-full max-w-md px-6 text-base sm:w-auto sm:px-9 sm:text-lg">
              Reserve Your Seat — {COHORT_PRICE}
            </CohortCta>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] font-bold text-[#555] sm:text-xs lg:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <CohortIcon
                icon={GraduationCap}
                size={14}
                className="text-primary"
              />
              Built &amp; Run by IIT &amp; AIIMS Students
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CohortIcon icon={Users} size={14} className="text-primary" />
              2,000+ Students Already
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CohortIcon icon={Building2} size={14} className="text-primary" />
              Trusted by 6 Institutes
            </span>
          </div>
          <div className="mx-auto mt-6 grid max-w-xl grid-cols-1 gap-2 rounded-2xl border border-[#d4cce0] bg-white/90 p-3 text-sm font-extrabold shadow-sm sm:grid-cols-2 lg:mx-0">
            <div className="flex items-center gap-2 rounded-xl bg-[#f5f3f8] px-3 py-3">
              <CohortIcon
                icon={Flame}
                size={16}
                className="shrink-0 text-primary"
              />
              <span>
                Cohort 1 · {COHORT_SEATS_TOTAL.toLocaleString("en-IN")} Seats ·{" "}
                <span className="text-primary">
                  {COHORT_SEATS_LEFT.toLocaleString("en-IN")}
                </span>{" "}
                Left
              </span>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-[#1a1a1a] px-3 py-3 text-white">
              <CohortIcon icon={Timer} size={16} className="shrink-0" />
              <CohortCountdown />
            </div>
          </div>
        </div>
        <FramedIllustration
          src="/assets/illustrations/svg_5.svg"
          alt="Student and mentor working together"
          className="lg:max-w-none"
          priority
        >
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl bg-[#f5f3f8] p-3">
              <b className="block text-lg text-primary">Plan</b>
              <span className="text-[10px] font-bold">your day</span>
            </div>
            <div className="rounded-xl bg-[#f5f3f8] p-3">
              <b className="block text-lg text-primary">Track</b>
              <span className="text-[10px] font-bold">accuracy</span>
            </div>
            <div className="rounded-xl bg-[#f5f3f8] p-3">
              <b className="block text-lg text-primary">Fix</b>
              <span className="text-[10px] font-bold">weak spots</span>
            </div>
          </div>
        </FramedIllustration>
      </div>
    </section>
  );
}
