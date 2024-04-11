import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          "mx-auto h-full w-full max-w-7xl px-16 md:px-20 lg:px-24",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Container.displayName = "Container";

export { Container };
