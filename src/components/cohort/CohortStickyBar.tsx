import { ArrowRight } from "lucide-react";

import { COHORT_WAITLIST_CTA } from "@/helpers/constants/cohort";
import { WaitlistTrigger, cohortShell } from "./ui";

export default function CohortStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#1a1a1a] py-3 text-white shadow-[0_-10px_30px_rgba(0,0,0,.18)]">
      <div className={`${cohortShell} flex items-center justify-between gap-3`}>
        <div className="min-w-0">
          <p className="truncate text-xs font-extrabold sm:text-sm">
            <span className="text-[#b998f3]">Waitlist open</span>{" "}
            <span className="hidden sm:inline">· Join now for Cohort 1</span>
          </p>
          <p className="hidden text-[10px] text-[#aaa] sm:block">
            No payment yet. We&apos;ll email you when it opens.
          </p>
        </div>
        <WaitlistTrigger className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-primary px-4 py-3 text-xs font-extrabold text-white sm:px-7 sm:text-sm">
          {COHORT_WAITLIST_CTA}
          <ArrowRight className="size-3.5 sm:size-4" strokeWidth={2.5} />
        </WaitlistTrigger>
      </div>
    </div>
  );
}
