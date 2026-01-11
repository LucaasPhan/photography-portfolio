"use client"
import dynamic from "next/dynamic"
import Image from "next/image"
import { Photo } from "@/types/photo"

const Masonry = dynamic(
  () => import("masonic").then(mod => mod.Masonry),
  { ssr: false }
)

export default function FeaturedMasonry({ photos }: { photos: Photo[] }) {
  return (
    <section className="mb-6">
      <Masonry
        items={photos}
        columnWidth={300}
        columnGutter={16}
        render={({ data }) => (
          <div className="overflow-hidden bg-gray-200 dark:bg-gray-800">
            <Image
              src={data.imageUrl}
              alt={data.title}
              width={data.width}
              height={data.height}
              className="w-full h-auto object-cover"
              quality={100}
            />
          </div>
        )}
      />
    </section>
  )
}