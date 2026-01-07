"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Anchor from "./_components/Anchor";
import { PAGE_INFO } from "./_constants/constants";
import { useState, useRef, useEffect } from "react";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const pathName = usePathname()
    const isLanding = pathName === "/"
    const containerRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (toggle && containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setToggle(false)
        }
      }

      const handleScroll = () => {
        setScrolled(window.scrollY > 50)
      }

      window.addEventListener("scroll", handleScroll)

      if (toggle) {
        window.addEventListener("mousedown", handleClickOutside)
      }
      
      return () => {
        window.removeEventListener("mousedown", handleClickOutside)
        window.removeEventListener("scroll", handleScroll)
      }
    }, [toggle, setScrolled])

    return (
        <header className={`${isLanding ? "fixed" : "sticky"} ${toggle ? "max-xl:bg-gray-300/70 dark:bg-gray-900/70" : "shadow-xl"} ${scrolled ? "bg-gray-200 dark:bg-gray-900/80" : null} top-0 w-[100vw] z-50 backdrop-blur-md transition-all duration-500`}>
            <nav className="flex items-center justify-between py-2 relative gap-3 xl:px-[10%] 2xl:px-[20%] px-[3%]">
                <Link
                href="/"
                className={`text-2xl font-bold bg-gradient-to-r ${isLanding && !toggle ? "from-gray-100 to-gray-400" : "from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400"} ${scrolled ? "from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400" : "from-gray-100 to-gray-400"} max-xl:text-md bg-clip-text text-transparent`}
                >
                  LucasPhan
                </Link>
                <div
                className={`flex flex-col ${
                toggle ? null : "hidden"
                } w-full xl:w-max items-center xl:flex-row absolute xl:flex xl:relative left-0 top-[100%] hover:cursor-pointer py-0 z-10`}
                >
                    <div ref={containerRef} className={`flex flex-col xl:flex-row xl:w-max w-full absolute xl:relative left-0 drop-shadow-xl max-xl:bg-gray-300/80 max-xl:dark:bg-gray-900/80 font-medium xl:bg-transparent max-xl:animate-[fade_0.45s_ease-in-out]`} onClick={() => setToggle(false)}>
                    {PAGE_INFO.map((item, index) => (
                            <div className={`px-2 py-2 space-y-1 text-right block max-xl:animate-[open-menu_0.${30 + 5*index}s_ease-in-out]`} key={index}>
                                <Anchor toggle={toggle} isLanding={isLanding} href={item.href} text={item.page_name}/>
                            </div>
                    ))}
                    </div>
                </div>
                <div className={`block xl:hidden size-[16px] items-center cursor-pointer ${isLanding && !toggle ? "text-gray-300" : "text-gray-900 dark:text-gray-300"}`} onClick={() => setToggle(!toggle)}>
                    {toggle ? ( <ImCross size={14}/> ) : ( <FaBars size={15}/> )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;