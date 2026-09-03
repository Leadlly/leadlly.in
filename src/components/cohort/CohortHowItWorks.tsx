import { Flag, Trophy } from "lucide-react";

import { COHORT_STEPS } from "@/helpers/constants/cohort";
import { cn } from "@/lib/utils";
import {
  CohortCta,
  CohortDisplay,
  CohortEyebrow,
  CohortIcon,
  cohortShell,
} from "./ui";

export default function CohortHowItWorks() {
  return (
    <section
      className="overflow-hidden bg-[#211f26] py-20 text-white sm:py-28"
      id="how-it-works"
    >
      <div className={cohortShell}>
        <div className="mb-14 md:flex md:items-end md:justify-between">
          <div>
            <CohortEyebrow className="text-[#b998f3]">
              From plan to progress
            </CohortEyebrow>
            <CohortDisplay as="h2" className="mt-3 text-5xl sm:text-6xl">
              How We Do It
            </CohortDisplay>
          </div>
          <p className="mt-4 max-w-lg text-sm leading-6 text-[#c0c0c0] md:mt-0 md:text-base">
            Here&apos;s exactly what happens — from Day 1 to the full year. Each
            step makes the system and your mentor sharper about you.
          </p>
        </div>

        <div className="space-y-6">
          {COHORT_STEPS.map((step) => (
            <article
              key={step.label}
              className={cn("cohort-stair rounded-3xl p-6 sm:p-8", step.offset)}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-extrabold tracking-wider uppercase">
                  {step.label}
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
              <CohortDisplay as="h3" className="text-3xl">
                {step.title}
              </CohortDisplay>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-[#d2cfd6] sm:text-base">
                {step.bullets.map((bullet) => (
                  <li key={bullet}>→ {bullet}</li>
                ))}
              </ul>
              <p className="cohort-outcome mt-6 rounded-2xl p-4 text-sm font-bold leading-6 text-white">
                <span className="mr-2 text-[#b998f3]">OUTCOME</span>
                {step.outcome}
              </p>
            </article>
          ))}

          <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-[#9f7de0] bg-primary p-7 shadow-[0_25px_80px_rgba(102,51,194,.35)] sm:p-10">
            <CohortIcon
              icon={Trophy}
              size={144}
              className="absolute -top-10 -right-8 opacity-10"
            />
            <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[.22em] text-[#e8dcff]">
              <CohortIcon icon={Flag} size={14} />
              The Overall Outcome
            </p>
            <CohortDisplay
              as="h3"
              className="mt-3 max-w-3xl text-3xl leading-tight sm:text-4xl"
            >
              You walk into exam day knowing you didn&apos;t leave your
              preparation to chance.
            </CohortDisplay>
            <p className="mt-5 max-w-4xl text-sm font-medium leading-7 text-[#f0eaff] sm:text-base">
              By the end of the year, you haven&apos;t just covered the syllabus
              — you&apos;ve built a daily execution habit backed by real data, a
              mentor who&apos;s tracked your performance since day one, and a
              system that caught and corrected weak areas before they became
              exam-day gaps.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <CohortCta className="bg-white text-[#34156d] hover:bg-white">
            Join the Waitlist
          </CohortCta>
        </div>
      </div>
    </section>
  );
}
