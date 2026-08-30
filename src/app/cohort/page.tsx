import type { Metadata } from "next";

import CohortLanding from "@/components/cohort/CohortLanding";

export const metadata: Metadata = {
  title: "Leadlly Cohort 1 — Your only job: execute.",
  description:
    "India's first AI + mentor execution program for JEE and NEET aspirants. A daily planner and dedicated mentor from IIT & AIIMS — ₹3,990 one time.",
};

export default function CohortPage() {
  return <CohortLanding />;
}
