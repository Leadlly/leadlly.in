"use client";

import { useEffect, useState } from "react";

import { ArrowDownRightIcon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion } from "motion/react";

import useOutsideClick from "@/hooks/useOutsideClick";
import Container from "../shared/Container";
import Reveal from "../shared/Reveal";
import SectionContainer from "../shared/SectionContainer";
import { Button } from "../ui/button";

interface ICard {
  title: string;
  description: string;
  content: () => React.ReactNode;
}

const featureCards: ICard[] = [
  {
    title: "Study plans that actually work in real life",
    description:
      "No unrealistic routines - just clear, doable daily tasks you can stick to.",
    content: () => {
      return (
        <>
          <p>
            Most study plans fail not because they’re wrong - but because
            they’re unrealistic.
          </p>
          <p>
            Students are often told to follow rigid 10-12 hour schedules that
            don’t match their energy, focus, or real-life constraints. And when
            they can’t keep up, they feel guilty, inconsistent, and eventually
            give up.
          </p>
          <p>
            Leadlly fixes this by breaking your preparation into{" "}
            <strong>clear, manageable daily tasks</strong> - based on your pace,
            your capacity, and your routine.
          </p>
          <p>
            Instead of chasing perfection, you focus on{" "}
            <strong>consistent execution</strong>. Because real progress doesn’t
            come from extreme plans — it comes from plans you can actually
            follow every single day.
          </p>
        </>
      );
    },
  },
  {
    title: "Mentorship that actually understands your journey",
    description:
      "Learn from people who’ve faced the same struggles — and figured it out.",
    content: () => {
      return (
        <>
          <p>
            Preparation isn’t just about studying — it’s about handling
            confusion, burnout, self-doubt, and inconsistency.
          </p>
          <p>That’s where mentorship truly matters.</p>
          <p>
            At Leadlly, your mentor isn’t just someone who gives advice -
            they’ve <strong>already gone through the same journey</strong>.
          </p>
          <p>They understand:</p>
          <ul className="list-disc list-inside pl-2">
            <li>What it feels like to fall behind</li>
            <li>How to recover from bad weeks</li>
            <li>How to stay consistent when motivation drops</li>
          </ul>
          <p>But more importantly, they don’t guide you blindly.</p>
          <p>
            They use your{" "}
            <strong>
              actual performance data - your consistency, accuracy, and patterns
              - to give you practical, personalised direction
            </strong>
            .
          </p>
          <p>
            So instead of generic motivation, you get{" "}
            <strong>real guidance that works for you</strong>.
          </p>
        </>
      );
    },
  },
  {
    title: "Track what actually gets done",
    description: "Not just plans - real progress you can measure and improve.",
    content: () => {
      return (
        <>
          <p>
            Most students plan a lot - but rarely track what actually gets
            completed.
          </p>
          <p>And without tracking, it’s easy to:</p>
          <ul className="list-disc list-inside pl-2">
            <li> Overestimate your effort</li>
            <li>Miss weak areas</li>
            <li>Lose direction over time</li>
          </ul>
          <p>Leadlly changes that.</p>
          <p>We track:</p>
          <ul className="list-disc list-inside pl-2">
            <li>What you planned vs what you actually completed</li>
            <li>Your consistency patterns</li>
            <li>Your accuracy over time</li>
          </ul>
          <p>
            This gives you <strong>clear, honest visibility</strong> into your
            preparation.
          </p>
          <p>No guesswork. No assumptions.</p>
          <p>Just real data that helps you:</p>
          <ul className="list-disc list-inside pl-2">
            <li>Stay accountable</li>
            <li>Identify gaps early</li>
            <li>Improve continuously</li>
          </ul>
          <p>Because what gets tracked - improves.</p>
        </>
      );
    },
  },
  {
    title: "Never miss revision again",
    description: "Topics come back exactly when you’re about to forget them.",
    content: () => {
      return (
        <>
          <p>
            One of the biggest reasons students feel underprepared is simple:
          </p>
          <p>They forget what they studied.</p>
          <p>
            Not because they didn’t understand it - but because they didn’t
            revise it at the right time.
          </p>
          <p>
            Leadlly solves this with{" "}
            <strong>intelligent revision tracking</strong>.
          </p>
          <p>Instead of random revision:</p>
          <ul className="list-disc list-inside pl-2">
            <li>Topics resurface based on your revision history</li>
            <li>Weak areas get more attention</li>
            <li>Important concepts don’t get lost over time</li>
          </ul>
          <p>So you’re not constantly starting from scratch.</p>
          <p>
            You’re <strong>building on what you’ve already learned</strong> -
            and turning short-term study into long-term retention.
          </p>
        </>
      );
    },
  },
];

/**
 * Top-right featured card — stepped L-shape:
 * Upper-right narrow section (speech bubble) + lower-left wide section (title + arrow).
 * viewBox: 0 0 590 390
 */
const TopCard = ({
  card,
  setCurrentCard,
}: {
  card: ICard;
  setCurrentCard: (card: ICard | null) => void;
}) => (
  <motion.div layoutId={`card-${card.title}`}>
    <svg
      viewBox="0 0 582 310"
      className="relative w-full h-[275px]"
      fill="none"
    >
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
          <p>{card.description}</p>
        </div>
      </foreignObject>

      {/* Title + arrow — lower-left region */}
      <foreignObject x="10" y="180" width="420" height="100">
        <div className="p-5 flex flex-col justify-between h-full">
          <h3 className="text-[22px] max-w-2xs w-full font-bold text-primary-foreground leading-snug">
            {card.title}
          </h3>
        </div>
      </foreignObject>

      <foreignObject x="475" y="200" width="100" height="100">
        <Button
          variant={"default"}
          size={"icon-lg"}
          className="size-24 rounded-full border border-background group/btn-card-1"
          onClick={() => setCurrentCard(card)}
        >
          <HugeiconsIcon
            icon={ArrowDownRightIcon}
            className="text-primary-foreground size-10 group-hover/btn-card-1:translate-y-1 group-hover/btn-card-1:translate-x-1 transition-all duration-300"
          />
        </Button>
      </foreignObject>
    </svg>
  </motion.div>
);

/**
 * Bottom feature card — rounded rect with a tab at bottom-right for the arrow.
 * viewBox: 0 0 400 300
 *
 * Shape: main body (0→400, 0→220) + tab (300→400, 220→300)
 * with a concave inner corner at the step junction.
 */
const BottomCard = ({
  card,
  clipId,
  setCurrentCard,
}: {
  card: ICard;
  clipId: string;
  setCurrentCard: (card: ICard | null) => void;
}) => (
  <motion.div layoutId={`card-${card.title}`}>
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
            {card.title}
          </h3>
          <p className="text-sm md:text-base text-primary-foreground font-medium leading-relaxed">
            {card.description}
          </p>
        </div>
      </foreignObject>

      {/* Arrow — tab region (bottom-right) */}
      <foreignObject x="320" y="220" width="100" height="100">
        <Button
          size={"icon-lg"}
          className="size-20 rounded-full border border-background group/btn-card cursor-pointer"
          onClick={() => setCurrentCard(card)}
        >
          <HugeiconsIcon
            icon={ArrowDownRightIcon}
            className="text-primary-foreground size-10  group-hover/btn-card:translate-y-1 group-hover/btn-card:translate-x-1 transition-all duration-300"
          />
        </Button>
      </foreignObject>
    </svg>
  </motion.div>
);

const Tracker = () => {
  const [currentCard, setCurrentCard] = useState<ICard | null>(null);

  useEffect(() => {
    if (currentCard) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [currentCard]);

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
                  You lack a system that helps you execute.
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
              <Reveal delay={0.25} className="relative w-full">
                <TopCard
                  card={featureCards[0]}
                  setCurrentCard={setCurrentCard}
                />
              </Reveal>
            </div>
          </div>

          {/* Bottom cards - staggered descending cascade */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-4 md:gap-5">
            {featureCards.slice(1).map((card, index) => (
              <div key={card.title}>
                <Reveal delay={0.4 + index * 0.1}>
                  <BottomCard
                    card={card}
                    clipId={`bottomCardClip-${index}`}
                    setCurrentCard={setCurrentCard}
                  />
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </Container>
      {currentCard && (
        <div className="fixed inset-0 z-40 w-full h-full bg-foreground/50 backdrop-blur-md p-4"></div>
      )}
      {currentCard && (
        <CardModal card={currentCard} setCurrentCard={setCurrentCard} />
      )}
    </SectionContainer>
  );
};

export default Tracker;

function CardModal({
  card,
  setCurrentCard,
}: {
  card: ICard;
  setCurrentCard: (card: ICard | null) => void;
}) {
  const ref = useOutsideClick(() => setCurrentCard(null));

  return (
    <motion.div
      ref={ref}
      layoutId={`card-${card.title}`}
      className="fixed inset-0 z-50 m-auto bg-primary rounded-4xl max-w-2xl w-full h-fit overflow-hidden"
    >
      <div className="relative max-h-[90vh] overflow-y-auto p-10 flex flex-col gap-4 custom-scroll">
        <Button
          size={"icon-lg"}
          variant={"ghost"}
          onClick={() => setCurrentCard(null)}
          className="absolute top-4 right-4 rounded-full text-white"
        >
          <HugeiconsIcon icon={Cancel01Icon} />
        </Button>
        <h3 className="text-xl sm:text-2xl font-semibold text-background">
          {card.title}
        </h3>
        <p className="text-base sm:text-lg text-background/90">
          {card.description}
        </p>
        <div className="text-muted flex flex-col items-start gap-3 text-sm">
          {card.content()}
        </div>
      </div>
    </motion.div>
  );
}
