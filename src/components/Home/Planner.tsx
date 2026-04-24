import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import * as motion from "motion/react-client";

import { cn } from "@/lib/utils";
import Container from "../shared/Container";
import LinkButton from "../shared/LinkButton";
import Reveal from "../shared/Reveal";
import SectionContainer from "../shared/SectionContainer";
import { buttonVariants } from "../ui/button";

const Planner = () => {
  return (
    <SectionContainer id="planner" className="mt-20 md:mt-28">
      <Container className="flex flex-col md:flex-row items-center gap-5 p-0 md:p-0 h-[500px] md:h-[273px]">
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="relative flex-1 w-full h-[450px]"
        >
          <Image
            src={"/assets/illustrations/svg_3.svg"}
            alt="Leadlly Planner"
            fill
            className="object-contain"
          />
        </motion.div>

        <div className="flex-1 p-5 md:p-8 flex flex-col items-center md:items-start gap-5">
          <Reveal>
            <p className="text-xl md:text-2xl text-foreground text-center md:text-left">
              Missed revisions, broken routines, and inconsistent days slowly
              add up making you feel behind even when you’re working hard. It’s
              frustrating and exhausting.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <LinkButton
              href="/#"
              className="h-11 md:h-14 pl-5"
              iconContainerClassName="md:size-10 size-7"
            >
              Start Planning now
            </LinkButton>
          </Reveal>
        </div>
      </Container>
    </SectionContainer>
  );
};

export default Planner;
