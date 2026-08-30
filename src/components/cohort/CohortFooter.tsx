import Link from "next/link";

import LogoFull from "@/components/Icons/LogoFull";
import { CohortDisplay } from "./ui";

export default function CohortFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] px-5 py-12 text-center text-white">
      <Link
        href="/"
        className="inline-flex justify-center"
        aria-label="Leadlly home"
      >
        <LogoFull className="h-7 w-auto" />
      </Link>
      <CohortDisplay as="p" className="mt-5 text-2xl">
        There&apos;s a better way to study.
      </CohortDisplay>
      <p className="mt-3 text-xs text-[#999]">
        © {year} Leadlly. Built for students who are ready to execute.
      </p>
    </footer>
  );
}
