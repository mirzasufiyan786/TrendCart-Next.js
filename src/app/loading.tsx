export default function Loading() {
    return (
      <div className="h-[97vh] w-[97vw] bg-gray-200 flex items-center justify-center">
        <div className="flex items-center justify-center size-[400px] rounded-lg shadow-xl shadow-gray-400">
          <div className="flex flex-col justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue mb-4 "></div>
          <p className="text-blue">Please wait, loading the content...</p>
          </div>
        </div>
      </div>
    );
  }
  