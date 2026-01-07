export default function GalleryLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <div className="h-16 bg-gray-200 dark:bg-gray-800 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
        <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded-lg w-96 mx-auto animate-pulse"></div>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="break-inside-avoid mb-6 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"
            style={{ height: `${200 + Math.random() * 200}px` }}
          ></div>
        ))}
      </div>
    </div>
  )
}

