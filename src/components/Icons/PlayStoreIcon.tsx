import { cn } from "@/lib/utils";

const PlayStoreIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("size-4", className)}
    aria-hidden="true"
  >
    <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92Zm10.89 10.893 2.302 2.302-10.937 6.333 8.635-8.635Zm3.199-3.198 2.337 1.353c.8.462.8 1.617 0 2.08l-2.337 1.353L15.245 12l2.453-2.491ZM5.864 2.658 16.8 8.991l-2.302 2.302-8.634-8.635Z" />
  </svg>
);

export default PlayStoreIcon;
