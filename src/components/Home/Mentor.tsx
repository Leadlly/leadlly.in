"use client";

import { useState } from "react";
import Image from "next/image";

import { ChevronRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";
import Container from "../shared/Container";
import SectionContainer from "../shared/SectionContainer";

const items = [
  {
    title: "Mentorship",
    description:
      "At Leadlly, we believe that the right mentorship can make all the difference. Our team of dedicated mentors, hailing from top-tier institutions, is here to provide you with personalized guidance and support.",
    image: "/assets/illustrations/mockup_1.svg",
  },
  {
    title: "Personalized Curriculum",
    description:
      "At Leadlly, we believe that the right mentorship can make all the difference. Our team of dedicated mentors, hailing from top-tier institutions, is here to provide you with personalized guidance and support.",
    image: "/assets/illustrations/mockup_2.svg",
  },
  {
    title: "Adaptive Quizzes",
    description:
      "At Leadlly, we believe that the right mentorship can make all the difference. Our team of dedicated mentors, hailing from top-tier institutions, is here to provide you with personalized guidance and support.",
    image: "/assets/illustrations/mockup_3.svg",
  },
  {
    title: "Daily Task Planning",
    description:
      "At Leadlly, we believe that the right mentorship can make all the difference. Our team of dedicated mentors, hailing from top-tier institutions, is here to provide you with personalized guidance and support.",
    image: "/assets/illustrations/mockup_4.svg",
  },
  {
    title: "Error Book",
    description:
      "At Leadlly, we believe that the right mentorship can make all the difference. Our team of dedicated mentors, hailing from top-tier institutions, is here to provide you with personalized guidance and support.",
    image: "/assets/illustrations/mockup_5.svg",
  },
];

const Mentor = () => {
  const [activeIndex, setActiveIndex] = useState(items[0]);

  return (
    <SectionContainer className="bg-foreground min-h-dvh md:-mt-20 pt-20">
      <Container className="border-none md:py-28 flex flex-col lg:flex-row items-center justify-between gap-10 min-h-full">
        <div className="flex-1">
          <ul className="flex flex-wrap lg:flex-nowrap lg:flex-col items-start gap-6">
            {items.map((item, idx) => (
              <motion.li
                key={idx}
                layout
                onClick={() => setActiveIndex(item)}
                initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className={cn(
                  "bg-background/50 backdrop-blur-lg p-4 flex gap-4 cursor-pointer overflow-hidden rounded-4xl",
                  item === activeIndex ? "items-start" : "items-center",
                )}
              >
                <motion.span
                  layout
                  className="bg-background/20 backdrop-blur-lg rounded-full size-10 shrink-0 flex items-center justify-center"
                >
                  <HugeiconsIcon
                    icon={ChevronRight}
                    color="var(--background)"
                  />
                </motion.span>
                <div className="flex items-start flex-col gap-2 px-3">
                  <motion.h4
                    layout
                    className="text-background text-lg md:text-xl lg:text-2xl font-bold"
                  >
                    {item.title}
                  </motion.h4>
                  {item === activeIndex && (
                    <motion.p
                      key={`desc-${idx}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{
                        duration: 0.25,
                        delay: 0.25,
                        ease: "easeOut",
                      }}
                      className="text-background text-sm md:text-base font-medium max-w-96"
                    >
                      {item.description}
                    </motion.p>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex.title}
              initial={{ opacity: 0, x: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -40, filter: "blur(10px)" }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="relative aspect-585/833"
            >
              <Image
                className="object-contain max-h-[833px] max-w-[585px] w-full h-full"
                width={585}
                height={833}
                src={activeIndex.image}
                alt={activeIndex.title}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </SectionContainer>
  );
};

export default Mentor;
