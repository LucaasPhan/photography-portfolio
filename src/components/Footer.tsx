import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 dark:bg-gray-900 text-color justify-around block w-full">
        <div className="flex flex-col md:flex-row items-center justify-between py-2 gap-3 px-[25vw]">
          <div className="flex justify-center items-center py-2 order-1 md:order-0 text-sm whitespace-nowrap">
            <p>&copy; {currentYear} Phan Nhat Huy</p>
          </div>
          <div className="flex items-center justify-center order-0 md:order-1 flex-shrink-0">
            <a 
              href="https://instagram.com/Lucaas.phan/"
              title="Instagram"
              target="_blank"
              rel="noopener"
              className="mr-1">
                <FaInstagram className="color"/>
            </a>
            <a 
              href="https://facebook.com/Lucaasphan"
              title="Instagram"
              target="_blank"
              rel="noopener">
                <FaFacebook className="color"/>
            </a>
          </div>
        </div>
      </footer>
  )
}

