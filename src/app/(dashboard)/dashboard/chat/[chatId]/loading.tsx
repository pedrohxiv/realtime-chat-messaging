import { Skeleton } from "@/components/skeleton";

const ChatIdLoading = () => {
  return (
    <div className="flex flex-col h-full items-center">
      <div className="flex w-full py-3 border-b-2 border-gray-200">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="ml-4 flex flex-col gap-2">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-5 w-52" />
        </div>
      </div>
      <div className="flex-1 max-h-full overflow-y-scroll scroll-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch w-full py-3 border-b-2 border-gray-200">
        <div className="flex flex-col flex-auto h-full">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full">
            <div className="flex flex-col h-full overflow-x-auto">
              <div className="flex flex-col h-full justify-end">
                <div className="grid grid-cols-12 gap-y-2">
                  <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="relative h-10 w-8 flex justify-end items-end">
                        <Skeleton className="h-5 w-5 rounded-full" />
                      </div>
                      <div>
                        <Skeleton className="h-10 w-80" />
                      </div>
                    </div>
                  </div>
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="relative h-10 w-8 flex justify-start items-end">
                        <Skeleton className="h-5 w-5 rounded-full" />
                      </div>
                      <div>
                        <Skeleton className="h-10 w-64" />
                      </div>
                    </div>
                  </div>
                  <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="relative h-10 w-8 flex justify-end items-end">
                        <Skeleton className="h-5 w-5 rounded-full" />
                      </div>
                      <div>
                        <Skeleton className="h-10 w-96" />
                      </div>
                    </div>
                  </div>
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="relative h-10 w-8 flex justify-start items-end">
                        <Skeleton className="h-5 w-5 rounded-full" />
                      </div>
                      <div>
                        <Skeleton className="h-10 w-72" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skeleton className="h-20 w-[95%] mt-4" />
    </div>
  );
};

export default ChatIdLoading;
