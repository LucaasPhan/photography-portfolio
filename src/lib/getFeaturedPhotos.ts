// lib/getFeaturedPhotos.ts
import {
  collection,
  getDocs,
  query,
  where,
  limit,
  orderBy,
  Timestamp,
} from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Photo } from "@/types/photo"
import { unstable_noStore as noStore } from "next/cache"

export async function getFeaturedPhotos(): Promise<Photo[]> {
  noStore()

  const q = query(
    collection(db, "photos"),
    orderBy("shotDate", "desc"),
    where("featured", "==", true),
    limit(50)
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
      shotDate: data.shotDate
      ? (data.shotDate as Timestamp).toDate()
      : null
    }
  })
}