import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const SectionContainer = ({
  children,
  className,
  ...props
}: SectionContainerProps) => {
  return (
    <section className={cn("px-3", className)} {...props}>
      {children}
    </section>
  );
};

export default SectionContainer;
