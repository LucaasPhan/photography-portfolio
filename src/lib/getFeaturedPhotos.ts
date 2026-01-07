// lib/getFeaturedPhotos.ts
import {
  collection,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore"
import { db } from "@/lib/firebase"
import { Photo } from "@/types/photo"

export async function getFeaturedPhotos(): Promise<Photo[]> {
  const q = query(
    collection(db, "photos"),
    where("featured", "==", true),
    limit(12)
  )

  const snapshot = await getDocs(q)

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...(doc.data() as Omit<Photo, "id">),
  }))
}
