import GalleryClient from './GalleryClient'
import { getPhotos } from '@/lib/getPhotos'

export default async function GalleryPage() {
  const photos = await getPhotos()

  return <GalleryClient photos={photos} />
}

