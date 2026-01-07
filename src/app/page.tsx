import Image from 'next/image'
import Link from 'next/link'
import { FaArrowDown } from 'react-icons/fa'
import { getFeaturedPhotos } from "@/lib/getFeaturedPhotos"

export default async function Home() {
  const photos = await getFeaturedPhotos()

  return (
    <>
      <div className="flex flex-col bg-[url('/bg.jpg')] bg-center bg-cover bg-no-repeat overflow-hidden bg-[#202a44]/40 bg-blend-multiply h-[100vh] items-center md:justify-end justify-center max-md:text-center p-10">
        <div className='mb-10 w-full flex flex-col gap-y-3 text-[#ededed]'>
          <span className='2xl:text-8xl md:text-6xl text-4xl font-semibold whitespace-nowrap'>Phan Nhat Huy</span>
          <h2 className='2xl:text-6xl md:text-4xl text-2xl'>Photographer</h2>
        </div>
        <div className="animate-bounce">
          <FaArrowDown size={40}/>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">  
        {/* About Section */}
        <section className="max-w-4xl mx-auto text-center py-16 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Welcome to my photography portfolio. I specialize in capturing the beauty of everyday moments,
            landscapes, and portraits. Each photograph tells a story and preserves a memory that will last forever.
          </p>
        </section>

        {/* Hero Section */}
        <section className="text-center mb-16 mt-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 pb-3 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            Photography Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Capturing moments, one frame at a time
          </p>
        </section>
        
        {/* Gallery Grid */}
        <section className="columns-1 md:columns-2 lg:columns-3 mb-6">
          {photos.map((photo) => {
            const aspectRatio = photo.width && photo.height 
              ? photo.height / photo.width 
              : 0.75
            const height = Math.floor(500 * aspectRatio)
            
            return (
              <div
                key={photo.id}
                className="group relative block break-inside-avoid mb-6 overflow-hidden bg-gray-200 dark:bg-gray-800 transition-transform duration-300 w-full text-left"
              >
                <div className="relative" style={{ height: `${height}px` }}>
                  <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    quality={85}
                    loading="lazy"
                  />
                </div>
              </div>
            )
          })}
        </section>

        {/* View More Link */}
        <div className="text-center mb-16">
          <Link
            href="/gallery"
            className="inline-block bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-3 px-8 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-[105%] transition-transform duration-200"
          >
            View Full Gallery
          </Link>
        </div>

      </div>
    </>
  )
}

