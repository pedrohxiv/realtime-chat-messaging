import { cn } from "@/lib/utils";

export const Skeleton = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-slate-900/10", className)}
    />
  );
};
