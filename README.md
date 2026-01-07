# Photography Portfolio
A personal photography portfolio built with Next.js App Router, optimized image delivery via Cloudinary, and metadata storage using Firebase Firestore.The project focuses on fast image loading, clean presentation, and accurate camera metadata extracted directly from photo files.

## Tech Stack
### Frontend
* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS
* next/image for optimized image rendering
### Image Storage
* Cloudinary
    * Stores original and optimized images
    * Handles responsive delivery and transformations
### Database
* Firebase Firestore
    * Stores photo metadata only (no binaries)
    * No Prisma or MongoDB required
    * Network-friendly and works in restricted environments
### Tooling / Scripts
* Node.js
* EXIF parsing (exifr)
* Custom scripts for:
    * Uploading photos
    * Extracting EXIF data
    * Syncing metadata to Firestore

## Database Design (Firestore)
Each photo is stored as one document in the photos collection.
Stored fields
* id (document ID, derived from filename)
* title
* imageUrl (Cloudinary secure URL)
* width
* height
* camera
* aperture
* shutterSpeed
* iso
No unused fields are stored. Firestore is used purely for metadata, not file storage.

## Project Structure

```
photography-portfolio/
├─ public/                        # Application assets
└─ src/
    ├─ app/
    │  ├─ about/
    │  ├─ contact/
    │  ├─ gallery/
    │  ├─ page.tsx               # Home page (gallery)
    │  ├─ layout.tsx             # Root layout
    │  ├─ not-found.tsx          # 404 fallback
    │  └─ globals.css            # Global styles
    │
    ├─ components/
    │  ├─ _components/
    │  ├─ _constants/
    │  ├─ Navbar.tsx             # Navigation Bar
    │  ├─ Footer.tsx             # Page Footer
    │  ├─ PhotoModal.tsx         # Photo popup modal
    │
    ├─ lib/
    │  ├─ getFeaturedPhotos.ts   # Fetch featured photos for the landing page
    │  ├─ getPhotos/ts           # Fetch photos for the gallery
    │  ├─ firebase-admin.ts      # Firebase Admin DB initialization
    │  ├─ firebase.ts            # Firebase client setup
    │  └─ cloudinary.ts          # Cloudinary config (server-side)
    │
    ├─ scripts/
    │  └─ photo-cli.ts           # Local photo processing CLI 
    │
    ├─ types/
    │  └─ photo.ts              
    │
    ├─ .env                      # Environment variables
    ├─ next.config.js
    ├─ package.json
    └─ README.md
```

## Image Flow
1. Photos are stored locally in public/photos/
2. A script:
    * Extracts EXIF data
    * Uploads images to Cloudinary
    * Saves metadata to Firestore
3. The frontend:
    * Fetches metadata from Firestore
    * Displays images using Cloudinary URLs
    * Shows camera details in a modal popup

## Upload Script Behavior
* Uses the filename as a stable ID
* Safe to rerun multiple times
* Skips photos already uploaded
* Reuploads only failed files
* Prevents duplicates in both Firestore and Cloudinary

## Environment Variables
```
# Firebase
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```