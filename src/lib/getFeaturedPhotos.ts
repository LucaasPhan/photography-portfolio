// lib/getFeaturedPhotos.ts
import {
  collection,
  getDocs,
  query,
  where,
  limit,
  orderBy,
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
      ...data,
      shotDate: data.shotDate
        ? data.shotDate.toDate().toISOString()
        : null,
    } as Photo
  })
}