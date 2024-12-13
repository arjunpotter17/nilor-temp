// components/Navbar.tsx
"use client";
import { useState } from "react";
import { navbarItems } from "./constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
// import { XIcon, MenuIcon } from '@heroicons/react/outline'; // Optional: for hamburger icon and close icon

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-nilor-black sticky top-0 z-50 h-[100px] flex item-center justify-center">
      <nav className="container mx-auto flex items-center justify-center gap-x-32 w-full">
        {/* Logo */}
        <Link href="/" className="relative w-[60px] h-[60px]">
          <Image src={"/Full-White192.png"} alt="nilor logo" fill />
        </Link>
        {/* Desktop Navbar Items */}
        <div className="hidden md:flex items-center justify-between gap-x-32">
          <div className="flex gap-x-6">
            {navbarItems.map((item) => (
              <Link
                key={item.name}
                className={`text-nilor-offwhite font-nilor-semibold text-sm hover:text-nilor-accent hover:transform hover:scale-105 transition-all duration-300 ${
                  pathname === item.link ? "text-pink-500 font-bold" : ""
                }`}
                href={item.link}
              >
                {item.name.toLocaleUpperCase()}
              </Link>
            ))}
          </div>
          <div className="flex gap-x-4">
            <button className="font-bold text-nilor-white transform hover:scale-95 transition-all duration-200 bg-transparent hover:bg-nilor-accent rounded-full px-7 py-3">
              LOGIN
            </button>
            <button className="text-nilor-white bg-transparent border rounded-full px-7 py-3 font-bold hover:bg-nilor-accent hover:border-nilor-accent transform hover:scale-95 transition-all duration-200">
              Contact Us
            </button>
            <button
              onClick={() => router.push("/demo")}
              className="text-nilor-white bg-transparent border rounded-full px-7 py-3 font-bold hover:bg-nilor-accent hover:border-nilor-accent transform hover:scale-95 transition-all duration-200"
            >
              Book a Demo
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800">
            {!isOpen ? (
              //   <MenuIcon className="h-6 w-6" />
              <p>menu</p>
            ) : (
              //   <XIcon className="h-6 w-6" />
              <p>close</p>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Side Panel) */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed left-0 top-0 w-3/4 bg-white h-full p-6 transition-transform duration-300 ${
            isOpen ? "transform translate-x-0" : "transform translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-gray-800"
          >
            {/* <XIcon className="h-8 w-8" /> */}
            close
          </button>
          <ul className="space-y-4 mt-12">
            <li>
              <a href="#solutions" className="text-lg text-gray-800">
                Solutions
              </a>
            </li>
            <li>
              <a href="#products" className="text-lg text-gray-800">
                Products
              </a>
            </li>
            <li>
              <a href="#services" className="text-lg text-gray-800">
                Services
              </a>
            </li>
            <li>
              <a href="#learn" className="text-lg text-gray-800">
                Learn
              </a>
            </li>
            <li>
              <a href="#insights" className="text-lg text-gray-800">
                Insights
              </a>
            </li>
            <li>
              <a href="#about" className="text-lg text-gray-800">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="text-lg text-gray-800">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#demo" className="text-lg text-gray-800">
                Book a Demo
              </a>
            </li>
            <li>
              <a
                href="#login"
                className="block w-full text-center py-2 bg-blue-500 text-white rounded-lg"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
