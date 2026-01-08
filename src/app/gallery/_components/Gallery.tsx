'use client'

import dynamic from 'next/dynamic'
import { Photo } from '@/types/photo'

const GalleryClient = dynamic(
  () => import('./GalleryClient'),
  { ssr: false }
)

interface GalleryProps {
  photos: Photo[]
}

export default function Gallery({ photos }: GalleryProps) {
  return <GalleryClient photos={photos} />
}