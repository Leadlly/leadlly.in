"use client";

import React, { useCallback, useEffect, useState } from "react";

import {
  Book03Icon,
  BookOpen02Icon,
  Calendar05Icon,
  ChartUpIcon,
  ChatFeedback01Icon,
  File02Icon,
  Quiz03Icon,
  Rocket01Icon,
  UserGroup02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { cn } from "@/lib/utils";
import Container from "../shared/Container";
import SectionContainer from "../shared/SectionContainer";

interface MarqueeItem {
  label: string;
  icon: React.ReactNode;
}

interface MarqueeProps {
  items: MarqueeItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

const items: MarqueeItem[] = [
  {
    label: "Workshops",
    icon: (
      <HugeiconsIcon
        icon={Book03Icon}
        strokeWidth={2}
        className="size-6 text-foreground"
      />
    ),
  },
  {
    label: "Liberty",
    icon: (
      <HugeiconsIcon
        icon={UserGroup02Icon}
        strokeWidth={2}
        className="size-6 text-foreground"
      />
    ),
  },
  {
    label: "Study Room",
    icon: (
      <HugeiconsIcon
        icon={File02Icon}
        strokeWidth={2}
        className="size-6 text-foreground"
      />
    ),
  },
  {
    label: "Planner",
    icon: (
      <HugeiconsIcon
        icon={Calendar05Icon}
        strokeWidth={2}
        className="size-6 text-foreground"
      />
    ),
  },
  {
    label: "Tracker",
    icon: (
      <HugeiconsIcon
        icon={Rocket01Icon}
        strokeWidth={2}
        className="size-6 text-foreground"
      />
    ),
  },
  {
    label: "Chat",
    icon: (
      <HugeiconsIcon
        icon={ChatFeedback01Icon}
        strokeWidth={2}
        className="size-6 text-foreground"
      />
    ),
  },
  {
    label: "Growth Meter",
    icon: (
      <HugeiconsIcon
        icon={ChartUpIcon}
        strokeWidth={2}
        className="size-6 text-foreground"
      />
    ),
  },
  {
    label: "Quizzes",
    icon: (
      <HugeiconsIcon
        icon={Quiz03Icon}
        strokeWidth={2}
        className="size-6 text-foreground"
      />
    ),
  },
  {
    label: "Errorbook",
    icon: (
      <HugeiconsIcon
        icon={BookOpen02Icon}
        strokeWidth={2}
        className="size-6 text-foreground"
      />
    ),
  },
];

const MarqueeList: React.FC = () => {
  return (
    <SectionContainer className="px-0 mt-20 md:mt-28">
      <Container className="border-0 p-0 md:p-0">
        <MarqueeMotionDiv items={items} speed="normal" />
      </Container>
    </SectionContainer>
  );
};

export default MarqueeList;

function MarqueeMotionDiv({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: MarqueeProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  }, [speed]);

  useEffect(() => {
    function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
        const scrollerContent = Array.from(scrollerRef.current.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });

        getDirection();
        getSpeed();
        setStart(true);
      }
    }
    addAnimation();
  }, [getDirection, getSpeed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:paused",
        )}
      >
        {items.map((item) => (
          <li
            className="relative w-fit max-w-full shrink-0 flex items-center gap-3 bg-transparent px-8 py-4 text-base md:text-2xl font-extrabold font-serif tracking-widest"
            key={item.label}
          >
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
