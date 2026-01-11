import { FaFacebook, FaInstagram } from "react-icons/fa6";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-5xl font-bold mb-8 text-center">About</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        Hello! I am Phan Nhat Huy (LucasPhan). I am a Vietnamese high school student who has been pursuing photography since 2022, starting with a smartphone and transitioning to a camera in November 2023. I explore a wide range of genres including street, studio art, product, and event photography, with landscape and event photography being my strongest focus.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        I am a co-founder of Quarter36 Studio and a former Vice President of my school’s media and photography club (Central Park Media Crew). Photography remains my core passion, and I am committed to developing it as a long-term artistic skill for my future creative work.
        </p>
        
        <h2 className="text-3xl font-bold mt-12 mb-6">My Approach</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        My approach emphasizes dramatic lighting, clean compositions, natural color tones, and a clear focus on the subject. I am especially inspired by the light and colors of nature and how they change over time. Through landscape photography, I aim to share the beauty of nature, while in event photography, I see each image as a meaningful memory captured in the moment.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">Contact</h2>
        <div className="flex items-start gap-1">
            <a 
              href="https://instagram.com/Lucaas.phan/"
              title="Instagram"
              target="_blank"
              rel="noopener">
                <FaInstagram size={30}></FaInstagram>
            </a>
            <a 
              href="https://facebook.com/Lucaasphan"
              title="Instagram"
              target="_blank"
              rel="noopener">
                <FaFacebook size={30}></FaFacebook>
            </a>
          </div>
      </div>
    </div>
  )
}