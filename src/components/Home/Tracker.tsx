"use client";

import { ArrowDownRightIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import Container from "../shared/Container";
import Reveal from "../shared/Reveal";
import SectionContainer from "../shared/SectionContainer";
import { Button } from "../ui/button";

const featureCards = [
  {
    title: "Guidance from those who've been there",
    description:
      "Mentors who've cleared the same exams guide you. You get practical advice, accountability, and direction.",
  },
  {
    title: "Progress you can see and trust",
    description: "Leadlly tracks what gets done, not what was planned.",
  },
  {
    title: "Revision at the right time",
    description: "Topics resurface when revision actually matters.",
  },
];

/**
 * Top-right featured card — stepped L-shape:
 * Upper-right narrow section (speech bubble) + lower-left wide section (title + arrow).
 * viewBox: 0 0 590 390
 */
const TopCard = () => (
  <svg viewBox="0 0 582 310" className="relative w-full h-[275px]" fill="none">
    <defs>
      <clipPath id="topCardClip" clipPathUnits="userSpaceOnUse">
        <path d="M 242,0 L 542,0 A 40,40 0 0,1 582,40 L 582,146 A 40,40 0 0,1 542,186 L 502,186 A 40,40 0 0,0 462,226 L 462,266 A 40,40 0 0,1 422,306 L 40,306 A 40,40 0 0,1 0,266 L 0,195 A 40,40 0 0,1 40,155 L 165,155 A 40,40 0 0,0 205,115 L 205,40 A 40,40 0 0,1 242,0 Z" />
      </clipPath>
    </defs>

    {/* Clipped background */}
    <rect
      width="582"
      height="310"
      clipPath="url(#topCardClip)"
      className="fill-primary"
    />

    {/* Speech bubble content — upper-right region */}
    <foreignObject x="220" y="10" width="60%" height="280">
      <div className="p-4 text-primary-foreground font-medium text-base leading-relaxed text-wrap whitespace-normal">
        <p>
          Your day is broken into clear, manageable tasks. No unrealistic
          routines only what you can genuinely complete.
        </p>
      </div>
    </foreignObject>

    {/* Title + arrow — lower-left region */}
    <foreignObject x="10" y="180" width="420" height="100">
      <div className="p-5 flex flex-col justify-between h-full">
        <h3 className="text-[22px] font-bold text-primary-foreground leading-snug">
          Structure that fits real
          <br />
          student life
        </h3>
      </div>
    </foreignObject>

    <foreignObject x="475" y="200" width="100" height="100">
      <Button
        variant={"default"}
        size={"icon-lg"}
        className="size-24 rounded-full border border-background"
      >
        <HugeiconsIcon
          icon={ArrowDownRightIcon}
          className="text-primary-foreground size-10"
        />
      </Button>
    </foreignObject>
  </svg>
);

/**
 * Bottom feature card — rounded rect with a tab at bottom-right for the arrow.
 * viewBox: 0 0 400 300
 *
 * Shape: main body (0→400, 0→220) + tab (300→400, 220→300)
 * with a concave inner corner at the step junction.
 */
const BottomCard = ({
  title,
  description,
  clipId,
}: {
  title: string;
  description: string;
  clipId: string;
}) => (
  <svg viewBox="0 0 410 330" className="w-full h-[310px]" fill="none">
    <defs>
      <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
        <path d="M 40,0 L 370,0 A 40,40 0,0,1 410,40 L 410,162 A 40,40 0,0,1 370,202 L 345,202 A 40,40 0,0,0 305,242 L 305,290 A 40,40 0,0,1 265,330 L 40,330 A 40,40 0,0,1 0,290 L 0,40 A 40,40 0,0,1 40,0 Z" />
      </clipPath>
    </defs>

    {/* Clipped background */}
    <rect
      width="410"
      height="330"
      clipPath={`url(#${clipId})`}
      className="fill-primary"
    />

    {/* Title + description — main body region */}
    <foreignObject x="0" y="0" width="410" height="220">
      <div className="p-6 flex flex-col gap-2 h-full">
        <h3 className="text-lg md:text-2xl font-semibold text-primary-foreground leading-snug">
          {title}
        </h3>
        <p className="text-sm md:text-base text-primary-foreground font-medium leading-relaxed">
          {description}
        </p>
      </div>
    </foreignObject>

    {/* Arrow — tab region (bottom-right) */}
    <foreignObject x="320" y="220" width="100" height="100">
      <Button
        size={"icon-lg"}
        className="size-20 rounded-full border border-background"
      >
        <HugeiconsIcon
          icon={ArrowDownRightIcon}
          className="text-primary-foreground size-10"
        />
      </Button>
    </foreignObject>
  </svg>
);

const Tracker = () => {
  return (
    <SectionContainer className="mt-20 md:mt-28 px-0 bg-foreground bg-[url(/assets/illustrations/svg_7.svg)] bg-no-repeat bg-cover bg-top">
      <Container className="border-none p-0 md:p-0 h-auto md:h-[800px] rounded-none overflow-hidden">
        <div className="p-6 sm:p-10 md:p-16 flex flex-col h-full gap-6 md:gap-8">
          {/* Top section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 flex-1">
            {/* Left - Heading */}
            <div className="flex-1 flex flex-col gap-3 md:gap-4">
              <Reveal>
                <h2 className="text-3xl sm:text-4xl md:text-[56px] font-medium text-background leading-tight tracking-tight">
                  You don&apos;t lack potential,
                  <br />
                  You lack execution.
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-lg sm:text-xl md:text-3xl text-background">
                  That&apos;s exactly where Leadlly steps in.
                </p>
              </Reveal>
            </div>

            {/* Right - Featured card (SVG stepped shape) */}
            <div className="w-full md:max-w-lg">
              <Reveal
                delay={0.25}
                className="relative w-full"
                motionDivClass="w-full"
              >
                <TopCard />
              </Reveal>
            </div>
          </div>

          {/* Bottom cards - staggered descending cascade */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {featureCards.map((card, index) => (
              <div key={card.title}>
                <Reveal delay={0.4 + index * 0.1} width="100%">
                  <BottomCard
                    title={card.title}
                    description={card.description}
                    clipId={`bottomCardClip-${index}`}
                  />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionContainer>
  );
};

export default Tracker;
