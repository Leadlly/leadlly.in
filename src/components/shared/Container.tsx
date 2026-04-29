import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const Container = ({ children, className, ...props }: ContainerProps) => {
  return (
    <div
      className={cn("mx-auto max-w-[1440px] w-full p-4 md:p-16", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
