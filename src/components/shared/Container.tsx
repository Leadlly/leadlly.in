import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto max-w-[1440px] w-full border border-ring rounded-5xl p-8 md:p-16",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
