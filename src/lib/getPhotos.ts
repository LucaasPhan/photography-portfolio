import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Photo } from '@/types/photo'
import { Timestamp } from 'firebase-admin/firestore'

export const dynamic = "force-dynamic"
export async function getPhotos(): Promise<Photo[]> {
  const q = query(
    collection(db, "photos"),
    orderBy("shotDate", "desc")
  )
  const snapshot = await getDocs(q)
  
  return snapshot.docs.map(doc => {
    const data = doc.data()

    return {
      id: doc.id,
      title: data.title,
      imageUrl: data.imageUrl,

      width: data.width,
      height: data.height,

      camera: data.camera ?? '',
      aperture: data.aperture ?? '',
      shutterSpeed: data.shutterSpeed ?? '',
      iso: data.iso ?? null,
      shotDate: data.shotDate
      ? (data.shotDate as Timestamp).toDate()
      : null,
      featured: data.featured ?? false,
    }
  })
}
