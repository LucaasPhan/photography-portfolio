"use client"
import Image from "next/image"
import { Photo } from "@/types/photo"
import React from "react"
import { Masonry } from "masonic"

export default function FeaturedMasonry({ photos }: { photos: Photo[] }) {
  const PhotoCard = React.memo(function PhotoCard({
    photo,
  }: {
    photo: Photo
  }) {
    return (
      <div className="overflow-hidden bg-gray-200 dark:bg-gray-800">
        <Image
          src={photo.imageUrl}
          alt={photo.title}
          width={photo.width}
          height={photo.height}
          className="w-full h-auto object-cover"
          quality={100}
        />
      </div>
    )
  })

  return (
    <section className="mb-6">
      <Masonry
        items={photos}
        columnWidth={300}
        columnGutter={16}
        render={({ data }) => (
          <PhotoCard photo={data}/>
        )}
      />
    </section>
  )
}