// components/Navbar.tsx
"use client";
import { useState } from "react";
import { navbarItems } from "./constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import NilorButton from "../NilorButton";
import { GiHamburgerMenu } from "react-icons/gi";
// import { XIcon, MenuIcon } from '@heroicons/react/outline'; // Optional: for hamburger icon and close icon

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <header className="bg-nilor-black sticky top-0 z-50 h-[72px] flex items-center justify-center min-w-full px-4 md:px-10 xl:px-0">
      <nav className="container mx-auto flex items-center justify-between w-full max-w-[1152px]">
        {/* Logo */}
        <Link href="/" className="relative w-[32px] h-[32px] md:w-[48px] md:h-[48px]">
          <Image src={"/nilor_new_logo.png"} alt="nilor logo" fill />
        </Link>
        {/* Desktop Navbar Items */}
        <div className="hidden md:flex items-center justify-between w-fit gap-x-24">
          <div className="flex gap-x-6">
            {navbarItems.map((item) => (
              <Link
                key={item.name}
                className={`text-nilor-offwhite text-sm hover:text-nilor-accent hover:transform hover:scale-105 transition-all duration-300 ${
                  pathname.toLocaleLowerCase() === item.link ? "!text-nilor-accent font-bold" : ""
                }`}
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-x-4">
          {/* <button className="font-bold text-nilor-white transform hover:scale-95 transition-all duration-200 bg-transparent hover:bg-nilor-accent rounded-full px-5 py-2">
            Login
          </button> */}
          <button
            onClick={() => router.push("/about")}
            className="text-nilor-white text-sm bg-transparent border rounded-full px-5 py-2 font-bold hover:bg-nilor-accent hover:border-nilor-accent transform hover:scale-95 transition-all duration-200"
          >
            Contact Us
          </button>
          {/* <button
            onClick={() => router.push("/demo")}
            className="text-nilor-white text-sm bg-transparent border rounded-full px-5 py-2 font-bold hover:bg-nilor-accent hover:border-nilor-accent transform hover:scale-95 transition-all duration-200"
          >
            Book a Demo
          </button> */}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-nilor-offwhite text-xl">
            {isOpen ? "" : <GiHamburgerMenu/>} {/* X for close, ☰ for menu */}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Sliding Panel) */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed right-0 top-0 w-full max-w-[500px] bg-nilor-black text-nilor-white h-full p-6 shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-nilor-white text-2xl"
          >
            ✕
          </button>
          <ul className="mt-20 mx-auto flex flex-col items-center gap-y-8">
            {navbarItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className={`text-lg block hover:text-nilor-accent ${
                    pathname.toLocaleLowerCase() === item.link ? "text-nilor-accent font-bold" : ""
                  }`}
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {/* <li>
              <button className="w-full text-center py-2 bg-nilor-accent text-nilor-white rounded-lg mt-6">
                Login
              </button>
            </li> */}
            <li>
              {/* <button
                onClick={() => {
                  toggleMenu();
                  router.push("/contact");
                }}
                className="w-full text-center py-2 bg-transparent border border-nilor-accent text-nilor-white rounded-lg mt-2"
              >
                Contact Us
              </button> */}
              <NilorButton text="Contact Us" onClick={() => {
                  toggleMenu();
                  router.push("/about");
                }}/>
            </li>
            {/* <li>
              <button
                onClick={() => {
                  toggleMenu();
                  router.push("/demo");
                }}
                className="w-full text-center py-2 bg-transparent border border-nilor-accent text-nilor-white rounded-lg mt-2"
              >
                Book a Demo
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
