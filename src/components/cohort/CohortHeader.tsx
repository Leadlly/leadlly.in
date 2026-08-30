import Link from "next/link";

import Logo from "@/components/Icons/Logo";
import LogoFull from "@/components/Icons/LogoFull";
import { COHORT_CHECKOUT_HREF } from "@/helpers/constants/cohort";
import { cohortShell } from "./ui";

export default function CohortHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div
        className={`flex items-center justify-between py-5 ${cohortShell}`}
      >
        <Link href="/" aria-label="Leadlly home" className="flex items-center">
          <Logo className="size-8 sm:hidden" />
          <LogoFull className="hidden h-8 w-auto sm:block" />
        </Link>
        <Link
          href={COHORT_CHECKOUT_HREF}
          className="hidden rounded-full border border-[#d4cce0] bg-white px-5 py-2.5 text-sm font-bold text-primary sm:block"
        >
          Reserve Your Seat
        </Link>
      </div>
    </header>
  );
}
