import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowRight, type LucideIcon } from "lucide-react";

import { COHORT_CHECKOUT_HREF } from "@/helpers/constants/cohort";
import { cn } from "@/lib/utils";

export function CohortIcon({
  icon: Icon,
  className,
  size = 20,
}: {
  icon: LucideIcon;
  className?: string;
  size?: number;
}) {
  return (
    <Icon className={className} size={size} strokeWidth={2.15} aria-hidden />
  );
}

export function CohortCta({
  children,
  className,
  href = COHORT_CHECKOUT_HREF,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "cohort-cta inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 font-extrabold text-white",
        className,
      )}
    >
      {children}
      <ArrowRight className="size-4 shrink-0 sm:size-5" strokeWidth={2.5} />
    </Link>
  );
}

export function CohortEyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs font-extrabold uppercase tracking-[.2em] text-primary",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function CohortDisplay({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p";
}) {
  return (
    <Tag
      className={cn("font-serif font-medium tracking-[-0.025em]", className)}
    >
      {children}
    </Tag>
  );
}

export function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[180px] rounded-[1.75rem] border-[5px] border-[#1a1a1a] bg-white p-2 shadow-xl",
        className,
      )}
    >
      <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-[#1a1a1a]" />
      {children}
    </div>
  );
}

export function FramedIllustration({
  src,
  alt,
  tilt = "right",
  children,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  tilt?: "left" | "right";
  children?: ReactNode;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative mx-auto w-full max-w-lg", className)}>
      <div
        className={cn(
          "absolute -inset-3 rounded-[2.5rem] bg-primary",
          tilt === "right" ? "rotate-3" : "-rotate-3 rounded-[2rem]",
        )}
      />
      <div className="relative overflow-hidden rounded-[2rem] border-2 border-[#1a1a1a] bg-white p-5 shadow-2xl sm:p-8">
        <Image
          src={src}
          alt={alt}
          width={640}
          height={480}
          className="mx-auto h-auto w-full object-contain"
          priority={priority}
        />
        {children}
      </div>
    </div>
  );
}
