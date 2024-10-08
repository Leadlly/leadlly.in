import { cn } from "@/utils/cn";
import React from "react";

const ValuableInsights = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("size-7", className)}
      width="231"
      height="231"
      viewBox="0 0 231 231"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#a)" fill="#302A39">
        <path d="M221.375 211.75H48.125a28.875 28.875 0 0 1-28.875-28.875V9.625a9.625 9.625 0 0 0-19.25 0v173.25A48.183 48.183 0 0 0 48.125 231h173.25a9.625 9.625 0 1 0 0-19.25Z" />
        <path d="M57.75 192.5a9.625 9.625 0 0 0 9.625-9.625V115.5a9.625 9.625 0 1 0-19.25 0v67.375a9.625 9.625 0 0 0 9.625 9.625Zm38.5-96.25v86.625a9.625 9.625 0 1 0 19.25 0V96.25a9.625 9.625 0 1 0-19.25 0Zm48.125 28.875v57.75a9.625 9.625 0 1 0 19.25 0v-57.75a9.625 9.625 0 1 0-19.25 0Zm48.125-38.5v96.25a9.625 9.625 0 1 0 19.25 0v-96.25a9.625 9.625 0 1 0-19.25 0Zm-134.75 0c2.553 0 5-1.015 6.805-2.82L99.07 49.289a9.866 9.866 0 0 1 13.61 0l20.905 20.906a28.876 28.876 0 0 0 40.83 0L228.18 16.43a9.625 9.625 0 0 0-13.61-13.61l-53.765 53.756a9.626 9.626 0 0 1-13.61 0L126.29 35.68a28.875 28.875 0 0 0-40.83 0L50.945 70.195a9.625 9.625 0 0 0 6.805 16.43Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h231v231H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ValuableInsights;
