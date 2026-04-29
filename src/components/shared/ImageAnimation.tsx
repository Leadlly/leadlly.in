"use client";

import { useEffect } from "react";
import Image from "next/image";

import { motion, useAnimate, useInView } from "motion/react";

import { cn } from "@/lib/utils";

const ImageAnimation = ({
  src,
  className,
  alt,
}: {
  src: string;
  className?: string;
  alt: string;
}) => {
  const [scope, animate] = useAnimate();

  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(
        scope.current,
        { opacity: 1, filter: "blur(0px)" },
        { duration: 0.5, delay: 0.1, ease: "easeInOut" },
      );
    }
  }, [isInView]);

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      className={cn("relative", className)}
    >
      <Image src={src} alt={alt} fill className={cn("object-contain")} />
    </motion.div>
  );
};

export default ImageAnimation;
