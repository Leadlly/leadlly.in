"use client";

import { useEffect } from "react";

import { motion, useAnimate, useInView } from "motion/react";

import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

const Reveal = ({ children, delay, className }: Props) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        {
          opacity: 1,
          y: 0,
        },
        { duration: 0.6, delay: delay ?? 0 },
      );
    }
  }, [isInView, animate, delay, scope]);

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0, y: 80 }}
      className={cn("relative overflow-hidden pb-1.5 w-fit", className)}
    >
      {children}
    </motion.div>
  );
};
export default Reveal;
