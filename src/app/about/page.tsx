export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-5xl font-bold mb-8 text-center">About</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
          Welcome to my photography portfolio. I am a passionate photographer dedicated to capturing
          the beauty of the world around us, one frame at a time.
        </p>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          My journey in photography began over a decade ago, and since then, I&apos;ve traveled to
          countless destinations, always with my camera in hand. From the serene landscapes of
          mountain ranges to the vibrant energy of urban streets, I seek to tell stories through
          my lens.
        </p>
        
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          I specialize in landscape, portrait, street, and nature photography. Each photograph
          represents a moment frozen in time, a memory preserved, and an emotion captured. My goal
          is to share these moments with you and inspire you to see the world from a different
          perspective.
        </p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6">My Approach</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I believe that great photography is about more than just technical skill—it&apos;s about
          connecting with your subject, understanding light, and being patient enough to wait for
          the perfect moment. Every shot is carefully composed and thoughtfully captured to convey
          the essence of the scene.
        </p>
      </div>
    </div>
  )
}

