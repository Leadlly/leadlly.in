import {
  AlertTriangle,
  BookMarked,
  Eye,
  Handshake,
  MessageCircle,
  PhoneCall,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

import { COHORT_MENTOR_HELPS } from "@/helpers/constants/cohort";
import {
  CohortCta,
  CohortDisplay,
  CohortEyebrow,
  CohortIcon,
  FramedIllustration,
  cohortShell,
} from "./ui";

const MENTOR_HELP_ICONS: Record<
  (typeof COHORT_MENTOR_HELPS)[number]["id"],
  { icon: LucideIcon; wrap: string; color: string }
> = {
  calls: {
    icon: PhoneCall,
    wrap: "bg-emerald-50",
    color: "text-emerald-600",
  },
  data: {
    icon: TrendingUp,
    wrap: "bg-[#eee7fb]",
    color: "text-primary",
  },
  alert: {
    icon: AlertTriangle,
    wrap: "bg-red-50",
    color: "text-red-500",
  },
  talk: {
    icon: MessageCircle,
    wrap: "bg-sky-50",
    color: "text-sky-600",
  },
  direction: {
    icon: Target,
    wrap: "bg-orange-50",
    color: "text-orange-500",
  },
  errors: {
    icon: BookMarked,
    wrap: "bg-rose-50",
    color: "text-rose-600",
  },
};

export default function CohortMentor() {
  return (
    <section
      className="overflow-hidden bg-[#f5f3f8] py-20 sm:py-28"
      id="mentor"
    >
      <div className={cohortShell}>
        <div className="mx-auto max-w-4xl text-center">
          <CohortEyebrow>A real person in your corner</CohortEyebrow>
          <CohortDisplay as="h2" className="mt-3 text-5xl sm:text-6xl">
            Know Your Mentor
          </CohortDisplay>
          <p className="mx-auto mt-5 max-w-3xl text-base font-medium leading-7 text-[#555] sm:text-lg">
            Not a teacher. Not a call center. A near-peer who&apos;s been
            through exactly what you&apos;re going through — and takes ownership
            of your preparation.
          </p>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[.85fr_1.15fr]">
          <FramedIllustration
            src="/assets/illustrations/svg_4.svg"
            alt="A Leadlly mentor supporting a student"
            tilt="left"
            className="max-w-lg"
          />

          <div className="space-y-5">
            <article className="rounded-3xl border border-[#d4cce0] bg-[#1a1a1a] p-6 text-white shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-white">
                  <CohortIcon icon={Handshake} size={20} />
                </span>
                <CohortDisplay as="h3" className="text-3xl">
                  Why You Need A Mentor
                </CohortDisplay>
              </div>
              <p className="mt-5 text-sm leading-7 text-[#cfcbd3] sm:text-base">
                An app can track your data. A teacher has 60 other students and
                a syllabus to finish — they can&apos;t track your daily
                execution one-on-one.
              </p>
              <p className="mt-3 text-sm leading-7 text-[#cfcbd3] sm:text-base">
                Your mentor&apos;s only job is you.{" "}
                <strong className="text-white">30 students, not 60</strong> —
                enough to actually know your patterns, your gaps, and your pace.
              </p>
              <p className="mt-3 text-sm leading-7 text-[#cfcbd3] sm:text-base">
                And because your mentor isn&apos;t grading you or teaching your
                class, you can be honest with them about what you&apos;re
                actually struggling with — without worrying how it looks.
              </p>
            </article>
          </div>
        </div>

        <div className="mt-14">
          <div className="text-center">
            <CohortEyebrow>Personal, practical, proactive</CohortEyebrow>
            <CohortDisplay as="h3" className="mt-3 text-4xl sm:text-5xl">
              How Your Mentor Helps You
            </CohortDisplay>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {COHORT_MENTOR_HELPS.map((item) => {
              const visual = MENTOR_HELP_ICONS[item.id];
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-[#d4cce0] bg-white p-5 shadow-sm"
                >
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-xl ${visual.wrap} ${visual.color}`}
                  >
                    <CohortIcon icon={visual.icon} size={20} />
                  </span>
                  <p className="mt-3 text-sm font-extrabold leading-6">
                    {item.id === "direction" ? (
                      <>
                        Gives direction based on <em>your</em> numbers — not
                        generic advice
                      </>
                    ) : (
                      item.text
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[2rem] bg-primary px-6 py-8 text-center text-white sm:px-10 sm:py-10">
          <CohortIcon
            icon={Eye}
            size={112}
            className="absolute -top-6 -right-4 opacity-10"
          />
          <CohortDisplay
            as="p"
            className="relative mx-auto max-w-4xl text-2xl leading-snug sm:text-3xl"
          >
            You&apos;re not preparing alone this year. Someone&apos;s watching
            your numbers, and someone&apos;s accountable for what happens next.
          </CohortDisplay>
        </div>
        <div className="mt-10 text-center">
          <CohortCta>Join the Waitlist</CohortCta>
        </div>
      </div>
    </section>
  );
}
