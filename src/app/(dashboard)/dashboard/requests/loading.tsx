import { Skeleton } from "@/components/skeleton";

const RequestsLoading = () => {
  return (
    <div className="w-full flx flex-col gap-1">
      <Skeleton className="h-14 w-72 mb-8" />
      <div className="flex">
        <Skeleton className="h-8 w-8 rounded-full mr-3" />
        <Skeleton className="h-8 w-44 mr-2" />
        <Skeleton className="h-8 w-8 rounded-full mr-4" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </div>
  );
};

export default RequestsLoading;
