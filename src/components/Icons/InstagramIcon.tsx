import { cn } from "@/utils/cn";
import React from "react";

const InstagramIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width={256}
      height={256}
      className={cn("w-5 h-5 fill-none stroke-2", className)}
      id="Instagram"
    >
      <rect width="256" height="256" fill="none"></rect>
      <circle cx="128" cy="128" r="32" fill="#57525f"></circle>
      <path
        d="M172,28H84A56.06353,56.06353,0,0,0,28,84v88a56.06353,56.06353,0,0,0,56,56h88a56.06353,56.06353,0,0,0,56-56V84A56.06353,56.06353,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48.05436,48.05436,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z"
        fill="#57525f"
      ></path>
    </svg>
  );
};

export default InstagramIcon;
