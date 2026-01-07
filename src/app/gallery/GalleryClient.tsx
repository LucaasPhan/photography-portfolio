'use client'

import { useState } from 'react'
import Image from 'next/image'
import PhotoModal from '@/components/PhotoModal'
import { Photo } from '@/types/photo'

interface GalleryClientProps {
  photos: Photo[]
}

export default function GalleryClient({ photos }: GalleryClientProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPhoto(null)
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4">
          {photos.map((photo) => {
            // Calculate aspect ratio for proper sizing
            const aspectRatio = photo.width && photo.height 
              ? photo.height / photo.width 
              : 0.75
            const height = Math.floor(300 * aspectRatio) // Base width of 300px

            return (
              <button
                key={photo.id}
                onClick={() => handlePhotoClick(photo)}
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
              </button>
            )
          })}
        </div>

        {photos.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No photos found. Check back soon!
            </p>
          </div>
        )}
      </div>

      <PhotoModal
        photo={selectedPhoto}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}

