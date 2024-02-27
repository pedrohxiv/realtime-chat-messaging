import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AddLoading = () => {
  return (
    <div className="w-full flx flex-col gap-1">
      <Skeleton className="mb-4" height={55} width={285} />
      <Skeleton className="mb-1" height={20} width={130} />
      <div className="flex gap-5">
        <Skeleton height={40} width={310} />
        <Skeleton height={40} width={55} />
      </div>
    </div>
  );
};

export default AddLoading;
