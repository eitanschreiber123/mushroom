export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="animate-pulse">
        <div className="bg-gray-200 h-12 w-full mb-4"></div>
        <div className="bg-gray-200 h-20 w-full mb-8"></div>
        <div className="flex px-6">
          <div className="w-1/2 pr-8">
            <div className="bg-gray-200 h-96 w-full"></div>
          </div>
          <div className="w-1/2">
            <div className="bg-gray-200 h-8 w-3/4 mb-4"></div>
            <div className="space-y-4">
              <div className="bg-gray-200 h-16 w-full"></div>
              <div className="bg-gray-200 h-16 w-full"></div>
              <div className="bg-gray-200 h-16 w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
