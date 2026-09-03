import Link from "next/link";

import Logo from "@/components/Icons/Logo";
import LogoFull from "@/components/Icons/LogoFull";
import { COHORT_WAITLIST_CTA } from "@/helpers/constants/cohort";
import { WaitlistTrigger, cohortShell } from "./ui";

export default function CohortHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className={`flex items-center justify-between py-5 ${cohortShell}`}>
        <Link href="/" aria-label="Leadlly home" className="flex items-center">
          <Logo className="size-8 sm:hidden" />
          <LogoFull className="hidden h-8 w-auto sm:block" />
        </Link>
        <WaitlistTrigger className="hidden rounded-full border border-[#d4cce0] bg-white px-5 py-2.5 text-sm font-bold text-primary sm:block">
          {COHORT_WAITLIST_CTA}
        </WaitlistTrigger>
      </div>
    </header>
  );
}
