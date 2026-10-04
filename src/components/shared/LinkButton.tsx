"use client";

import { MouseEvent, ReactNode } from "react";
import Link from "next/link";

import { ChevronRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

interface LinkButtonProps
  extends
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  href: string;
  className?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
}

const LinkButton = ({
  children,
  href,
  className,
  variant = "default",
  size = "default",
  iconContainerClassName = "",
  iconClassName = "",
  onClick,
  ...props
}: LinkButtonProps) => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || !href.startsWith("#")) return;

    const id = href.slice(1);
    if (!id) return;

    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", href);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        buttonVariants({ size, variant }),
        "h-14 gap-4 text-base md:text-lg font-medium",
        className,
      )}
      {...props}
    >
      {children}

      <span
        className={cn(
          "size-10 bg-white/65 flex items-center justify-center rounded-full",
          iconContainerClassName,
        )}
      >
        <HugeiconsIcon
          icon={ChevronRight}
          className={cn("text-primary-foreground size-6", iconClassName)}
        />
      </span>
    </Link>
  );
};

export default LinkButton;
