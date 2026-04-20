import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import * as motion from "motion/react-client";

import { cn } from "@/lib/utils";
import Reveal from "../shared/Reveal";
import { buttonVariants } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative pt-36 px-3">
      <div className="border border-ring rounded-5xl p-16 container mx-auto w-full h-auto md:h-[636px]  bg-[url(/assets/images/hero-bg.svg)] bg-no-repeat bg-size-[auto_300px] md:bg-size-[auto_493px] bg-left flex flex-col md:flex-row items-center justify-between gap-5">
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
            <Link
              href={"#"}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-16 gap-4 pl-5 text-base md:text-lg font-medium",
              )}
            >
              <span>Find your better way</span>
              <span className="size-10 bg-white flex items-center justify-center rounded-full">
                <HugeiconsIcon
                  icon={ChevronRight}
                  className="text-foreground size-5"
                />
              </span>
            </Link>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="relative flex-1 h-full"
        >
          <Image
            src="/assets/images/hero-illustration.svg"
            alt="hero-illustration"
            fill
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
