import { ShieldCheck } from "lucide-react";

import {
  COHORT_PRICE,
  COHORT_WAITLIST_CTA,
} from "@/helpers/constants/cohort";
import {
  CohortCta,
  CohortDisplay,
  CohortEyebrow,
  CohortIcon,
  cohortShell,
} from "./ui";

export default function CohortPricing() {
  return (
    <section className="bg-white py-20 sm:py-28" id="pricing">
      <div className={cohortShell}>
        <div className="text-center">
          <CohortEyebrow>Simple. One-time. Full year.</CohortEyebrow>
          <CohortDisplay as="h2" className="mt-3 text-5xl sm:text-6xl">
            Cohort 1 Pricing
          </CohortDisplay>
        </div>
        <div className="relative mt-10 overflow-hidden rounded-[2rem] border-2 border-[#1a1a1a] bg-white p-6 shadow-[10px_10px_0_#1a1a1a] sm:p-10">
          <div className="absolute right-0 top-0 rounded-bl-2xl bg-primary px-5 py-3 text-xs font-extrabold tracking-wider text-white uppercase">
            Waitlist Open
          </div>
          <p className="text-sm font-extrabold tracking-widest text-primary uppercase">
            Full 1-Year Program
          </p>
          <div className="mt-4 flex items-end gap-3">
            <CohortDisplay as="p" className="text-7xl leading-none sm:text-8xl">
              {COHORT_PRICE}
            </CohortDisplay>
            <span className="mb-2 text-sm font-bold text-[#555]">one time</span>
          </div>
          <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-[#555]">
            Everything above — planner, mentor, weekly sessions, reports,
            quizzes, error log, and 1,50,000+ practice questions — included.
          </p>
          <div className="my-7 h-px bg-[#e8e1f0]" />
          <p className="flex items-start gap-3 rounded-2xl bg-[#f5f3f8] p-4 text-sm font-semibold text-[#555]">
            <CohortIcon
              icon={ShieldCheck}
              size={18}
              className="mt-0.5 shrink-0 text-primary"
            />
            Refund/guarantee terms will be confirmed and shown before payment.
          </p>
          <CohortCta className="mt-7 w-full px-6 text-base sm:text-lg">
            {COHORT_WAITLIST_CTA}
          </CohortCta>
          <p className="mt-4 text-center text-xs font-bold text-[#777]">
            Join the waitlist now · No payment until Cohort 1 opens
          </p>
        </div>
      </div>
    </section>
  );
}
