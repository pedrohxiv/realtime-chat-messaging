import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ChatIdLoading = () => {
  return (
    <div className="flex flex-col h-full items-center">
      <div className="flex w-full py-3 border-b-2 border-gray-200">
        <Skeleton circle height={50} width={50} />
        <div className="ml-4 flex flex-col">
          <Skeleton height={25} width={120} />
          <Skeleton height={20} width={200} />
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
                        <Skeleton width={20} height={20} circle />
                      </div>
                      <div>
                        <Skeleton width={260} height={40} />
                      </div>
                    </div>
                  </div>
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="relative h-10 w-8 flex justify-start items-end">
                        <Skeleton width={20} height={20} circle />
                      </div>
                      <div>
                        <Skeleton width={250} height={40} />
                      </div>
                    </div>
                  </div>
                  <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="relative h-10 w-8 flex justify-end items-end">
                        <Skeleton width={20} height={20} circle />
                      </div>
                      <div>
                        <Skeleton width={280} height={40} />
                      </div>
                    </div>
                  </div>
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="relative h-10 w-8 flex justify-start items-end">
                        <Skeleton width={20} height={20} circle />
                      </div>
                      <div>
                        <Skeleton width={270} height={40} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Skeleton className="mt-4" width={965} height={80} />
    </div>
  );
};

export default ChatIdLoading;
