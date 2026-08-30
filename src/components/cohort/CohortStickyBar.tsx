import Link from "next/link";

import { ArrowRight } from "lucide-react";

import {
  COHORT_CHECKOUT_HREF,
  COHORT_PRICE,
  COHORT_SEATS_LEFT,
} from "@/helpers/constants/cohort";

export default function CohortStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#1a1a1a] px-3 py-3 text-white shadow-[0_-10px_30px_rgba(0,0,0,.18)] sm:px-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-xs font-extrabold sm:text-sm">
            <span className="text-[#b998f3]">
              {COHORT_SEATS_LEFT.toLocaleString("en-IN")}
            </span>{" "}
            Seats Left{" "}
            <span className="hidden sm:inline">
              · Reserve Now — {COHORT_PRICE}
            </span>
          </p>
          <p className="hidden text-[10px] text-[#aaa] sm:block">
            One payment. Full 1-year program.
          </p>
        </div>
        <Link
          href={COHORT_CHECKOUT_HREF}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-primary px-4 py-3 text-xs font-extrabold text-white sm:px-7 sm:text-sm"
        >
          Reserve Your Seat
          <ArrowRight className="size-3.5 sm:size-4" strokeWidth={2.5} />
        </Link>
      </div>
    </div>
  );
}
