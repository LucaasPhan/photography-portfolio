'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Photo } from '@/types/photo'

interface PhotoModalProps {
  photo: Photo | null
  isOpen: boolean
  onClose: () => void
}

export default function PhotoModal({ photo, isOpen, onClose }: PhotoModalProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && containerRef.current && !containerRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleEscape)
      window.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen || !photo) {
    return null
  }

  const hasCameraData = photo.camera || photo.shutterSpeed || photo.aperture || photo.iso

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-7xl max-h-[90vh] w-full mx-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-13 right-0 text-white hover:text-gray-300 transition-colors z-10"
          aria-label="Close modal"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Image Container */}
        <div className="flex relative w-full h-[100vh] overflow-hidden max-md:items-center justify-center">
          <div
            className="flex relative max-md:w-full"
            style={{
              aspectRatio: photo.width && photo.height 
                ? `${photo.width} / ${photo.height}` 
                : '4 / 3',
              maxHeight: '80vh',
            }}
            ref={containerRef}
          >
            <Image
              src={photo.imageUrl}
              alt={photo.title}
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </div>
        </div>

        {/* Info Panel - Only show if there's camera data */}
        {hasCameraData && (
          <div className="p-6 space-y-4">
            <div className="flex justify-center gap-x-12">
              {photo.camera && (
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Camera</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {photo.camera}
                  </p>
                </div>
              )}
              
              {photo.shutterSpeed && (
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Shutter Speed</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {photo.shutterSpeed}
                  </p>
                </div>
              )}
              
              {photo.aperture && (
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Aperture</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {photo.aperture}
                  </p>
                </div>
              )}
              
              {photo.iso && (
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">ISO</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {photo.iso}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}