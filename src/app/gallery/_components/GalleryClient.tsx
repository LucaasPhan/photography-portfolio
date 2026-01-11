'use client'

import { useState } from 'react'
import { Masonry } from 'masonic'
import Image from 'next/image'
import PhotoModal from '@/components/PhotoModal'
import { Photo } from '@/types/photo'
import React from 'react'

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

  const PhotoCard = React.memo(function PhotoCard({
    photo,
  }: {
    photo: Photo
  }) {
    return (
      <button
        onClick={() => handlePhotoClick(photo)}
        className="group block w-full overflow-hidden"
      >
        <div style={{ aspectRatio: `${photo.width} / ${photo.height}` }}>
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            width={photo.width}
            height={photo.height}
            quality={100}
            className='w-full h-auto object-cover transition-opacity duration-500'
          />
        </div>
      </button>
    )
  })
  
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Masonry Grid Layout */}
        <Masonry
          items={photos}
          columnWidth={300}
          columnGutter={16}
          overscanBy={2}
          render={({ data }) => (
            <PhotoCard photo={data}/>
          )}
        />

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