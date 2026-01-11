'use client'
import { Photo } from '@/types/photo';
import dynamic from 'next/dynamic';

const FeaturedMasonryClient = dynamic(
    () => import('./FeaturedMasonryClient'),
    { ssr: false }
  )
  
export default function FeaturedMasonry({ photos }: {photos: Photo[]}) {
    return (
        <section className='mb-6'>
            <FeaturedMasonryClient photos={photos}/>
        </section>
    )
}