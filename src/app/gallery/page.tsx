import Gallery from './_components/Gallery'
import { getPhotos } from '@/lib/getPhotos'

export default async function GalleryPage() {
  const photos = await getPhotos()

  return <Gallery photos={photos} />
}

