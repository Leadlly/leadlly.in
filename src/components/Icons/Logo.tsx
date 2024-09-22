import { cn } from "@/utils/cn";

type Props = { className?: string };
const Logo = ({ className }: Props) => {
  return (
    <svg
      width="39"
      height="39"
      viewBox="0 0 39 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-7", className)}
    >
      <path
        d="M5 9.27701C5 7.46717 6.46717 6 8.27701 6C16.5567 6 23.2687 12.712 23.2687 20.9917V33.1324H13.2945C8.71356 33.1324 5 29.4188 5 24.8379V9.27701Z"
        fill="url(#paint0_linear_6545_11416)"
      />
      <path
        d="M35 23.0999C35 22.1761 34.2511 21.4272 33.3273 21.4272C29.1012 21.4272 25.6752 24.8532 25.6752 29.0794V33.0916H31.0111C33.2141 33.0916 35 31.3058 35 29.1028V23.0999Z"
        fill="url(#paint1_linear_6545_11416)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6545_11416"
          x1="7.91879"
          y1="6"
          x2="8.26632"
          y2="36.6235"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6298D5" />
          <stop offset="1" stop-color="#5900D9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_6545_11416"
          x1="30.3376"
          y1="21.4272"
          x2="30.3376"
          y2="33.0916"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6298D5" />
          <stop offset="1" stop-color="#6204ED" />
          <stop offset="1" stop-color="#5900D9" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default Logo;
