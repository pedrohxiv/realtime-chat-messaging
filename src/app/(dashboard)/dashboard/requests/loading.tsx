import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RequestsLoading = () => {
  return (
    <div className="w-full flx flex-col gap-1">
      <Skeleton className="mb-8" height={55} width={285} />
      <div className="flex">
        <Skeleton className="mr-3" height={30} width={30} circle />
        <Skeleton className="mr-2" height={30} width={180} />
        <Skeleton className="mr-4" height={30} width={30} circle />
        <Skeleton height={30} width={30} circle />
      </div>
    </div>
  )
}

export default RequestsLoading