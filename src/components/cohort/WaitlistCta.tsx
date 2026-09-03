"use client";

import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { useWaitlist } from "./WaitlistProvider";

export function WaitlistTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { openWaitlist } = useWaitlist();

  return (
    <button type="button" onClick={openWaitlist} className={className}>
      {children}
    </button>
  );
}

export function CohortCta({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <WaitlistTrigger
      className={cn(
        "cohort-cta inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 font-extrabold text-white",
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4 shrink-0 sm:size-5" strokeWidth={2.5} />
    </WaitlistTrigger>
  );
}
