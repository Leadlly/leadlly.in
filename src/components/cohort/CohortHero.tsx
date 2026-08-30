import { Building2, Flame, GraduationCap, Timer, Users } from "lucide-react";

import {
  COHORT_PRICE,
  COHORT_SEATS_LEFT,
  COHORT_SEATS_TOTAL,
} from "@/helpers/constants/cohort";
import CohortCountdown from "./CohortCountdown";
import { CohortCta, CohortIcon, cohortShell } from "./ui";

export default function CohortHero() {
  return (
    <section className="cohort-hero-glow relative overflow-hidden border-b border-[#e8e1f0] pt-28 md:pt-32">
      <div className="cohort-dot-grid pointer-events-none absolute inset-0 opacity-60" />
      <div
        className={`relative pb-16 text-center md:pb-24 ${cohortShell}`}
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d4cce0] bg-white px-4 py-2 text-[10px] font-extrabold tracking-[.12em] text-primary shadow-sm sm:text-xs">
          <CohortIcon icon={GraduationCap} size={14} />
          COHORT 1 — BY STUDENTS OF IIT &amp; AIIMS
        </div>

        <p className="text-xs font-extrabold uppercase tracking-[.18em] text-primary sm:text-sm">
          India&apos;s First AI + Mentor Execution Program
        </p>

        <h1 className="mx-auto mt-5 max-w-5xl text-[2.35rem] leading-[1.12] font-medium text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
          <span className="block">You Already Know What To Study.</span>
          <span className="mt-2 block text-primary">
            We Take Responsibility For How You Study It.
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl  px-5 py-4 text-base font-medium leading-7 text-[#444] sm:px-8 sm:text-lg">
          A daily planner + dedicated mentor from IIT &amp; AIIMS — built to
          execute your JEE/NEET preparation with you, every single day.
        </p>

        <p className="mt-8 text-sm font-extrabold uppercase tracking-[.16em] text-[#333]">
          Your only job: <span className="text-primary">execute.</span>
        </p>

        <div className="mt-5 flex justify-center">
          <CohortCta className="w-full max-w-md px-6 text-base sm:w-auto sm:px-9 sm:text-lg">
            Reserve Your Seat — {COHORT_PRICE}
          </CohortCta>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-bold text-[#555] sm:text-xs">
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

        <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-2 rounded-2xl border border-[#d4cce0] bg-white p-3 text-sm font-extrabold shadow-sm sm:grid-cols-2">
          <div className="flex items-center justify-center gap-2 rounded-xl bg-[#f5f3f8] px-3 py-3 sm:justify-start">
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
          <div className="flex items-center justify-center gap-2 rounded-xl bg-[#1a1a1a] px-3 py-3 text-white sm:justify-start">
            <CohortIcon icon={Timer} size={16} className="shrink-0" />
            <CohortCountdown />
          </div>
        </div>
      </div>
    </section>
  );
}
