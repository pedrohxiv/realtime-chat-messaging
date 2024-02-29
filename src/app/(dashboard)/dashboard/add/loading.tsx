import { Skeleton } from "@/components/skeleton";

const AddLoading = () => {
  return (
    <div className="w-full flx flex-col gap-1">
      <Skeleton className="h-14 w-72 mb-6" />
      <Skeleton className="h-5 w-32 mb-3" />
      <div className="flex gap-5">
        <Skeleton className="h-10 w-80" />
        <Skeleton className="h-10 w-14" />
      </div>
    </div>
  );
};

export default AddLoading;
