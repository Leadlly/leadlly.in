"use client";

import { useEffect, useRef, type JSX } from "react";

import { motion, useAnimation, useInView } from "motion/react";

import { cn } from "@/lib/utils";

type Props = {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay?: number;
  motionDivClass?: string;
  className?: string;
};
const Reveal = ({
  children,
  width = "fit-content",
  delay,
  motionDivClass,
  className,
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        width,
        overflow: "hidden",
        paddingBottom: "5px",
      }}
      className={cn(className)}
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: 80,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        className={cn(motionDivClass)}
        animate={controls}
        transition={{ duration: 0.6, delay: delay ?? 0 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
export default Reveal;
