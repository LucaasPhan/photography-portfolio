export default function GallerySkeleton() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-5">
                {[...Array(12)].map((_, i) => (
                <div
                    key={i}
                    className="break-inside-avoid mb-5 bg-gray-200 dark:bg-gray-800 animate-pulse"
                    style={{ height: `${200 + Math.random() * 200}px` }}
                ></div>
                ))}
            </div>
        </div>
)}