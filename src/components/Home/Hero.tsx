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

const Hero = () => {
  return (
    <SectionContainer className="relative pt-36">
      <Container className="h-screen md:h-[636px] bg-[url(/assets/images/hero-bg.svg)] bg-no-repeat bg-size-[auto_300px] md:bg-size-[auto_493px] bg-left flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex-1 flex flex-col items-start gap-7">
          <Reveal>
            <h1 className="text-5xl md:text-[64px] font-medium text-foreground leading-tight">
              There&apos;s a better way to study.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-foreground">
              Leadlly personalizes your preparation based on how you study. Your
              pace, consistency, and accuracy.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <LinkButton href="#" className="pl-5">
              Find your better way
            </LinkButton>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative flex-1 h-full w-full"
        >
          <Image
            src="/assets/illustrations/svg_5.svg"
            alt="hero-illustration"
            fill
            className="object-contain"
          />
        </motion.div>
      </Container>
    </SectionContainer>
  );
};
export default Hero;
