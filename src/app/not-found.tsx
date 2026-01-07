import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Photo Not Found</h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        The photo you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <Link
        href="/"
        className="inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
      >
        Back to Gallery
      </Link>
    </div>
  )
}

