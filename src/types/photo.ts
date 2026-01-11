export interface Photo {
  id: string
  title: string
  imageUrl: string

  width: number
  height: number

  camera?: string | null
  aperture?: string | null
  shutterSpeed?: string | null
  iso?: number | null

  shotDate?: Date | null
  featured?: boolean
}