import { cn } from "@/utils/cn";

const LibertyIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 20 17"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-5 h-5 fill-none stroke-2", className)}
    >
      <path
        d="M15 16C15 14.3431 12.7614 13 10 13C7.23858 13 5 14.3431 5 16M19 13.0004C19 11.7702 17.7659 10.7129 16 10.25M1 13.0004C1 11.7702 2.2341 10.7129 4 10.25M16 6.23611C16.6137 5.68679 17 4.8885 17 4C17 2.34315 15.6569 1 14 1C13.2316 1 12.5308 1.28885 12 1.76389M4 6.23611C3.38625 5.68679 3 4.8885 3 4C3 2.34315 4.34315 1 6 1C6.76835 1 7.46924 1.28885 8 1.76389M10 10C8.34315 10 7 8.65685 7 7C7 5.34315 8.34315 4 10 4C11.6569 4 13 5.34315 13 7C13 8.65685 11.6569 10 10 10Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LibertyIcon;
